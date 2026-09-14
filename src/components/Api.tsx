import React, { use } from 'react';
import type { Iexplore } from '../types/types';
import TechnologyData from './TechnologyData';
interface IpopolarIexplore {
    userspromise: Promise<Iexplore[]>
}
const Api = ({ Explorepromis }: IpopolarIexplore) => {
    console.log(Explorepromis, 'Explorepromis');
    const data = use(Explorepromis);
    console.log(data);


    return (
        <div className=' container mx-auto'>
            <div className=' flex justify-between gap-4'>

            </div>
            <TechnologyData data={data} />
        </div>

    );
};

export default Api;