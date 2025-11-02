document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const responseBox = document.getElementById("responseBox");

  sendBtn.addEventListener("click", async () => {
    const message = userInput.value;

    if (!message) return;

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    responseBox.innerText = data.reply || "No hubo respuesta.";
  });
});
