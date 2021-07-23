import TopImage from "../Components/TopImage";
import PizzaDog from '../Components/PizzaDog';

export default function CompletedOrder() {
    return (
        <div>
            <TopImage text={'Congrats!  Pizza is on its way!'} button={false} img={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png"}/>
            <PizzaDog />
        </div>
    )
}