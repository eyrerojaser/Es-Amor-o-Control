document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chat-form");
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userMessage = input.value.trim();
    if (!userMessage) return;

    // Muestra mensaje del usuario
    chatBox.innerHTML += `<div class="user-msg"><strong>Tú:</strong> ${userMessage}</div>`;
    input.value = "";

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await res.json();
      chatBox.innerHTML += `<div class="bot-msg"><strong>App:</strong> ${data.reply}</div>`;
    } catch (err) {
      console.error("Error:", err);
      chatBox.innerHTML += `<div class="bot-msg error">Error al conectar con el servidor.</div>`;
    }
  });
});
