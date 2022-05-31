import illustrationWomanD from '../images/illustration-woman-online-desktop.svg';
import illustrationWomanM from '../images/illustration-woman-online-mobile.svg';
import illustrationBox from '../images/illustration-box-desktop.svg';
import '../css/FaqContainerLeft.css'

const FaqContainerLeft = () => {
    return ( 
            <div className='FaqContainerLeft'>
                 <div className='img-container'>
                    <img className='woman-img-desk' src={illustrationWomanD} alt='woman-online'/>
                    
                    <div className='box'>
                    <img className='img-box' src={illustrationBox} alt='box'/>
                    </div>
                    
                    <img className='woman-img-mobile' src={illustrationWomanM} alt='woman-online'/>
                </div>
            </div>
     );
}
 
export default FaqContainerLeft;