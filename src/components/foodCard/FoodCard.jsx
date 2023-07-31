
const FoodCard = ({ item }) => {
    const { image, price, name, recipe } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-6 mt-6 p-1 rounded bg-slate-900 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-accent border-0 border-b-4 uppercase">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;