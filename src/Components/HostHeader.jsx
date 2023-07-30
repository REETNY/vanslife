import { NavLink } from "react-router-dom";

export default function HostHeader({func2}){

    const active = {
        borderBottom: "2px solid black"
    }

    return (
        <div className="host_header_nav">
            <nav className="host_navs">
                <ul className="host_links">
                    <li className="host_link" onClick={() => func2(true)}>
                        <NavLink end style={({isActive}) => isActive ? active : null} to=".">Dashboard</NavLink>
                    </li>
                    <li className="host_link" onClick={() => func2(true)}>
                        <NavLink style={({isActive}) => isActive ? active : null} to="income">Income</NavLink>
                    </li>
                    <li className="host_link" onClick={() => func2(true)}>
                        <NavLink style={({isActive}) => isActive ? active : null} to="vans">Vans</NavLink>
                    </li>
                    <li className="host_link" onClick={() => func2(true)}>
                        <NavLink style={({isActive}) => isActive ? active : null} to="reviews">Reviews</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}