import React, {useState} from "react";

const EightBall = (props) => {
    let isAnswered; 
    
    const [msg, setMsg] = useState('Think of a question');
    const [bColor, setbColor] = useState('black')
    if (msg === 'Think of a question') {
        isAnswered = true;
    } else {
        isAnswered = false; 
    }

    function click() {
        if (msg === 'Think of a question') {
            let idx = Math.floor(Math.random() * props.answers.length) + 1
            let newMsg = props.answers[idx].msg;
            let newColor = props.answers[idx].color;
            console.log(newMsg, newColor)
            setbColor(newColor)
            setMsg(newMsg)          
        } else {
            setMsg('Think of a question') 
            setbColor("black")
        }
    }
    return (
        <div className="EightBall">
            <div className="EightBall-circle" onClick={click} style={{backgroundColor: bColor}}>
                <p className="EightBall-msg">{msg}</p>  
            </div>        
        </div>
    )
}

export default EightBall; 