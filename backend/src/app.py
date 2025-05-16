from flask import Flask, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
load_dotenv()


app = Flask(__name__)
CORS(app)

@app.route('/api/health')
def health():
    return jsonify({'status': 'Cage : hi , checking up if im healthy?'}), 200


if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))  # Allow dynamic port assignment
    app.run(debug=True, host='0.0.0.0', port=port)  # Allow access from any IP
