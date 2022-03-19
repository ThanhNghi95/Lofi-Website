import {Avatar
  
} 
 from "@mui/material";



const Artist = ({ music}) => {
   
    return (
        <>
            <Avatar alt={music.name} src={music.image}
            />
        </>
      );
}
 
export default Artist;