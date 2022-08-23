import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeaderOthers from '../components/HeaderOthers';
import Tab from '../components/Tab';
import instantCashback from '../assets/images/instant_cashback.png'
import { ReactComponent as ArrowLeft } from '../assets/images/icon/arrow-left.svg'
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
const Offers = () => {
    const [activeStatus, setActiveStatus] = useState(1);


    return (
        <>
            <HeaderOthers title="Offers" />
            <div className="mt-16 mb-10">
                <h1 className="text-[32px] font-medium text-center mb-10">Promotions</h1>
                <Tab activeStatus={activeStatus} setActiveStatus={setActiveStatus} />

                {/* Offers Cards */}
                <div className="flex flex-col justify-center items-center px-12 gap-14 lg:flex lg:flex-row">
                    <Link to="/offers/instant-cashback" className="flex flex-col p-5 items-center bg-white rounded-lg box-shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                        <img className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={instantCashback} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-medium text-title ">10% Instant Cashback at ShareTrip</h5>
                            <div className="group flex items-center space-x-[5px]">
                                <p className="font-medium text-base text-[#999999] group-hover:text-[#158560]">Explore</p>
                                <BsArrowRight fill="#999999" className="group-hover:fill-[#158560] mt-0.5" />
                            </div>
                        </div>
                    </Link>
                    <Link to="#" className="flex flex-col p-5 items-center bg-white rounded-lg box-shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                        <img className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={instantCashback} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-medium text-title ">10% Instant Cashback at ShareTrip</h5>
                            <div className="group flex items-center space-x-[5px]">
                                <p className="font-medium text-base text-[#999999] group-hover:text-[#158560]">Explore</p>
                                <BsArrowRight fill="#999999" className="group-hover:fill-[#158560] mt-0.5" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {activeStatus === 1 && <div><h1>All Offers</h1></div>}
            {activeStatus === 2 && <div><h1>Cashback</h1></div>}
            {activeStatus === 3 && <div><h1>Discounts</h1></div>}
            {activeStatus === 4 && <div><h1>Refer Bonus</h1></div>}
            {activeStatus === 5 && <div><h1>Get Points</h1></div>}


            <div className="md:mt-[-80px]">
                <Footer />
            </div>

        </>
    );
};

export default Offers;