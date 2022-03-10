import LightSwitch from "../LightSwitch/LightSwitch";
import { Link } from "react-router-dom";
import { AiOutlineExclamation } from "@react-icons/all-files/ai/AiOutlineExclamation";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import {BsArrowsFullscreen} from "@react-icons/all-files/bs/BsArrowsFullscreen"
import './Header.scss';
const Header = () => {
    return ( 
        <nav className="wrap">
            <Link to='/'>
                <img src="/assets/img/Lofi.gif" alt="" className="logo" />
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
                    <AiFillGithub className="github"/>
                    <span>Github</span>
                </a>
            </div>
            <div className="menu">
                <LightSwitch/>
                <BsArrowsFullscreen className="fullscreen"/>

            </div>
        </nav>
     );
}
 
export default Header;