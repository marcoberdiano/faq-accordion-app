import FaqContainerLeft from "./FaqContainerLeft";
import FaqContainerRight from "./FaqContainerRight";
import '../css/FaqContainer.css'
const FaqContainer = () => {
    return ( 
        <div className="faq-container">
            <FaqContainerLeft/>
            <FaqContainerRight/>
        </div>
     );
}
 
export default FaqContainer;