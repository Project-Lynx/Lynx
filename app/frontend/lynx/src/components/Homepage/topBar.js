import logo from './../../assets/logo.png';
import './../../assets/css/Meta.css';


const TopBar = () => {

    return (
        <div className="top-bar">
            <div className="logo-box">
              <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="main-box">
              <div  className="cmd-box">
                <form action="/test" method="get">
                  <input
                      type="text"
                      id="input"
                      placeholder="Enter Command..."
                      name="page"
                  />
                </form>
              </div>
            </div>
        </div>
    )
}

export default TopBar;