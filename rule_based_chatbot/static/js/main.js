async function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value.trim();
    if (message === "") return;

    let chatBox = document.getElementById("chat-box");

    // Display user message
    let userMsgDiv = document.createElement("div");
    userMsgDiv.classList.add("message", "user-message");
    userMsgDiv.innerText = message;
    chatBox.appendChild(userMsgDiv);

    inputField.value = "";

    // Send message to Flask backend
    let response = await fetch("/get", {
        method: "POST",
        body: JSON.stringify({ message: message }),
        headers: { "Content-Type": "application/json" }
    });

    let data = await response.json();

    // Display bot response
    let botMsgDiv = document.createElement("div");
    botMsgDiv.classList.add("message", "bot-message");
    botMsgDiv.innerText = data.response;
    chatBox.appendChild(botMsgDiv);

    // Auto scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}
