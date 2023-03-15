import React, { FormEvent, ReactEventHandler, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';

export interface ICreateAccount {
    sampleTextProp: 'Hello world!';
}

const CreateAccount: React.FC<ICreateAccount> = ({ sampleTextProp }) => {
    const [createdAccount, setCreatedAccount] = useState(false);

    const submitCreatedAccount = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setCreatedAccount(!createdAccount);
    };

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-20 w-auto flex items-center justify-center bg-slate-100"
                            src="/ccoin.svg"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-darkblue">
                            Create your account
                        </h2>
                        {createdAccount ? (
                            <p className="mt-2 text-center text-sm text-gray-600">
                                <a
                                    href="/"
                                    className="font-medium text-sky-500 hover:text-indigo-500"
                                >
                                    We&apos;ve sent your request, check your
                                    email
                                </a>
                            </p>
                        ) : null}
                    </div>
                    <form
                        className="mt-8 space-y-6"
                        action="#"
                        // method="POST"
                        // onSubmit={() => submitCreatedAccount}
                    >
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="space-y-px flex flex-col gap-3 rounded-md shadow-sm">
                            <div>
                                <label htmlFor="full-name" className="sr-only">
                                    Full Name
                                </label>
                                <input
                                    id="full-name"
                                    name="name"
                                    type="name"
                                    autoComplete="name"
                                    // required
                                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 
                                    focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Full name"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email-address"
                                    className="sr-only"
                                >
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    // required
                                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    // required
                                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="sr-only"
                                >
                                    Confirm password
                                </label>
                                <input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    autoComplete="confirm-password"
                                    // required
                                    className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Confirm Password"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="

                                group 
                                relative 
                                flex w-full 
                                justify-center 
                                rounded-md 
                                border 
                                border-transparent 
                                bg-sky-500 
                                py-2 
                                px-4 
                                text-sm 
                                font-medium 
                                text-white 

                                hover:bg-sky-700 

                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-indigo-500 
                                focus:ring-offset-2
                                
                                "
                                onClick={(e) => submitCreatedAccount}
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateAccount;
