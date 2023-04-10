import { useState } from 'react';
import './lamp.css';


function Lamp() {
    const [isOn, setIsOn] = useState(false)
    
    const handleClick = () => {
        setIsOn(!isOn);
      }
    return (
    <>
    <div className="lamp">
        <div className= "lamp" />
        {
            isOn && 
            <div className="light" />
        
        }
    </div>
        <button className={isOn ? 'on' : 'off'} onClick={handleClick}>
            {isOn ? 'ON' : 'OFF'}
        </button>
    </>
  );
}

export default Lamp;
