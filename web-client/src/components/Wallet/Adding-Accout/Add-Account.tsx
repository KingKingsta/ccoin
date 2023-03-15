import React from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';

export interface IAddAccount {
    sampleTextProp: string;
}

const networks = [
    {
        name: 'Ethereum',
        priceInETH: 1,
        priceInFiat: '$1,500',
        coinCode: 'ETH',
    },
    {
        name: 'Bitcoin',
        priceInETH: 1,
        priceInFiat: '$1,500',
        coinCode: 'ETH',
    },
    {
        name: 'Polygon',
        priceInETH: 1,
        priceInFiat: '$1,500',
        coinCode: 'ETH',
    },
];

const AddAccount: React.FC<IAddAccount> = () => {
    function createNewAccount(network: string) {
        return (
            <button className="text-blue-500 py-3 px-5 rounded-full bg-slate-100 hover:bg-blue-400">
                <span>{network}</span>
            </button>
        );
    }

    return (
        <>
            <a
                href="#"
                className="w-full flex justify-between items-center  hover:bg-sky-100"
            >
                <div className="flex flex-col gap-2">
                    <div className="flex gap-1 font-light">
                        <span>Savings Account</span>
                        <span>-</span>
                        <span>0x0BA...5Bb9</span>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-[22px] font-bold flex gap-2">
                            <span>5.3 ETH</span>
                        </div>
                        <span className="text-[18px] font-normal">
                            <span>$8,902.64</span>
                        </span>
                    </div>
                </div>
                <button className="text-uppercase tracking-wide border py-1 px-2">
                    View
                </button>
            </a>
        </>
    );
};

function AddNetwork() {
    return (
        <>
            <div className="flex flex-col items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                    />
                </svg>
                <span>Network</span>
            </div>
        </>
    );
}

function AddIcon() {
    return (
        <>
            <div className="flex flex-col items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                    />
                </svg>
                <span>Account</span>
            </div>
        </>
    );
}

export default AddAccount;
