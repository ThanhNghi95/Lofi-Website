import './About.scss'
const About = () => {
    const style ={
        fontSize:30,
        fontFamily: 'Pristina-Regular, Pristina'
    }
    return ( 
        <>
            <img src="/assets/img/tokyonight.jpg" 
            alt="" 
            className="img_AboutUs"
            />
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 683.02 207.88">
            <text id='draw' transform="translate(160 50.23)" style={style}>
                This project is made by ThanhNghi
                <tspan x="-50" y="57.6">
                The purpose of this application is for learning 
                </tspan>
                <tspan x="70" y="115.2">
                    Hope you enjoy it !!!
                </tspan>
            </text>
            <text x="-19.89" y="-172.06"/>  <text x="-19.89" y="-172.06"/>
            </svg>
    
        </> 
     );
}
 
export default About;