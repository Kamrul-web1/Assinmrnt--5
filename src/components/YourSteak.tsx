import React from 'react';

const YourSteak = ({ data }: { data: string }) => {
    return (
        <div className="w-[288px] rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            {/* Header */}
            <div>
                <h2 className="text-xl font-bold text-gray-900">
                    Your Stack
                </h2>

                <p className="mt-1 text-sm text-gray-400">
                    No technologies selected yet.
                </p>
            </div>

            {/* Empty message */}
            <div className="mt-10 flex h-[120px] items-center justify-center">
                <p className="text-sm text-gray-400">
                    Your stack is empty
                </p>
            </div>

        </div>
    );
};

export default YourSteak;