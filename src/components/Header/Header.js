import { Link } from "react-router-dom";
import { AiOutlineExclamation } from "@react-icons/all-files/ai/AiOutlineExclamation";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import './Header.scss';
const Header = () => {
    return ( 
        <nav className="wrap">
            <Link to='/'>
                <img src="/assets/img/icon.gif" alt="" className="logo" />
            </Link>
            <div className="menu">
                <Link to='/about'>
                    <AiOutlineExclamation/>
                    <span>What is this project</span>
                </Link>
                <a 
                    href="https://github.com/nghilethanh2000"
                    target="_blank"
                    rel='noreferrer'
                >
                    <AiFillGithub/>
                    <span>Github</span>
                </a>
            </div>
        </nav>
     );
}
 
export default Header;