import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../home/popularMenu/PopularMenu';


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={'Our menu'}
            />
            <PopularMenu />
            <Cover
                img={menuImg}
                title={'Our menu'}
            />
            <PopularMenu />
            <Cover
                img={menuImg}
                title={'Our menu'}
            />
            <PopularMenu />
        </div>
    );
};

export default Menu;