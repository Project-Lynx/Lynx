import logo from './../assets/logo.png';
import './../assets/css/NavBar.css'
import './../assets/css/Homepage.css'
import './../assets/css/Bootstrap.css'


const NavBar = () => {
  return (
    <div id="navbar">
      <div id="logo-box">
         <img src={logo} className="logo" alt="logo" />
      </div>
      <div id="main-box">
        <div id="cmd-box">
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

export default NavBar;

