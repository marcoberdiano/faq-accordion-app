
import illustrationWomanM from '../images/illustration-woman-online-mobile.svg';
import '../css/FaqContainerLeft.css'

const FaqContainerLeft = () => {
    return ( 
            <div className='FaqContainerLeft'>
                 <div className='img-container'>
                    <img className='woman-img' src={illustrationWomanM} alt='woman-online'/>
                </div>
            </div>
     );
}
 
export default FaqContainerLeft;