import './header.css'
import logo from "../../img/assets/header/logo.webp";
import theHBB from "../../img/assets/header/theHBB.webp";
 
export const Header = () => {
  return( 
  
    <div className="headerDiv">
     <img src={logo} alt = ""></img>
     <img src={theHBB} alt = "" className = "headerLogo"></img>
    </div>
  )
}

