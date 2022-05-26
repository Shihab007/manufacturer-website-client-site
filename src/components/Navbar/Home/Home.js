import React from 'react';
import bannerImg from '../../../Assets/img/engine.jpg'
import Parts from '../../../Parts/Parts';
import BusinessSummary from '../../BusinessSummary/BusinessSummary';
import GetInTouch from './GetInTouch';
import Partners from './Partners';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-primary text-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className="lg:max-w-full xs:max-w-xs rounded-lg " alt='' />
                    <div className='lg:container sm:container '>
                        <h1 className="text-5xl font-bold">NStock Bike Parts House</h1>
                        <p className="py-6">We’ve been Selling Genuine Motorcycle Parts and Accessories for the last 3 years. We present The Best Shopping site to Buy Motorcycle Parts online in Bangladesh. If you choose our website for Buy Motorcycle Parts you not mistaken, and we always treat customers with respect...</p>

                    </div>
                </div>
            </div>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Partners></Partners>
            {/* <Reviews></Reviews> */}
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;