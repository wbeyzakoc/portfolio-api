var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddHttpClient();
builder.Services.AddScoped<PortfolioAPI.Services.MailService>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("PortfolioFrontend", policy =>
    {
        var configuredOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>()
            ?? Array.Empty<string>();

        var allowedOrigins = configuredOrigins
            .Concat(new[]
            {
                "http://localhost:5173",
                "https://wbeyzakoc.github.io"
            })
            .Select(origin => origin.Trim())
            .Where(origin => !string.IsNullOrWhiteSpace(origin))
            .Select(origin =>
            {
                if (Uri.TryCreate(origin, UriKind.Absolute, out var uri))
                {
                    return uri.GetLeftPart(UriPartial.Authority);
                }

                return origin.TrimEnd('/');
            })
            .Distinct()
            .ToArray();

        policy
            .WithOrigins(allowedOrigins)
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors("PortfolioFrontend");

app.MapControllers();

app.MapGet("/", () =>
{
    return Results.Ok(new { status = "Portfolio API is running" });
});

app.Run();
