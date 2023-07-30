import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import MenuCategory from '../menuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={'Our menu'}
            />

            {/* main category */}
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            />
            {/* offered menu */}
            <MenuCategory items={offered} />

            {/* deserts menu */}
            <MenuCategory
                items={desserts} title={"Desserts"} coverImg={dessertImg}
            />

            {/* pizza menu */}
            <MenuCategory items={pizzas} title={"pizza"} coverImg={pizzaImg} />

            {/* salad menu */}
            <MenuCategory items={salads} title={"salad"} coverImg={saladImg} />

            {/* soup menu */}
            <MenuCategory items={soups} title={"salad"} coverImg={soupImg} />
        </div>
    );
};

export default Menu;