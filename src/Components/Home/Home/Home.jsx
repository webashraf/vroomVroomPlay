import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import CarGallery from '../../CarGallery/CarGallery';

const Home = () => {
    return (
        <div className='flex flex-col gap-20'>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
            <CarGallery></CarGallery>
        </div>
    );
};

export default Home;