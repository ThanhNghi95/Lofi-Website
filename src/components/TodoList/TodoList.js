import ListAltIcon from '@mui/icons-material/ListAlt';
import { Button,
    Backdrop,
    CircularProgress,
    Dialog,
    DialogTitle,
    Typography
 } 
 from '@mui/material';
import { useState } from 'react';
import './TodoList.scss'
const TodoList = ({info}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
        {
            info.name !==null &&
            <div    
                className='todoList'
            >
                <Button onClick={()=>setOpen(!open)}>
                    <ListAltIcon
                        sx={{width:50, height:50 , color:'#4E5054'}}
                    />
                     <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={()=>setOpen(!open)}
                    >
                        <CircularProgress color="inherit" />
                        <Typography>This function is in progress</Typography>
                    </Backdrop>
                </Button>
                
            </div>
        }
        </>
        
 
      
      );
}
 
export default TodoList;