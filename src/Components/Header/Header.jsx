import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import useAuth from "../UseAuth/useAuth";
import myImage from "../../assets/images/aura-removebg-preview.png"
import { Tooltip } from 'react-tooltip'
const Header = () => {
    const [theme, setTheme] = useState('light')

    const {logout, user} = useAuth();
    const [showDropdown, setShowDropdown] = useState(false)
    console.log(user);
    const handleSignOut = () => {
        setShowDropdown(false)
        logout()
            .then()
            .catch();
    };

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('synthwave')
        } else {
            setTheme('light')
        }
    }
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')

        // add custom data-theme attribute
        document
            .querySelector('html')
            .setAttribute('data-theme', localTheme)
    }, [theme])
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"><path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"/></svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-10">
                        <Link className="hover:text-white hover:bg-[#03cdb5] hover:border-2 hover:border-[#03cdb5] p-2 rounded-lg"  to="/">Home</Link>
                        <Link className="hover:text-white hover:bg-[#03cdb5] hover:border-2 hover:border-[#03cdb5] p-2 rounded-lg" to="/allArtCraft">All Art&Craft</Link>
                        <Link className="hover:text-white hover:bg-[#03cdb5] hover:border-2 hover:border-[#03cdb5] p-2 rounded-lg" to="/myCraftList">My Art&Craft</Link>
                        <Link className="hover:text-white hover:bg-[#03cdb5] hover:border-2 hover:border-[#03cdb5] p-2 rounded-lg" to="/register">Register</Link>
                        <Link className="hover:text-white hover:bg-[#03cdb5] hover:border-2 hover:border-[#03cdb5] p-2 rounded-lg" to="/userProfile">Update Profile</Link>
                        <Link className="hover:text-white hover:bg-[#03cdb5] hover:border-2 hover:border-[#03cdb5] p-2 rounded-lg" to="/addCraft">Add Craft</Link>
                    </ul>
                </div>
                <div className="flex -space-x-6 items-center">
                    <img className="w-28" src={myImage} alt="" />
                    
                    <div className="bg-gradient-to-r from-[#03cdb5] to-[#C8143A] text-transparent bg-clip-text">
                        <a className=" text-sm lg:text-2xl font-extrabold">Artisan Aura</a>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    <Link className="hover:text-white hover:bg-[#03cdb5] hover:border-2 hover:border-[#03cdb5] p-2 rounded-lg" to="/">Home</Link>
                    <Link className="hover:text-white hover:bg-[#03cdb5] hover:border-2 hover:border-[#03cdb5] p-2 rounded-lg" to="/allArtCraft">All Art&Craft</Link>
                    <Link className="hover:text-white hover:bg-[#03cdb5] hover:border-2 hover:border-[#03cdb5] p-2 rounded-lg" to="/myCraftList">My Art&Craft</Link>
                    <Link className="hover:text-white hover:bg-[#03cdb5] hover:border-2 hover:border-[#03cdb5] p-2 rounded-lg" to="/register">Register</Link>
                    <Link className="hover:text-white hover:bg-[#03cdb5] hover:border-2 hover:border-[#03cdb5] p-2 rounded-lg" to="/updateProfile">Update Profile</Link>
                    <Link className="hover:text-white hover:bg-[#03cdb5] hover:border-2 hover:border-[#03cdb5] p-2 rounded-lg" to="/addCraft">Add Craft</Link>
                </ul>
            </div>
            {
                user
                    ? (
                        <div className="navbar-end relative space-x-2">
                            <div data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left">
                                <Tooltip id="my-tooltip" />
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src={user.photoURL}
                                    alt=""
                                    onClick={() => setShowDropdown(!showDropdown)}/>
                            </div>
                            <div
                                className={showDropdown
                                    ? "userDropDown showDropdown space-y-2"
                                    : "userDropDown"}>
                                <h1 className="text-xl font-medium">Name:{user.displayName}</h1>
                                <h1 className="font-medium">{user.email}</h1>
                                <Link to="/userProfile"><button className="btn bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD]">User Profile</button></Link>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="p-1 rounded  bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD] text-white border-none">Logout</button>
                        </div>
                    )
                    : (
                        <div className="navbar-end">
                            <Link to="/login">
                                <button onClick={logout} className="btn bg-gradient-to-r from-[#03cdb5] to-[#0CBFDD] text-white border-none">
                                    Login
                                </button>
                            </Link>
                        </div>
                    )
            }
            <label className="cursor-pointer grid place-items-center ml-2">
                <input
                    onChange={handleToggle}
                    type="checkbox"
                    value="synthwave"
                    className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
                <svg
                    className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
                <svg
                    className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </label>
        </div>
    );
};

export default Header;
