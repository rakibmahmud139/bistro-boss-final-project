import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section>
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"from our menu"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <div className="text-center mb-12">
                <button className="btn btn-outline btn-accent border-0 border-b-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;