import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(items => items.category === 'popular');
                setMenu(popularItems);
            })
    }, [])
    return (
        <section>
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"from our menu"}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline btn-accent border-0 border-b-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;