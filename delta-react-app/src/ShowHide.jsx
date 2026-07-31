import { useState } from "react";

function ShowHide(props) {
    const [showText, setShowText] = useState(true);

    const handleClick = () => {
        setShowText(!showText);
    };

    return (
        <div>
            {showText ? `Hello, ${props.name}` : `Bye, ${props.name}`}
            <br />
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default ShowHide;