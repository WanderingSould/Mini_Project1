from flask import Flask, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
load_dotenv()
app = Flask(__name__)
CORS(app)
import win32gui
import win32process
import psutil

@app.route('/api/health')
def health():
    return jsonify({'status': 'Cage : hi , checking up if im healthy?'}), 200


@app.route('/api/app-name')
def app_name():
    return jsonify({'appName': 'CAGE'}), 200


@app.route('/api/current-app')
def current_app():
    try:
        hwnd = win32gui.GetForegroundWindow()
        _, pid = win32process.GetWindowThreadProcessId(hwnd)
        process = psutil.Process(pid)
        app_name = process.name()
        window_title = win32gui.GetWindowText(hwnd)
        return jsonify({'appName': app_name, 'windowTitle': window_title}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))  # Allow dynamic port assignment
    app.run(debug=True, host='0.0.0.0', port=port)  # Allow access from any IP
