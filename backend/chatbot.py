from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import google.generativeai as genai
from storage_engine.Database import db_storage
from storage_engine.data_models.wallet import Wallet, Category

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure the API key
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Create the model
generation_config = {
    "temperature": 0,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
    system_instruction=(
        "You are a financial advisor to users in a budgeting app. You'll help users by recommending trade-offs, "
        "analyzing spend, and recommending budgets. You should also curate data in tables and produce clean output."
    ),
)

# Initialize chat history
history = [
    {
        "role": "user",
        "parts": ["hello\n"],
    },
    {
        "role": "model",
        "parts": [
            "Hello! 👋  I'm here to help you with your finances. What can I do for you today? \n\n"
            "Do you want to:\n\n"
            "* **Analyze your spending?** I can help you see where your money is going and identify areas where you might be overspending.\n"
            "* **Create a budget?** We can work together to set realistic financial goals and develop a plan to achieve them.\n"
            "* **Make some trade-offs?**  I can suggest ways to prioritize your spending and make the most of your money.\n\n"
            "Let me know how I can help! 😊 \n"
        ],
    },
]

# Start a chat session with initial history
chat_session = model.start_chat(history=history)

# Storage engine for wallet data
wallet_storage = db_storage()

@app.route('/api/my_home_wallet', methods=['POST'])
def create_wallet():
    data = request.get_json()
    wallet_name = data.get('wallet_name')
    categories_data = data.get('categories', [])

    wallet = Wallet(name=wallet_name)
    for category_data in categories_data:
        category = Category(name=category_data['name'], amount=category_data['amount'])
        wallet.categories.append(category)
    
    try:
        wallet_storage.add_objects(wallet)
        return jsonify({'message': 'Wallet created successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/my_home_wallet', methods=['GET'])
def get_home_wallet_data():
    try:
        wallets = wallet_storage.get_all(Wallet)
        result = []
        for wallet in wallets:
            wallet_data = {
                'id': wallet.id,
                'name': wallet.name,
                'categories': [{'name': category.name, 'amount': category.amount} for category in wallet.categories]
            }
            result.append(wallet_data)
        
        return jsonify(result), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/chat', methods=['POST', 'OPTIONS'])
def chat():
    global chat_session  # Declare chat_session as global

    if request.method == 'OPTIONS':
        return jsonify({'Allow': 'POST'}), 200

    user_input = request.json.get('message', '')
    if not user_input:
        return jsonify({"error": "No message provided"}), 400

    # Send the user input to the model and get the response
    response = chat_session.send_message(user_input)

    # Append user input and model response to the history
    history.append({"role": "user", "parts": [user_input]})
    history.append({"role": "model", "parts": [response.text]})

    # Update the chat session with the new history
    chat_session = model.start_chat(history=history)

    return jsonify({"response": response.text})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
