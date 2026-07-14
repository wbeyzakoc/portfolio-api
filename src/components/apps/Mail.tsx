import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FOLDERS = ["Inbox", "Sent", "Drafts", "Starred", "Trash"];

export default function Mail() {
  const [activeFolder, setActiveFolder] = useState("Inbox");
  const [search, setSearch] = useState("");
  const [composing, setComposing] = useState(true);

  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

const sendMail = async () => {
  try {
    const response = await fetch("http://localhost:5149/api/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        subject,
        message,
      }),
    });

    console.log(response.status);

    const text = await response.text();
    console.log(text);

    if (!response.ok) {
      throw new Error(text);
    }

    alert("Mail gönderildi!");

  } catch (err) {
    console.error(err);
    alert(String(err));
  }
};

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        background: "#f5f5f7",
        borderRadius: "0 0 14px 14px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: 120,
          background: "#ececef",
          borderRight: "1px solid rgba(0,0,0,.08)",
          display: "flex",
          flexDirection: "column",
          padding: 10,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#777",
            marginBottom: 10,
          }}
        >
          MAILBOXES
        </div>

        {FOLDERS.map((folder) => (
          <div
            key={folder}
            onClick={() => setActiveFolder(folder)}
            style={{
              padding: "8px 10px",
              borderRadius: 8,
              cursor: "pointer",
              marginBottom: 4,
              background:
                activeFolder === folder
                  ? "rgba(0,122,255,.15)"
                  : "transparent",
              color:
                activeFolder === folder
                  ? "#007AFF"
                  : "#222",
            }}
          >
            {folder}
          </div>
        ))}

        <div style={{ flex: 1 }} />

        <button
          onClick={() => setComposing(true)}
          style={{
            background: "#007AFF",
            color: "white",
            border: "none",
            borderRadius: 8,
            padding: 10,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Compose
        </button>
      </div>

      {/* Search Panel */}
      <div
        style={{
          width: 280,
          borderRight: "1px solid rgba(0,0,0,.08)",
          background: "#fafafa",
          padding: 12,
        }}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            padding: 8,
            borderRadius: 8,
            background: "#ececec",
          }}
        />
      </div>      {/* Compose */}
      <AnimatePresence>
        {composing && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              right: 20,
              bottom: 20,
              width: 620,
              height: 420,
              background: "#fff",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,.18)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div
              style={{
                height: 44,
                background: "#efeff2",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 16px",
                borderBottom: "1px solid rgba(0,0,0,.08)",
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                New Message
              </span>

              <button
                onClick={() => setComposing(false)}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  fontSize: 18,
                }}
              >
                ×
              </button>
            </div>

            {/* From */}
            <div
              style={{
                display: "flex",
                padding: "10px 16px",
                borderBottom: "1px solid rgba(0,0,0,.08)",
              }}
            >
              <span
                style={{
                  width: 60,
                  color: "#777",
                }}
              >
                From
              </span>

              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: 14,
                }}
              />
            </div>

            {/* Subject */}
            <div
              style={{
                display: "flex",
                padding: "10px 16px",
                borderBottom: "1px solid rgba(0,0,0,.08)",
              }}
            >
              <span
                style={{
                  width: 60,
                  color: "#777",
                }}
              >
                Subject
              </span>

              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: 14,
                }}
              />
            </div>

            {/* Message */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message..."
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                resize: "none",
                padding: 16,
                fontSize: 14,
                fontFamily: "inherit",
              }}
            />

            {/* Footer */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: 14,
                borderTop: "1px solid rgba(0,0,0,.08)",
              }}
            >
              <button
                onClick={sendMail}
                style={{
                  background: "#007AFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 18px",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}