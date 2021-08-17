# Lynx
Open Source finance platform, This is a plug and play sandbox like platform for the user to build off and tailor suit for their personal means of keeping up with financial markets.


## Getting Started

### Running the app locally

We suggest creating a separate virtual environment running Python 3 for this app, and install all of the required dependencies there. Run in Terminal/Command Prompt:

```
git clone https://github.com/Project-Lynx/Lynx
cd Lynx
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

To start the api:

```
python3 api.py
```

Now open a new terminal in the Lynx folder and start the react app:
```
cd app/frontend/lynx
npm install
npm start
```
