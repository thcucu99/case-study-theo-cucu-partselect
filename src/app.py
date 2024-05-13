from flask import Flask, request, jsonify
from src.transformer import LowercaseTransformer
from src.fine_tuned_gpt35 import get_ft_completion
import pickle
from flask_cors import CORS

app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "*"}})
CORS(app, resources={r"/*": {"origins": ["http://localhost:3000"]}})


with open('src/simple_text_model.pkl', 'rb') as f:
    model = pickle.load(f)


@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the Chatbot API. Use the /chatbot endpoint to post data."})

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'

# @app.route('/chatbot', methods=['POST'])
# def chatbot():
#     message = request.data.decode('utf-8')
#     print(message)
#     inference = model.predict([message])[0]
#     # return inference
#     return jsonify({'response': inference})


@app.route('/chatbot', methods=['GET', 'POST'])
def chatbot():
    if request.method == 'GET':
        # If it's a GET request, just return a simple message or test output
        return jsonify({"message": "This is the chatbot endpoint. Send a POST request with data."})
    elif request.method == 'POST':
        # For POST, process the incoming data and return a response
        data = request.get_json()  # Assuming you are sending JSON
        message = data['message']
        inference = get_ft_completion(message)
        # print(message)  # Log the incoming message to console
        # inference = model.transform([message])[0]  # Process the message through your model

        # print(inference)
        return jsonify({'response': inference})


if __name__ == '__main__':
    app.run(debug=True)