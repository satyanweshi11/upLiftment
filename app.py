from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = 'upliftment_rocks'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/setup', methods=['POST'])
def setup():
    data = request.json
    print(data)
    session['floors'] = int(data.get('floors', 0))
    session['terrace'] = data.get('terrace', False)
    session['parking'] = data.get('parking', False)
    
    return {'status': 'success'}, 200

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html', 
                           floors=session.get('floors', 0),
                           terrace=session.get('terrace', False),
                           parking=session.get('parking', False))

if __name__ == '__main__':
    app.run(debug=True)
