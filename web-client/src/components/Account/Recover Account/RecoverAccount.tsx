import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';

export interface IRecoverAccount {
    sampleTextProp: 'Hello world!';
}

const RecoverAccount: React.FC = () => {
    const [found, setFound] = useState('');

    const submitEmail = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        setFound('found');
    };

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-20 w-auto"
                            src="/ccoin.svg"
                            alt="CCoin Logo"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-darkblue">
                            Recovery Seed Phrase
                        </h2>
                        {found === 'found' ? (
                            <p className="mt-2 text-center text-sm text-gray-600">
                                <a
                                    href="/"
                                    className="font-medium text-sky-500 hover:text-indigo-500"
                                >
                                    We&apos;ve found your account!
                                </a>
                            </p>
                        ) : null}
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="flex gap-5">
                            <div className="flex flex-col gap-3 rounded-md">
                                <div>
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        1st word
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="
                                        relative 
                                        block w-full 
                                        appearance-none 
                                        rounded-none 
                                        rounded-md 
                                        border 
                                        border-gray-300 
                                        px-3 
                                        py-2 
                                        text-gray-900 
                                        placeholder-gray-500

                                        focus:z-10 
                                        focus:border-indigo-500 
                                        focus:outline-none 
                                        focus:ring-indigo-500 
                                        sm:text-sm
                                        "
                                        placeholder="First"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        2nd word
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="
                                        relative 
                                        block w-full 
                                        appearance-none 
                                        rounded-none 
                                        rounded-md 
                                        border 
                                        border-gray-300 
                                        px-3 
                                        py-2 
                                        text-gray-900 
                                        placeholder-gray-500

                                        focus:z-10 
                                        focus:border-indigo-500 
                                        focus:outline-none 
                                        focus:ring-indigo-500 
                                        sm:text-sm
                                        "
                                        placeholder="Second"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        3rd word
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="
                                        relative 
                                        block w-full 
                                        appearance-none 
                                        rounded-none 
                                        rounded-md 
                                        border 
                                        border-gray-300 
                                        px-3 
                                        py-2 
                                        text-gray-900 
                                        placeholder-gray-500

                                        focus:z-10 
                                        focus:border-indigo-500 
                                        focus:outline-none 
                                        focus:ring-indigo-500 
                                        sm:text-sm
                                        "
                                        placeholder="Third"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        4th word
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="
                                        relative 
                                        block w-full 
                                        appearance-none 
                                        rounded-none 
                                        rounded-md 
                                        border 
                                        border-gray-300 
                                        px-3 
                                        py-2 
                                        text-gray-900 
                                        placeholder-gray-500

                                        focus:z-10 
                                        focus:border-indigo-500 
                                        focus:outline-none 
                                        focus:ring-indigo-500 
                                        sm:text-sm
                                        "
                                        placeholder="Fourth"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        5th word
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="
                                        relative 
                                        block w-full 
                                        appearance-none 
                                        rounded-none 
                                        rounded-md 
                                        border 
                                        border-gray-300 
                                        px-3 
                                        py-2 
                                        text-gray-900 
                                        placeholder-gray-500

                                        focus:z-10 
                                        focus:border-indigo-500 
                                        focus:outline-none 
                                        focus:ring-indigo-500 
                                        sm:text-sm
                                        "
                                        placeholder="Fifth"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        6th word
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="
                                        relative 
                                        block w-full 
                                        appearance-none 
                                        rounded-none 
                                        rounded-md 
                                        border 
                                        border-gray-300 
                                        px-3 
                                        py-2 
                                        text-gray-900 
                                        placeholder-gray-500

                                        focus:z-10 
                                        focus:border-indigo-500 
                                        focus:outline-none 
                                        focus:ring-indigo-500 
                                        sm:text-sm
                                        "
                                        placeholder="Sixth"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        7th word
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="
                                        relative 
                                        block w-full 
                                        appearance-none 
                                        rounded-none 
                                        rounded-md 
                                        border 
                                        border-gray-300 
                                        px-3 
                                        py-2 
                                        text-gray-900 
                                        placeholder-gray-500

                                        focus:z-10 
                                        focus:border-indigo-500 
                                        focus:outline-none 
                                        focus:ring-indigo-500 
                                        sm:text-sm
                                        "
                                        placeholder="Seventh"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        8th word
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="
                                        relative 
                                        block w-full 
                                        appearance-none 
                                        rounded-none 
                                        rounded-md 
                                        border 
                                        border-gray-300 
                                        px-3 
                                        py-2 
                                        text-gray-900 
                                        placeholder-gray-500

                                        focus:z-10 
                                        focus:border-indigo-500 
                                        focus:outline-none 
                                        focus:ring-indigo-500 
                                        sm:text-sm
                                        "
                                        placeholder="Eighth"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        9th word
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="
                                        relative 
                                        block w-full 
                                        appearance-none 
                                        rounded-none 
                                        rounded-md 
                                        border 
                                        border-gray-300 
                                        px-3 
                                        py-2 
                                        text-gray-900 
                                        placeholder-gray-500

                                        focus:z-10 
                                        focus:border-indigo-500 
                                        focus:outline-none 
                                        focus:ring-indigo-500 
                                        sm:text-sm
                                        "
                                        placeholder="Nineth"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        10th word
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="
                                        relative 
                                        block w-full 
                                        appearance-none 
                                        rounded-none 
                                        rounded-md 
                                        border 
                                        border-gray-300 
                                        px-3 
                                        py-2 
                                        text-gray-900 
                                        placeholder-gray-500

                                        focus:z-10 
                                        focus:border-indigo-500 
                                        focus:outline-none 
                                        focus:ring-indigo-500 
                                        sm:text-sm
                                        "
                                        placeholder="Tenth"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        11th word
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="
                                        relative 
                                        block w-full 
                                        appearance-none 
                                        rounded-none 
                                        rounded-md 
                                        border 
                                        border-gray-300 
                                        px-3 
                                        py-2 
                                        text-gray-900 
                                        placeholder-gray-500

                                        focus:z-10 
                                        focus:border-indigo-500 
                                        focus:outline-none 
                                        focus:ring-indigo-500 
                                        sm:text-sm
                                        "
                                        placeholder="Eleventh"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        12th word
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="
                                        relative 
                                        block w-full 
                                        appearance-none 
                                        rounded-none 
                                        rounded-md 
                                        border 
                                        border-gray-300 
                                        px-3 
                                        py-2 
                                        text-gray-900 
                                        placeholder-gray-500

                                        focus:z-10 
                                        focus:border-indigo-500 
                                        focus:outline-none 
                                        focus:ring-indigo-500 
                                        sm:text-sm
                                        "
                                        placeholder="Twelfth"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-sky-500 py-2 px-4 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={submitEmail}
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon
                                        className="h-5 w-5 text-sky-300 group-hover:text-sky-400"
                                        aria-hidden="true"
                                    />
                                </span>
                                Find Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RecoverAccount;
