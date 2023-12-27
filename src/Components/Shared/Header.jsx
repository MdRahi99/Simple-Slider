import { NavLink } from "react-router-dom";
import Products from "../Products/Products";

const Header = () => {

    const {loading} = Products();

    if (loading) {
        return <div className="h-10 w-10 rounded-full border-8 border-dashed border-black mt-44 animate-spin mx-auto"></div>;
    }

    return (
        <>
            <div className="flex items-center justify-center mt-8 gap-4 w-1/2 mx-auto">
                <NavLink
                    to="/slider1"
                    className={({ isActive }) => (isActive ? "text-lg uppercase shadow-2xl shadow-cyan-300 text-white bg-teal-500 rounded-tl-2xl py-1 px-3 font-semibold font-mono" : "text-lg uppercase shadow-2xl shadow-cyan-300 bg-black text-white hover:bg-teal-500 rounded-tl-2xl py-1 px-3 font-semibold font-mono")}
                >
                    Slider 1
                </NavLink>
                <NavLink
                    to="/slider2"
                    className={({ isActive }) => (isActive ? "text-lg uppercase shadow-2xl shadow-cyan-300 text-white bg-teal-500 rounded-tr-2xl py-1 px-3 font-semibold font-mono" : "text-lg uppercase shadow-2xl shadow-cyan-300 bg-black text-white hover:bg-teal-500 rounded-tr-2xl py-1 px-3 font-semibold font-mono")}
                >
                    Slider 2
                </NavLink>
            </div>
        </>
    );
};

export default Header;