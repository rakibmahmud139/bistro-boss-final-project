import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";


//TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    const [cart] = useCart();

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="w-full">
            <SectionTitle
                subHeading='Please Process to'
                heading='Payment'
            />
            <h3 className="text-3xl">Taka o taka tmi uira uira aso..</h3>

            <Elements stripe={stripePromise}>
                <CheckOutForm
                    cart={cart}
                    price={price}
                />
            </Elements>
        </div>
    );
};

export default Payment;