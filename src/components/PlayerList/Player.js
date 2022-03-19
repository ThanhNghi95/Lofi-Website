import { Box , 
        Button,
        Typography
} 
    from "@mui/material";
import { useState } from 'react';
import ReactAudioPlayer from "react-audio-player";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
const Playlist = ({avatar}) => {
    const [play , setPlay]= useState(false)
    const [currentMusic,setCurrentMusic]= useState(0)
    const [nextMusic , setNextMusic] = useState(0)

    const handlePreviousMusic = () =>{
        
    }

    const handlePlay = () =>{
        setPlay(!play)
    }
    const handleNextMusic = () =>{

    }
    console.log(avatar.ListMusic)
    return (
        <Box
            sx={{
                width: 450,
                height: 350,
                backgroundColor: 'rgb(255,192,203,0.9)',
                position:'absolute',
                top:'50%',
                left:'50%',
                transform:'translate(50%,-50%)',
                justifyContent:'center',
                alignItems:'center',
                textAlign:'center',
                overflow: 'hidden',
                borderRadius:'15px',
                margin:'25px'
            }}
        >
               
            <Typography>
                {avatar.name}
            </Typography>
            <Box>
            <Button
                    onClick={handlePreviousMusic}
                    startIcon={<SkipPreviousIcon/>}
                />
                <Button 
                    onClick={handlePlay}
                    startIcon={<PlayCircleOutlineIcon/>}
                />
                <Button
                    onClick={handleNextMusic}
                    startIcon={<SkipNextIcon/>}
                />
                  {play && 
                        <ReactAudioPlayer
                                src={avatar.ListMusic[currentMusic].src}
                                loop={true}
                                autoPlay
                        />
                  }
            </Box>
                

        </Box>
    );
}
 
export default Playlist;