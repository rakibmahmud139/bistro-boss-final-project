import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-24">
            <SectionTitle
                subHeading={"Check It Out"}
                heading={'featured item'}
            />
            <div className="md:flex justify-center items-center py-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <h3 className="uppercase">Where I can get some</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, nesciunt est? Consectetur pariatur autem facere. Ad iure, nam aut quaerat dicta voluptatem aliquid fuga id unde error voluptatibus distinctio magnam ratione reiciendis accusantium amet. Ea illum minus dolorum, modi mollitia perferendis necessitatibus quod, cumque optio voluptatem corporis incidunt ut maiores.</p>
                    <button className="btn btn-outline btn-accent border-0 border-b-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;