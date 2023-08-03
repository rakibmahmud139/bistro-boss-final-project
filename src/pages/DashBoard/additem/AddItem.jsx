import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";



const image_hosting_token = import.meta.env.VITE_IMAGE_Upload_token
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0]);


        fetch(img_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.success) {
                    const imgURL = imageResponse.data.display_url;
                    const { name, category, recipe, price } = data;
                    const newItem = { name, category, recipe, price: parseFloat(price), image: imgURL }
                    console.log(newItem);

                    axiosSecure.post('/menu', newItem)
                        .then(data => {

                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Menu item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })

                            }
                        })
                }
            })
    };


    return (
        <div className="w-full px-10">
            <SectionTitle
                subHeading={"What's New"}
                heading={"Add An item"}
            />
            <Helmet>
                <title>Bistro Boss | Add Item</title>
            </Helmet>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mt-16 mb-5">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="recipe name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full" />
                </div>
                <div className="flex mb-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Salad</option>
                            <option>Soup</option>
                            <option>Desi</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-5">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number"
                            {...register("price", { required: true })}
                            placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details*</span>
                    </label>
                    <textarea
                        {...register("recipe", { required: true })}
                        className="textarea textarea-bordered h-24" placeholder="recipe details"></textarea>
                </div>
                <div className="form-control w-full mt-5">
                    <label className="label">
                        <span className="label-text font-semibold">Item Image*</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full" />
                </div>
                <button className="btn btn-outline btn-accent mt-5">
                    <input type="submit" value="Add Item" />
                </button>
            </form>
        </div>
    );
};

export default AddItem;