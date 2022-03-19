import './ListMusic.scss'
import Artist from '../Artist/Artist';
import Playlist from '../PlayerList/Player';
import { 
    SpeedDial,
    SpeedDialAction,
}
 from '@mui/material';
import {GiMusicalNotes } from "@react-icons/all-files/gi/GiMusicalNotes";
import { musics } from '../../music/music';
import { useState } from 'react';

const avatars =  musics.map( (music) => (
    {
        icon: <Artist 
                key={music.id}
                music={music}
            /> ,
            name: music.name,
            id:music.id,
            ListMusic: music.listMusic
    }
))

const ListMusic = () => {
    const [box,setBox] = useState()
    return (
        <div className='ListMusic'>
           <SpeedDial
                icon={<GiMusicalNotes
                        color='#fff'
                        size={40}
                    />}
                ariaLabel="List of Artist"
                sx={{ position: 'absolute', top: '50%', left: '0%' , transform:'translateY(-50%)' }}
                direction="right"
                delay={1.5}
  
           >
            {avatars.map( (avatar)=>(
                <SpeedDialAction
                    key={avatar.name}
                    icon={avatar.icon}
                    tooltipTitle={avatar.name}
                    sx={{ width: 45, height: 45, bgcolor:'transparent'}}
                    onClick={()=> setBox(avatar.id) }
                />
            ))}
            </SpeedDial>
            {avatars.map( (avatar)=>(  
                   box ===avatar.id && 
                   <Playlist
                        key={avatar.id}
                        avatar={avatar}
                    />
            ))}
        </div>
 
      );
}
 
export default ListMusic;