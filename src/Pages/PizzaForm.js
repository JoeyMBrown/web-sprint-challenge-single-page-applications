import TopImage from "../Components/TopImage";
import { formInputs } from "../Data/forminputs";
import FormInput from "../Components/FormInput";

export default function PizzaForm () {
    return (
        <div>
            <h2>Build Your Own Pizza</h2>
            <TopImage button={false} img={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png"}/>
            <h2>Build Your Own Pizza</h2>
            <form>
                {
                    formInputs.map((input, index) => <FormInput key={index} input={input} />)
                }
            </form>
        </div>
    )
}