import LightSwitch from "../LightSwitch/LightSwitch";
import { Link } from "react-router-dom";
import { AiOutlineExclamation } from "@react-icons/all-files/ai/AiOutlineExclamation";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import {BsArrowsFullscreen} from "@react-icons/all-files/bs/BsArrowsFullscreen"
import { useSelector , useDispatch } from "react-redux";
import { LightSwitchMode } from "../../redux/actions/action";

import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Button, Typography,Box } from "@mui/material";

import {useState} from 'react'


import { auth, provider } from '../../firebase';
import { signInWithPopup} from "firebase/auth"

import './Header.scss';

const Header = ({info}) => {

    const [logOutBox,setLogOutBox] = useState(false)
    
  
    const signInWithGoogle = () =>{
        signInWithPopup(auth,provider)
          .then((res)=>{
            const user = res.user
            localStorage.setItem('name',user.displayName)
            localStorage.setItem('email',user.email )
            localStorage.setItem('photoURL',user.photoURL )
            window.location.reload(false);
        })
          .catch((error)=>{
          console.log(error)
        })
      }

    const handleLogOut = () =>{
        localStorage.removeItem('name')
        localStorage.removeItem('email')
        localStorage.removeItem('photoURL')
        window.location.reload(false);
    }

    const lightMode = useSelector( (state) => state.LightSwitchModeState )
    const dispatch = useDispatch()
    const handleLightSwitch = () =>{
        let status
        if(lightMode.mode === 'normal'){
            status = 'light'
        }else if(lightMode.mode ==='light'){
            status ='normal'
        }
        dispatch(LightSwitchMode(status) )
    }
  
  
    return ( 
        <nav className="wrap">
            <Link to='/'>
                <img src="/assets/img/Header.gif" alt="" className="logo" />
            </Link>
            <div className="menu">
                <Link to='/about'>
                    <AiOutlineExclamation className="github"/>
                    <span>About this project</span>
                </Link>
                <a 
                    href="https://github.com/thanhnghi95"
                    target="_blank"
                    rel='noreferrer'
                >
                    <AiFillGithub className="github"/>
                    <span>Github</span>
                </a>
            </div>
            <div className="menu">
                <div onClick={handleLightSwitch} className="lightBox">
                    <LightSwitch/>
                </div>
                <BsArrowsFullscreen className="fullscreen"/>
           </div>
           <div className="menu">
                {info.name== null ?
                    <Button onClick={signInWithGoogle}>
                    <Typography variant="button" gutterBottom component="div" sx={{color:'#fff' ,fonSize: 15,letterSpacing: 1.5}}>
                        Login
                    </Typography>
                </Button>
                :
                <>
                <Button onClick={()=>setLogOutBox(!logOutBox)}>
                    <Avatar src={info.photoURL} alt={info.name} />
                </Button>
                {
                    logOutBox &&
                    <Box
                    sx={{
                        position:'absolute',
                        top:50,
                        right:200,
                        width: 200,
                        height: 50,
                        opacity: [0.9, 0.8, 0.7],
                    }}
                    >
                        <Button 
                            sx={{color:'#000'}} 
                            onClick={handleLogOut}
                            startIcon= {<LogoutIcon/>}
                        >
                            
                            <p style={{fontWeight:'bold',fonSize: 15,letterSpacing: 1.5}}>
                                Log out
                            </p>
                        </Button>
                    </Box>
                }
               
            </>
                }
            </div>
        </nav>
     );
}
 
export default Header;
