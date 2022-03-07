import { Link } from "react-router-dom";
import {signInWithGoogle} from '../../firebase'
const Header = () => {
    return ( 
        <nav>

            <button onClick={signInWithGoogle}>Sign in with google</button>
            <h1>{localStorage.getItem("name")}</h1>
            <h1>{localStorage.getItem("email")}</h1>
            <img src={localStorage.getItem("photoURL")} alt="" />
            {/* <Link to='/'>
                
            </Link> */}
        </nav>
     );
}
 
export default Header;