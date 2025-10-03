from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Rule-based chatbot logic using if-elif-else
def chatbot_response(user_input):
    user_input = user_input.lower()

    if "hello" in user_input or "hi" in user_input:
        return "Hello! How can I help you today?"
    elif "how are you" in user_input:
        return "I'm just a bot, but I'm doing great! Thanks for asking."
    elif "your name" in user_input:
        return "I’m ChatBot, your friendly assistant 🤖."
    elif "bye" in user_input:
        return "Goodbye! Have a nice day 👋"
    else:
        return "Sorry, I didn't understand that. Can you try again?"

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get", methods=["POST"])
def get_bot_response():
    data = request.get_json()
    user_message = data.get("message")
    response = chatbot_response(user_message)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
