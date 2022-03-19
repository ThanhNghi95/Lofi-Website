import { Box , 
        Button,
        Typography,
        Avatar,
        ButtonGroup
} 
    from "@mui/material";
import { useState } from 'react';
import ReactAudioPlayer from "react-audio-player";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const Playlist = ({avatar , box , setBox}) => {
    const [minus , setMinus] = useState(false);
    const [play , setPlay]= useState(false)
    const [currentMusic,setCurrentMusic]= useState(0)

    const handlePreviousMusic = () =>{
        if(currentMusic === 0){
            setCurrentMusic(0)
        }else{
            setCurrentMusic(currentMusic-1)
        }
    }
    const handlePlay = () =>{
        setPlay(!play)
    }
    const handleNextMusic = () =>{
        if(currentMusic === avatar.ListMusic.length-1){
            setCurrentMusic(currentMusic)
        }else{
            setCurrentMusic(currentMusic+1)
        }
        
    }

    return (
        <>
            {!minus && 
                <Box
                sx={{
                    width: 350,
                    background: "#7258AF",
                    position:'absolute',
                    top:'50%',
                    left:'20%',
                    transform:'translate(20%,-50%)',
                    justifyContent:'center',
                    alignItems:'center',
                    textAlign:'center',
                    overflow: 'hidden',
                    borderRadius:'15px'
                }}
            >
        
            <Box
                sx={{
                    justifyContent:'center',
                    alignItems:'center',
                    textAlign:'center',
                }}
            >
                <Box
                    sx={{
                        display:'flex',
                        justifyContent:'space-between',
                    }}
                >
                    <Button
                        startIcon={<RemoveIcon sx={{color:'#fff'}}/>}
                        onClick={()=>setMinus(!minus)}
                    />
                    <Button
                        startIcon={<CloseIcon sx={{color:'#fff'}}/>}
                        onClick={()=>setBox(!box)}
                    />
                </Box>
                <Box>
                <Avatar 
                    src={avatar.ListMusic[currentMusic].image} 
                    variant="rounded"
                    sx={{
                        display:'inline',
                        objectFit:'cover'
                    }}
                />
                <Typography
                    variant="h5"
                    color="#fff"
                >
                    {avatar.ListMusic[currentMusic].name}
                </Typography>
                </Box>
            </Box>
            <Box>
                <ButtonGroup size="large" variant='string'>
                    <Button
                        onClick={handlePreviousMusic}
                        startIcon={<SkipPreviousIcon sx={{color:'#fff'}}/>}
                    />
                    <Button 
                        onClick={handlePlay}
                        startIcon={play ? <PauseCircleIcon sx={{color:'#fff'}}/> : <PlayCircleOutlineIcon sx={{color:'#fff'}}/>}
                    />
                    <Button
                        onClick={handleNextMusic}
                        startIcon={<SkipNextIcon sx={{color:'#fff'}}/>}
                    />
                </ButtonGroup>
              
            </Box>
            </Box>
        }
            {minus &&
                <Box
                    sx={{
                        position:'absolute',
                        bottom:'0%',
                        left:'0%',
                        display:'flex',
                        color:'#fff',
                        width:'400px',
                }}
                >
                    <Button
                        startIcon={<AddIcon/>}
                        onClick={()=>setMinus(false)}
                        sx={{color:'#fff'}}
                    />  
                    <Box sx={{margin:'auto 0px'}}>
                        <Typography variant="string" >
                            Current song: {avatar.ListMusic[currentMusic].name}
                        </Typography>
                    </Box>
                    

                </Box>
        }
        {play && 
                    <ReactAudioPlayer
                            src={avatar.ListMusic[currentMusic].src}
                            loop={true}
                            autoPlay
                    />
                }
        </>
    );
}
 
export default Playlist;