import {Avatar } from "@mui/material";
const Artist = ({ name, image , listMusic}) => {
    console.log(listMusic)
    return (
        <>
            <Avatar alt={name} src={image} />
        </>
      );
}
 
export default Artist;