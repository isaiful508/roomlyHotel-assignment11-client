import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>

            <div className="navbar lg:w-full md:w-full w-96 mt-4 container mx-auto bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <NavLink to='/'
                            className={({ isActive }) => isActive ? 'text-[#3665b8] poppins-medium rounded-lg border-2 p-2 border-[#3665b8] font-600' : 'font-500'}>Home</NavLink>


                        <NavLink to='/rooms'
                            className={({ isActive }) => isActive ? 'text-[#3665b8] poppins-medium rounded-lg border-2 p-2 border-[#3665b8] font-600' : 'font-500'}>Rooms</NavLink>

                        <NavLink to='/my-bookings'
                            className={({ isActive }) => isActive ? 'text-[#3665b8] poppins-medium rounded-lg border-2 p-2 border-[#3665b8] font-600' : 'font-500'}>My Bookings</NavLink>
                        <NavLink to='/about-us'
                            className={({ isActive }) => isActive ? 'text-[#3665b8] poppins-medium rounded-lg border-2 p-2 border-[#3665b8] font-600' : 'font-500'}>About Us</NavLink>
                        <NavLink to='/contact-us'
                            className={({ isActive }) => isActive ? 'text-[#3665b8] poppins-medium rounded-lg border-2 p-2 border-[#3665b8] font-600' : 'font-500'}>Contact Us</NavLink>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10" src=""  alt="" />
                        <a className="btn btn-ghost   font-700 lg:text-3xl text-xl font-700">Roomly</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu  flex items-center space-x-6 menu-horizontal px-1">
                        <NavLink to='/'
                            className={({ isActive }) => isActive ? 'text-[#3665b8] poppins-medium rounded-lg border-2 p-2 border-[#3665b8] font-600' : 'font-500'}>Home</NavLink>


                        <NavLink to='/rooms'
                            className={({ isActive }) => isActive ? 'text-[#3665b8] poppins-medium rounded-lg border-2 p-2 border-[#3665b8] font-600' : 'font-500'}>Rooms</NavLink>

                        <NavLink to='/my-bookings'
                            className={({ isActive }) => isActive ? 'text-[#3665b8] poppins-medium rounded-lg border-2 p-2 border-[#3665b8] font-600' : 'font-500'}>My Bookings</NavLink>
                        <NavLink to='/about-us'
                            className={({ isActive }) => isActive ? 'text-[#3665b8] poppins-medium rounded-lg border-2 p-2 border-[#3665b8] font-600' : 'font-500'}>About Us</NavLink>
                        <NavLink to='/contact-us'
                            className={({ isActive }) => isActive ? 'text-[#3665b8] poppins-medium rounded-lg border-2 p-2 border-[#3665b8] font-600' : 'font-500'}>Contact Us</NavLink>
                    </ul>
                </div>


                <div className="navbar-end">
                    {/* theme controller */}
                    <div className="mr-4">
                        <label className="cursor-pointer grid place-items-center">
                            <input type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>


                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div className='w-10 rounded-full' title=''>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src=''
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            
                            <li>
                                <div>My Bookings</div>
                            </li>
                            
                            
                            <li className='mt-2'>
                                <button className='bg-gray-200 block text-center'>Logout</button>
                            </li>
                        </ul>
                    </div>

                    <div className="flex gap-2">
                        <Link to='/login' className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 bg-[#3665b8] font-600" > Login</Link>

                       
                    </div>

                </div>


            </div>


        </div>
    );
};

export default Navbar;