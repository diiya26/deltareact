import { useState }from "react";
function ShowHide (props){
    const [showText, setShowText] =useState(true);
    const handleClick= () => {
        if(showText? setShowText(false):setShowText(true));
    }
    return(
        <>
        <div>
        {showText?`Hello,  ${props.name}`:`Bye, ${props.name}`}
        <br/>
        <button onClick={handleClick}>Click Me </button>
        </div>
        </>
    );
}
export default ShowHide;
