import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import { signOut } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user] = useAuthState(auth);
    return (
        <div>
            <div>
                <nav className="shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="py-5 flex justify-between md:block">
                            <div className="flex justify-between items-center">
                                <div className="flex-shrink-0">
                                    <Link to='/'>
                                        <h1 className='text-3xl md:text-4xl text-black font-serif font-semibold'><span className='text-orange-500'>B</span>ike <span className='text-orange-500'>W</span>arehouse</h1>
                                    </Link>
                                </div>
                                <div className="hidden md:block md:pl-10">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <Link
                                            to="home"
                                            className=" hover:bg-orange-500 hover:text-white text-black px-3 py-2 rounded-md text-lg font-medium"
                                        >
                                            Home
                                        </Link>

                                        <Link
                                            to="blog"
                                            className=" hover:bg-orange-500 hover:text-white text-black px-3 py-2 rounded-md text-lg font-medium"
                                        >
                                            Blog
                                        </Link>

                                        <Link
                                            to="manage-inventory"
                                            className=" hover:bg-orange-500 hover:text-white text-black px-3 py-2 rounded-md text-lg font-medium"
                                        >
                                            ManageInventory
                                        </Link>



                                        {
                                            user ?
                                                <div>
                                                    <Link
                                                        to="add-new"
                                                        className=" hover:bg-orange-500 hover:text-white text-black px-3 py-2 rounded-md text-lg font-medium"
                                                    >
                                                        AddNew
                                                    </Link>
                                                    <Link
                                                        to="add-new"
                                                        className=" hover:bg-orange-500 hover:text-white text-black px-3 py-2 rounded-md text-lg font-medium"
                                                    >
                                                        MyItem
                                                    </Link>
                                                    <button
                                                        onClick={() => signOut(auth)}
                                                        className=" bg-orange-500 hover:text-white text-white px-3 py-2 rounded-md text-lg font-medium"
                                                    >
                                                        LogOut
                                                    </button>
                                                </div>
                                                :
                                                <div>
                                                    <Link
                                                        to="login"
                                                        className=" bg-orange-500 hover:text-white text-white px-3 py-2 rounded-md text-lg font-medium"
                                                    >
                                                        LogIn
                                                    </Link>

                                                    <Link
                                                        to="signup"
                                                        className="hover:bg-orange-500 hover:text-white text-black px-3 py-2 rounded-md text-lg font-medium"
                                                    >
                                                        SignUp
                                                    </Link>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Transition
                        show={isOpen}
                        enter="transition ease-out duration-100 transform"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75 transform"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div className="md:hidden" id="mobile-menu">
                                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    <Link
                                        to="home"
                                        className="text-black px-3 py-2 rounded-md text-lg font-medium"
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        to="blog"
                                        className="block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        Blog
                                    </Link>

                                    <Link
                                        to="manage-inventory"
                                        className="block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        ManageInventory
                                    </Link>

                                    <Link
                                        to="add-new"
                                        className="block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        AddNew
                                    </Link>

                                    <Link
                                        to="login"
                                        className="block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        LogIn
                                    </Link>

                                    <Link
                                        to="signup"
                                        className="block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        SignUp
                                    </Link>
                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>


            </div>

        </div>
    );
};

export default Header;