import Cover from "../../shared/cover/Cover";
import MenuItem from "../../shared/menuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {


    return (
        <div className="pt-24">
            {title && <Cover
                img={coverImg}
                title={title}
            />}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 mb-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
            <div className="text-center mb-12">
                <button className="btn btn-outline btn-accent border-0 border-b-4">Order Your Favorite Food</button>
            </div>
        </div>
    );
};

export default MenuCategory;