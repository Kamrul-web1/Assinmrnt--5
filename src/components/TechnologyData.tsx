import React, { useState } from 'react';

import type { Iexplore } from '../types/types';

import TechnologyDataCard from './TechnologyDataCard';

import YourSteak from './YourSteak';

const TechnologyData = ({ data }: { data: Iexplore[] }) => {

    const [stack, setStack] = useState<Iexplore[]>([]);

    console.log(data);

    const handleAddToStack = (technology: Iexplore) => {

        const alreadyAdded = stack.some(
            (item) => item.id === technology.id
        );

        if (alreadyAdded) return;

        setStack([...stack, technology]);

    };

    const handleRemoveFromStack = (id: number) => {

        setStack(stack.filter((technology) => technology.id !== id));

    };

    const handleRemoveAll = () => {

        setStack([]);

    };

    return (

        <div className='container mx-auto'>

            <div className='mb-6 pb-5'>

                <h2 className='text-5xl font-bold'>

                    Explore the

                    <span className='text-[#EC4899]'> Technologies</span>

                </h2>

                <p className='text-[#64748B] text-2xl'>

                    Pick one technology per category to build your ideal stack.

                </p>

            </div>

            <div className='grid grid-cols-12 gap-8'>

                <div className='col-span-8'>

                    <div className='grid grid-cols-3 gap-4'>

                        {
                            data.map((datas: Iexplore, ind: number) => {

                                return (

                                    <TechnologyDataCard

                                        key={ind}

                                        datas={datas}

                                        handleAddToStack={handleAddToStack}

                                    />

                                )

                            })

                        }

                    </div>

                </div>


                <div className='col-span-4'>

                    <YourSteak

                        stack={stack}

                        handleRemoveFromStack={handleRemoveFromStack}

                        handleRemoveAll={handleRemoveAll}

                    />

                </div>

            </div>

        </div>
    );

};

export default TechnologyData;