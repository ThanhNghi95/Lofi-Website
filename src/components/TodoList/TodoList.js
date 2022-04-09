import ListAltIcon from '@mui/icons-material/ListAlt';
import { Button,
    Backdrop,
    CircularProgress,
    Typography
 } 
 from '@mui/material';
import { useState } from 'react';
import './TodoList.scss'
const TodoList = ({info}) => {
    const [open, setOpen] = useState(false);
    // const [todoBox , setTodoBox] = useState(false)
    return (
        <>
        {
            info.name !==null &&
            <div    
                className='todoList'
            >
                <Button  onClick= {
                                    ()=>{
                                        setOpen(!open)
                                        setTimeout( ()=>{
                                            setOpen(false)
                                        },5000)
                                    }
                                }
                    >
                    <ListAltIcon
                        sx={{width:50, height:50 , color:'#4E5054'}}
                    />
                     <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                    >
                        <CircularProgress color="inherit" />
                        <Typography>Your Todo List will be created soon</Typography>
                    </Backdrop>
                </Button>
                
            </div>
        }
        </>
        
 
      
      );
}
 
export default TodoList;