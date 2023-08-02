import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(res => {
                const createUser = res.user;
                console.log(createUser);

                updateUserProfile(data.name, data.photoURL)

                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }

                        fetch('http://localhost:5000/users', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.insertedId) {

                                    reset();
                                    Swal.fire(
                                        'Sign Up!',
                                        'Sign Up SuccessFul.',
                                        'success'
                                    )
                                    navigate('/');
                                }
                            })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err);
            })
    };




    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card  lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photoURL")} placeholder="photo URL" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]/
                                    })} name="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}

                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 character</p>}

                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less then 20 character</p>}

                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one uppercase one lowercase one number</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-outline btn-accent border-0 border-b-4" type="submit" value="Sign Up" />
                                </div>
                            </div>
                        </form>
                        <p className="text-center mb-3">Have An Account? <Link to='/login' className="text-accent uppercase">Go to login</Link></p>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;