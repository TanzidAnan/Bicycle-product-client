import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";

const Roots = () => {
    return (
        <div className="w-10/12 mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;