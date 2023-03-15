import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { mockAddAccountProps } from './Adding-Accout/Add-Account.mocks';
import Account from './Adding-Accout/Add-Account';
// import Account from './Account Dropdown/Account';
// import { mockAccountProps } from './Account Dropdown/Account.mocks';

// // import Web3 from 'web3'

// import Header from './Header/Header';
// import { mockHeaderProps } from './Header/Header.mocks';
// import Example from './radioGroup';

// const people = [
//     {
//         id: 1,
//         name: 'Ethereum Mainnet',
//         avatar: 'moz-extension://9d68c021-86d6-4c48-bfb3-d99ccc304237/images/eth_logo.svg',
//     },
//     {
//         id: 2,
//         name: 'Rinkby Testnet',
//         avatar: 'moz-extension://9d68c021-86d6-4c48-bfb3-d99ccc304237/images/matic-token.png',
//     },
//     {
//         id: 3,
//         name: 'Rospen Testnet',
//         avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
//     },
//     {
//         id: 4,
//         name: 'Sepoila Testnet',
//         avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         id: 5,
//         name: 'Goerli Testnet',
//         avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     {
//         id: 6,
//         name: 'Polygon Mainnet',
//         avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
// ];

// eslint-disable-next-line react-hooks/rules-of-hooks

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export interface IWallet {
    address: string;
    balanceInWei: number;
    fiatBalance?: number;
    cryptoCode?: string;
    fiatCode?: string;
}

export interface INetwork extends IWallet {
    id?: [number, string];
    name?: string;
    image?: string;
    testNetworks?: string[];
    tokenValue?: number;
}

const Wallet: React.FC<IWallet> = () => {
    function AddIcon() {
        return (
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
        );
    }
    function ConfigIcon() {
        return (
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
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
            </svg>
        );
    }

    const [categories] = useState({
        AddIcon: [null],
        Popular: [null],
        Trending: [null],
    });

    return (
        <>
            <div className="absolute bottom-0 w-full max-w-lg sm:px-0">
                <div className="relative">
                    <Tab.Group>
                        <Tab.Panels as="div" className="mt-2 w-[430px]">
                            <Tab.Panel
                                className={classNames(
                                    'bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <div className="h-[857px]">
                                    <Account {...mockAddAccountProps.base} />
                                </div>
                            </Tab.Panel>

                            <Tab.Panel
                                className={classNames(
                                    'bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                groups
                            </Tab.Panel>

                            <Tab.Panel
                                className={classNames(
                                    'bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                contracts
                            </Tab.Panel>
                            <Tab.Panel
                                className={classNames(
                                    'bg-white p-3',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                transactions
                            </Tab.Panel>
                        </Tab.Panels>
                        <Tab.List className="relative bottom-0 left-0 right-0 flex w-[430px] space-x-1 p-1">
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-sky-900 hover:transform hover:scale-125 hvoer:duration-300'
                                    )
                                }
                            >
                                <button
                                    className="w-full h-full flex items-center justify-center"
                                    onClick={() => console.log('Great')}
                                >
                                    <img
                                        src="./assets/wallet/wallet-solid.svg"
                                        alt="wallet-solid-icon"
                                        className="w-6 h-6"
                                    />
                                    <img
                                        src="./assets/wallet/wallet-outline.svg"
                                        alt="wallet-outline-icon"
                                        className="w-6 h-6"
                                    />
                                </button>
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-sky-900 hover:transform hover:scale-125 hvoer:duration-300'
                                    )
                                }
                            >
                                <button
                                    className="w-full h-full flex items-center justify-center"
                                    onClick={() => console.log('Great')}
                                >
                                    <img
                                        src="./assets/groups/groups-solid.svg"
                                        alt="groups-solid-icon"
                                        className="w-6 h-6"
                                    />
                                    <img
                                        src="./assets/groups/groups-outline.svg"
                                        alt="groups-outline-icon"
                                        className="w-6 h-6"
                                    />
                                </button>
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-sky-900 hover:transform hover:scale-125 hvoer:duration-300'
                                    )
                                }
                            >
                                <button
                                    className="w-full h-full flex items-center justify-center"
                                    onClick={() => console.log('Great')}
                                >
                                    <img
                                        src="./assets/contract/contract-solid.svg"
                                        alt="contract-solid-icon"
                                        className="w-6 h-6"
                                    />
                                    <img
                                        src="./assets/contract/contract-outline.svg"
                                        alt="contract-outline-icon"
                                        className="w-6 h-6"
                                    />
                                </button>
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-sky-900 hover:transform hover:scale-125 hvoer:duration-300'
                                    )
                                }
                            >
                                <button
                                    className="w-full h-full flex items-center justify-center"
                                    onClick={() => console.log('Great')}
                                >
                                    <img
                                        src="./assets/transaction/transaction-solid.svg"
                                        alt="transaction-solid-icon"
                                        className="w-6 h-6"
                                    />
                                    <img
                                        src="./assets/transaction/transaction-outline.svg"
                                        alt="transaction-outline-icon"
                                        className="w-6 h-6"
                                    />
                                </button>
                            </Tab>
                        </Tab.List>
                    </Tab.Group>
                </div>
            </div>

            {/* <div className="mx-auto w-full max-w-md flex flex-col gap-5 justify-center m-10 items-center">
                <div className="flex flex-col gap-2 hover:bg-sky-200">
                    <span>Noah Wingate</span>
                    <span>kingkingsta.eth</span>
                </div>
                <div>Coin</div>
                <div>Noah Wingate</div>
                Name, Domain, and Coin
            </div>
            <div className="mx-auto w-full max-w-md flex flex-col gap-5 justify-center m-10 items-center">
                Account Balance
            </div>
            <div className="mx-auto w-full max-w-md flex flex-col gap-5 justify-center m-10 items-center">
                Address
            </div> */}
        </>
    );
};

export default Wallet;
