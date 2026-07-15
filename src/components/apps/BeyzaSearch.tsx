import { useState } from "react";
export default function BeyzaSearch() {
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);
    const faqs = [
  {
    question: "Beyza Koç hangi teknolojileri kullanıyor?",
    answer:
      ".NET, ASP.NET Core, SQL Server, Entity Framework Core ve Clean Architecture üzerine çalışmaktadır.",
  },

  {
    question: "Beyza Koç'un projeleri nelerdir?",
    answer:
      "MacOS Portfolio, ERP System, Office Management System, Book For All, AI Career Assistant ve çeşitli .NET projeleri geliştirdi.",
  },
  {
    question: "Beyza Koç hangi alanda çalışıyor?",
    answer:
      "Backend geliştirme, web uygulamaları, API geliştirme ve kurumsal yazılım mimarileri üzerine odaklanmaktadır.",
  },
];
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflowY: "auto",
        background: "#fff",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
          minHeight: "1800px",
        }}
      >
        {/* Logo */}
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          style={{
            width: "180px",
            marginBottom: "30px",
          }}
        />

        {/* Search */}
        <div
          style={{
            border: "1px solid #dfe1e5",
            borderRadius: "30px",
            padding: "14px 24px",
            boxShadow: "0 1px 6px rgba(32,33,36,.15)",
            marginBottom: "40px",
            fontSize: "18px",
            maxWidth: "700px",
          }}
        >
          🔍 Beyza Koç kimdir
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "40px",
          }}
        >
          {/* SOL TARAF */}
          <div>
            {[
              {
                title: "Beyza Koç | Software Engineer Student",
                text:
                  "Beyza Koç, backend geliştirme alanında çalışan bir yazılım öğrencisidir .NET, SQL Server, ve SignalR teknolojileri üzerine çalışmıştır.",
             
                link: "https://www.linkedin.com/in/wbeyzakoc/",
              },
              {
                title: "GitHub - Beyza Koç",
                text:
                  "ERP System • Office Management System • Book For All • macOS Portfolio",
                site: "github.com",
                link:"https://github.com/wbeyzakoc",
              },
              {
                title: "LinkedIn - Beyza Koç",
                text:
                  "Software Developer • Software Engineer Student • Intern",
                site: "linkedin.com",
                    link: "https://www.linkedin.com/in/wbeyzakoc/"

              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  marginBottom: "40px",
                }}
              >
                <div
                  style={{
                    color: "#202124",
                    fontSize: "14px",
                  }}
                >
                  {item.site}
                </div>

             <h2
  onClick={() => window.open(item.link, "_blank")}
  style={{
    color: "#1a0dab",
    margin: "8px 0",
    fontSize: "24px",
    cursor: "pointer",
  }}
>
  {item.title}
</h2>

                <p
                  style={{
                    color: "#4d5156",
                    lineHeight: 1.8,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}

          <h3>People also ask</h3>

{faqs.map((item, index) => (
  <div
    key={item.question}
    style={{
      borderBottom: "1px solid #eee",
      padding: "18px 0",
      cursor: "pointer",
    }}
  >
    <div
      onClick={() =>
        setOpenQuestion(openQuestion === index ? null : index)
      }
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "18px",
        fontWeight: 500,
      }}
    >
      <span>{item.question}</span>
      <span
        style={{
          fontSize: "22px",
          transition: ".2s",
        }}
      >
        {openQuestion === index ? "−" : "+"}
      </span>
    </div>

    {openQuestion === index && (
      <p
        style={{
          marginTop: "14px",
          color: "#4d5156",
          lineHeight: 1.7,
          fontSize: "16px",
          animation: "fade .2s ease",
        }}
      >
        {item.answer}
      </p>
    )}
  </div>
))}

            <div style={{ marginTop: 50 }}>
              <h3>People also search for</h3>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginTop: "20px",
                }}
              >
                {[
                  "VakıfBank",
                  ".NET",
                  "SQL Server",
                  "Angular",
                  "Redis",
                  "Backend Development",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      background: "#f1f3f4",
                      padding: "12px 18px",
                      borderRadius: "30px",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll testi */}
            <div
              style={{
                height: "800px",
              }}
            />
          </div>

          {/* SAĞ PANEL */}
          <div>
            <div
              style={{
                border: "1px solid #dadce0",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 1px 6px rgba(32,33,36,.15)",
                position: "sticky",
                top: "30px",
                background: "#fff",
              }}
            >
              <img
                src="img/myphoto/pp.jpg"
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "24px" }}>
                <h1
                  style={{
                    margin: 0,
                    fontSize: "32px",
                  }}
                >
                  Beyza Koç
                </h1>

                <p
                  style={{
                    color: "#5f6368",
                  }}
                >
                  Backend Developer
                </p>

                <hr />

                <p>🎓 Software Engineering Student</p>
               
                <p>💻 .NET • SQL Server • Angular</p>
                <p>📍 İstanbul, Türkiye</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}