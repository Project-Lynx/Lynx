# Lynx
Open Source finance platform (python web app). This is a plug and play platform for the user to build off and tailor suit it for their own personal means of keeping up with financial markets.


## Getting Started

### Running the app locally

We suggest creating a separate virtual environment running Python 3 for this app, and install all of the required dependencies there. Run in Terminal/Command Prompt:

```
git clone https://github.com/antonio-hickey/gDash/
cd gDash
python3 -m venv env
```

In UNIX system:

```
source env/bin/activate
```

In Windows:

```
env\Scripts\activate
```

To install all of the required packages to this environment, simply run:

```
pip3 install -r requirements.txt
```

To start the app:

```
python3 index.py
```

which will output:

```
Lynx is running on http://127.0.0.1:8050/apps/home
Dash is running on http://127.0.0.1:8050/

 * Serving Flask app "dash_app" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: on
```

Go to the link http://127.0.0.1:8050/apps/home