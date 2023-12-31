import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import "./navBar.css";
function NavBar() {
  const [click, setClick] = useState(false);
  const [button,setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true);
    }
  };
  useEffect(() =>{showButton()},[]);
  window.addEventListener("resize",showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick= {closeMobileMenu}>
                OpenPapers<FontAwesomeIcon icon={faPaperclip} className = ""/>
            </Link> 
            <div className="menu-icon" onClick = {handleClick}>
              {click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/papers" className="nav-links" onClick={closeMobileMenu}>
                  Papers
                </Link>
              </li>
            </ul>
            
            { /*button && <Button buttonStyle="btn--outline"> Login </Button>*/}
            
        </div>
      </nav>

    </>
  )
}

export default NavBar
