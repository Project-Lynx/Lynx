import logo from '../assets/logo.svg';
import '../assets/css/App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Lynx</title>
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="/#/home" class="btn btn-eff" data-sm-link-text="CLICK" target="_self"><span>Enter Lynx.</span></a>
      </header>
    </div>
  );
}

export default App;
