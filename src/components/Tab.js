import React, { useEffect } from 'react';
import $ from "jquery";


const Tab = ({ activeStatus, setActiveStatus }) => {


    $(".selected-tab>li").on("click", () => {
        console.log("" + activeStatus);
        $("#tab-options").val(activeStatus).change();
    });



    return (
        <div className="mb-[60px] text-center">
            {/* Mobile view */}
            <div className="sm:hidden relative w-11/12 mx-auto rounded">
                <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="8 9 12 5 16 9" />
                        <polyline points="16 15 12 19 8 15" />
                    </svg>
                </div>

                <select aria-label="Selected tab" id="tab-options" defaultValue={activeStatus} onChange={(event) => setActiveStatus(event.target.value)} className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                    <option className="text-sm text-gray-600" value={1}>All Offers</option>
                    <option className="text-sm text-gray-600" value={2}>Cashback </option>
                    <option className="text-sm text-gray-600" value={3}>Discounts</option>
                    <option className="text-sm text-gray-600" value={4}>Refer Bonus </option>
                    <option className="text-sm text-gray-600" value={5}>Get Points </option>
                </select>
            </div>

            {/* Desktop view */}
            <div className="hidden sm:block bg-white">
                <div className="xl:w-full xl:mx-0 h-12">
                    <ul className="flex justify-center px-7 selected-tab">
                        <li onClick={() => setActiveStatus(1)} className={activeStatus === 1 ? "text-xl font-medium text-brand flex flex-col justify-between pt-3 mr-10" : "text-title py-3 mr-10 font-medium"}>
                            <span className="mb-3 cursor-pointer">All Offers</span>
                            {activeStatus === 1 && <div className="w-full h-0.5 bg-brand " />}
                        </li>
                        <li onClick={() => setActiveStatus(2)} className={activeStatus === 2 ? "text-xl font-medium text-brand flex flex-col justify-between pt-3 mr-10" : " text-title py-3 mr-10 font-medium"}>
                            <span className="mb-3 cursor-pointer">Cashback</span>
                            {activeStatus === 2 && <div className="w-full h-0.5 bg-brand" />}
                        </li>
                        <li onClick={() => setActiveStatus(3)} className={activeStatus === 3 ? "text-xl font-medium text-brand flex flex-col justify-between pt-3 mr-10" : "text-title py-3 mr-10 font-medium"}>
                            <span className="mb-3 cursor-pointer">Discounts</span>
                            {activeStatus === 3 && <div className="w-full h-0.5 bg-brand" />}
                        </li>
                        <li onClick={() => setActiveStatus(4)} className={activeStatus === 4 ? "text-xl font-medium text-brand flex flex-col justify-between pt-3 mr-10" : "text-title py-3 mr-10 font-medium"}>
                            <span className="mb-3 cursor-pointer">Refer Bonus</span>
                            {activeStatus === 4 && <div className="w-full h-0.5 bg-brand" />}
                        </li>
                        <li onClick={() => setActiveStatus(5)} className={activeStatus === 5 ? "text-xl font-medium text-brand flex flex-col justify-between pt-3" : "text-title py-3 font-medium"}>
                            <span className="mb-3 cursor-pointer">Get Points</span>
                            {activeStatus === 5 && <div className="w-full h-0.5 bg-brand" />}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Tab;