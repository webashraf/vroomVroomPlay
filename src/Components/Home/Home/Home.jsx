import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import CarGallery from '../../CarGallery/CarGallery';

const Home = () => {
    return (
        <div className='flex flex-col gap-20'>
            <Banner></Banner>
            <CarGallery></CarGallery>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;