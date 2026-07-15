using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;

namespace PortfolioAPI.Services;

public class MailService
{
    private readonly IConfiguration _configuration;
    private readonly HttpClient _httpClient;

    public MailService(IConfiguration configuration, IHttpClientFactory httpClientFactory)
    {
        _configuration = configuration;
        _httpClient = httpClientFactory.CreateClient();
    }

    public async Task SendAsync(string from, string subject, string message)
    {
        var apiKey = _configuration["Resend:ApiKey"];
        if (string.IsNullOrWhiteSpace(apiKey))
        {
            throw new InvalidOperationException("Resend API key tanımlı değil.");
        }

        var encodedFrom = HtmlEncoder.Default.Encode(from);
        var encodedMessage = HtmlEncoder.Default.Encode(message).Replace("\n", "<br>");

        var body = new
        {
            from = "Portfolio <onboarding@resend.dev>",
            to = new[]
            {
                "beyzakocc21@hotmail.com"
            },
            subject = subject,
            html = $"""
                    <h2>Yeni Portfolio Mesajı</h2>

                    <p><strong>Gönderen:</strong> {encodedFrom}</p>

                    <hr>

                    <p>{encodedMessage}</p>
                    """
        };

        var json = JsonSerializer.Serialize(body);
        using var request = new HttpRequestMessage(HttpMethod.Post, "https://api.resend.com/emails");
        request.Headers.Add("Authorization", $"Bearer {apiKey}");
        request.Content = new StringContent(
            json,
            Encoding.UTF8,
            "application/json");

        var response = await _httpClient.SendAsync(request);

        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadAsStringAsync();
            throw new InvalidOperationException($"Resend mail gönderimini reddetti: {error}");
        }
    }
}
