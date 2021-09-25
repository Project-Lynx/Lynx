import logo from './../../assets/logo.png';
import './../../assets/css/Meta/NavBar.css';
import './../../assets/css/Meta/Bootstrap.css';


const NavBar = () => {
  return (
     <div id="main">
      <div id="logo-box">
         <img src={logo} className="logo" alt="logo" />
      </div>
      <div id="main-box">
        <div id="cmd-box">
          <input
              type="text"
              id="input"
              name="page"
              placeholder="Enter Command..."
              onKeyPress={(ev) => {
                if (ev.key === 'Enter') {
                 ev.preventDefault()
                 console.log(
                  document.getElementById("input").value
                 )
                 var value = document.getElementById("input").value
                 window.location = "http://localhost:3000/#/" + value
                }
              }}
          />
        </div>
      </div>
    </div>
  )
}

export default NavBar;
