import React from 'react';
import type { Iexplore } from '../types/types';

const TechnologyDataCard = ({ datas }: { datas: Iexplore }) => {
    return (
        <div className=' transition-transform duration-300 hover:-translate-y-2 '>


            <div className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm space-y-6">

                <div className="flex items-center justify-between">
                    <img
                        src={datas.icon}
                        alt={datas.name}
                        className="h-10 w-10 object-contain"
                    />

                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-500">
                        {datas.badge}
                    </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold">
                    {datas.name}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                    {datas.description}
                </p>

                <div className="mt-6 flex items-center justify-between text-sm">
                    <span>{datas.category}</span>
                    <span>{datas.difficulty}</span>
                    <span>⭐ {datas.rating}</span>
                </div>

                <button className="mt-6 w-full rounded-lg bg-black py-3 text-white">
                    Add to Stack
                </button>
            </div>


        </div>
    );
};

export default TechnologyDataCard;