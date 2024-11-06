import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    const {pathname }= useLocation();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0" style={{marginRight: '30px'}}>
            {links.map((link : any) => (
                <Link to={`/Kanbas/Account/${link}`}
                className={`list-group-item ${pathname.includes(link) ? "active text-black" : "text-danger"} border border-0`}>{link}</Link>
            ))}
        </div>
    );}