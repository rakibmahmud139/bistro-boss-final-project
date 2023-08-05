import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { image, price, name, recipe, _id } = item;

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [, refetch] = useCart()

    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }

            //send data in server site
            fetch('https://bistro-boss-server-khaki-nu.vercel.app/carts', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch(); //refetch cart to update the number of items in the cart

                        Swal.fire(
                            'Added!',
                            'food has been added on the cart.',
                            'success',
                        )
                    }
                    else {
                        Swal.fire({
                            title: 'Please login to order the food',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Login Now'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/login', { state: { from: location } })
                            }
                        })

                    }
                })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-6 mt-6 p-1 rounded bg-slate-900 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline btn-accent border-0 border-b-4 uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;