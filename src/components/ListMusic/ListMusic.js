import './ListMusic.scss'
import { 
    Button,
    Drawer, 
    Typography
}
 from '@mui/material';
import {BsMusicPlayerFill } from "@react-icons/all-files/bs/BsMusicPlayerFill";
import { useState } from 'react';

const ListMusic = () => {
    const [button , setButton] = useState(true);
    const handleDrawer = () =>{
        setButton(!button)
    }
    console.log(button)
    return (
        <div className='ListMusic'>
            <Button 
                startIcon={<BsMusicPlayerFill
                                size={50}
                                color="rgba(184, 174, 174, 0.8)"
                                />
                        } 
                onClick={handleDrawer}
                className="buttonMusic"
            />
            {!button && 
            <Drawer
                className='drawer'
                variant='permanent'
            >   
                <Typography>Keshi</Typography>
                <Typography>XXXtenaction</Typography>
                <Typography>Shilou Dynasty</Typography>
                <Typography>Nghi</Typography>
            </Drawer>
            }
        </div>
      );
}
 
export default ListMusic;