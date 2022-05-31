import '../css/FaqContainerRight.css';
import Question from './Question';
import questions from '../data/questions'
export const FaqContainerRight = () => {
    return ( 
          <div className='FaqContainerRight'>
              <h1 className='title'>FAQ</h1>
              <div>
                {questions.map((item)=>
                <Question key={item.id} question={item.question} answer={item.answer} />
                )}
              </div>
          </div>
     );
}
export default FaqContainerRight;