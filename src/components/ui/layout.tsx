import logo from '../../assets/logo.svg';
import logo2 from '../../assets/logo2.svg';
import { AiOutlineShoppingCart, AiOutlineFieldTime, AiOutlineNodeIndex, AiOutlineHome } from 'react-icons/ai'
import { Link } from "react-router-dom";



export default function Layout() {
    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-green-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="#" className="flex ml-2 md:mr-24">
                                <img src={logo} className="h-8 mr-3" alt="FlowBite Logo" />
                                <img src={logo2} className="h-8 mr-3" alt="FlowBite Logo" />
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ml-3">
                                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-700 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                                        <li className='flex items-center justify-center'>
                                            <a href="#" className="block py-2 pl-3 pr-4 text-green-700 " aria-current="page">
                                                <AiOutlineShoppingCart />

                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 pl-3 pr-4 text-green-700 font-light">Anmelden</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 pl-3 pr-4 text-green-700 font-light">Registrieren</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 " aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="home">
                                <span className="cursor-pointer flex items-center p-2 text-grey-700 rounded-lg hover:text-green-700">
                                    <AiOutlineHome />

                                    <span className="ml-3">Home</span>
                                </span>
                            </Link>
                            <Link to="tickets">
                                <span className="cursor-pointer flex items-center p-2 text-grey-700 rounded-lg hover:text-green-700">

                                    <AiOutlineNodeIndex />
                                    <span className="ml-3">Ticketkauf mit Auskunft</span>

                                </span>
                            </Link>
                            <Link to={""}>
                                <span className="cursor-pointer flex items-center p-2 text-grey-700 rounded-lg hover:text-green-700">

                                    <AiOutlineFieldTime />
                                    <span className="ml-3">Abfahrten</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}
