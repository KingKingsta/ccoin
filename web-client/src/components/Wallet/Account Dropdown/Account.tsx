import React, { useState } from 'react';
import { mockWalletProps } from '../Wallet.mocks';
import { Transition, Disclosure, RadioGroup } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export interface IAccount {
    sampleTextProp: string;
}

const Account: React.FC<IAccount> = ({ sampleTextProp }) => {
    const accounts = [
        {
            name: 'Savings Account',
            address: '0xa95...7e8c3',
            amountETH: '0.00051 ETH',
            amountUSD: '$0.80',
        },
        {
            name: 'Flex Account',
            address: '0xa95...7e8c3',
            amountETH: '0.00051 ETH',
            amountUSD: '$0.80',
        },
        {
            name: 'Stake Account',
            address: '0xa95...7e8c3',
            amountETH: '0.00051 ETH',
            amountUSD: '$0.80',
        },
    ];

    const [selected, setSelected] = useState(accounts[0]);

    return (
        <>
            <div className="flex flex-col w- p-2">
                <Disclosure defaultOpen={true}>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span>What is your refund policy?</span>
                                <ChevronUpIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                <RadioGroup
                                    value={selected}
                                    onChange={setSelected}
                                >
                                    <RadioGroup.Label className="sr-only">
                                        Server size
                                    </RadioGroup.Label>
                                    <div className="space-y-2">
                                        {accounts.map((account) => (
                                            <RadioGroup.Option
                                                key={account.name}
                                                value={account}
                                                className={({
                                                    active,
                                                    checked,
                                                }) =>
                                                    `${
                                                        active
                                                            ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                                            : ''
                                                    }
                                                                ${
                                                                    checked
                                                                        ? 'bg-sky-200 bg-opacity-75 text-white'
                                                                        : 'bg-white'
                                                                }
                                                                    
                                                                    relative 
                                                                    flex 
                                                                    cursor-pointer 
                                                                    rounded-lg 
                                                                    px-5 
                                                                    py-2 
                                                                    shadow-md 

                                                                    hover:bg-sky-300

                                                                    focus:outline-none`
                                                }
                                            >
                                                {({ active, checked }) => (
                                                    <>
                                                        <div className="flex w-full items-center justify-between">
                                                            <div className="flex items-center">
                                                                <div className="flex items-center gap-3">
                                                                    <RadioGroup.Label
                                                                        as="p"
                                                                        className={`font-light text-sky-800  ${
                                                                            checked
                                                                                ? 'text-white'
                                                                                : 'text-gray-900'
                                                                        }`}
                                                                    >
                                                                        BOA
                                                                        Savings
                                                                    </RadioGroup.Label>
                                                                    <RadioGroup.Description
                                                                        as="span"
                                                                        className={`inline text-[22px] text-sky-800 font-medium ${
                                                                            checked
                                                                                ? 'text-sky-100'
                                                                                : 'text-gray-500'
                                                                        }`}
                                                                    >
                                                                        100 ETH
                                                                    </RadioGroup.Description>
                                                                </div>
                                                            </div>
                                                            {checked && (
                                                                <div className="shrink-0 text-sky-900">
                                                                    <CheckIcon className="h-6 w-6" />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </>
                                                )}
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                                <button className="rounded-lg text-darkblue font-semibold transition flex items-center gap-3 text-md tracking-wide leading-6 py-1 px-1.5 hover:bg-slate-900/[0.03] hover:text-sky-500 -my-1 -mx-1.5">
                                    <a href="/">Add Account</a>
                                </button>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <div className="flex flex-col items-center">
                    <span>$100</span>
                    <span>Total Amount</span>
                </div>
            </div>
        </>
    );
};

function CheckIcon(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ArrowIcon(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                {...props}
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
            </svg>
        </>
    );
}

export default Account;
