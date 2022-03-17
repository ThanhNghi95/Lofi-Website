import './ListMusic.scss'
import Artist from '../Artist/Artist';
import { 
    SpeedDial,
    SpeedDialAction,
}
 from '@mui/material';
import {GiMusicalNotes } from "@react-icons/all-files/gi/GiMusicalNotes";
import { musics } from '../../music/music';
const avatars =  musics.map( (music) => (
    {
        icon: <Artist 
                key={music.id}
                name={music.name}
                image={music.image}
                listMusic={music.listMusic}
            /> ,
            name: music.name
    }
))

const ListMusic = () => {
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
            {avatars.map((avatar)=>(
                <SpeedDialAction
                    key={avatar.name}
                    icon={avatar.icon}
                    tooltipTitle={avatar.name}
                    sx={{ width: 45, height: 45, bgcolor:'transparent'}}
                />
            ))}
           </SpeedDial>
        </div>
      );
}
 
export default ListMusic;