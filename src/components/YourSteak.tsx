import React from 'react';

import type { Iexplore } from '../types/types';

const YourSteak = ({

    stack,

    handleRemoveFromStack,

    handleRemoveAll

}: {

    stack: Iexplore[];

    handleRemoveFromStack: (id: number) => void;

    handleRemoveAll: () => void;

}) => {

    return (

        <div className="w-[288px] rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            {/* Header */}

            <div>

                <h2 className="text-xl font-bold text-gray-900">

                    Your Stack

                </h2>

                <p className="mt-1 text-sm text-gray-400">

                    {stack.length} technologies selected yet.

                </p>

            </div>


            {/* Empty message */}

            {

                stack.length === 0 ? (

                    <div className="mt-10 flex h-[120px] items-center justify-center">

                        <p className="text-sm text-gray-400">

                            Your stack is empty

                        </p>

                    </div>

                ) : (

                    <>

                        <div className="mt-6 space-y-3">

                            {

                                stack.map((technology) => (

                                    <div

                                        key={technology.id}

                                        className="flex items-center justify-between gap-3 rounded-lg border p-3"

                                    >

                                        <div className="flex items-center gap-3">

                                            <img

                                                src={technology.icon}

                                                alt={technology.name}

                                                className="h-10 w-10 object-contain"

                                            />

                                            <div>

                                                <h3 className="font-semibold">

                                                    {technology.name}

                                                </h3>

                                                <p className="text-xs text-gray-400">

                                                    {technology.category}

                                                </p>

                                            </div>

                                        </div>

                                        <button

                                            onClick={() =>

                                                handleRemoveFromStack(technology.id)

                                            }

                                            className="rounded-md border border-red-500 bg-white px-3 py-1 text-sm text-red-500"

                                        >

                                            Remove

                                        </button>

                                    </div>

                                ))

                            }

                        </div>


                        <button

                            onClick={handleRemoveAll}

                            className="mt-5 w-full rounded-lg border border-red-500 bg-white py-2 text-red-500"

                        >

                            Remove All

                        </button>

                    </>

                )

            }

        </div>

    );

};

export default YourSteak;