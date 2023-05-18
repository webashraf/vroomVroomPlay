import React from 'react';
import Banner from '../Banner/Banner';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div className='flex flex-col gap-20'>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;