import arrow from '../images/icon-arrow-down.svg';
import { useState } from 'react';
const Question = ({question, answer}) => {
    const [isAtive, setIsAtive] = useState(false);
    const handleClick = () => {
        setIsAtive(!isAtive);
    }
    return ( 
        <div className='question-container'>
            <div className='question_arrow'> 
                <h2 className={ isAtive ? 'titleAtive' :''} onClick={handleClick}>{question}</h2>
                <div>
                    <img src={arrow} alt='arrow' className={ isAtive ? 'arrowUp' : 'arrowDown'}/>
                </div>
            </div>
            { isAtive && <p className='answers' >{answer}</p>}
        </div>
     );
}
export default Question;