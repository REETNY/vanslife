import { Link, Outlet, NavLink, useLoaderData, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"



export default function HostVanLayOut(){

    const active = {
        borderBottom: "2px solid black"
    }

    let vanData = useLoaderData();

    let newState = useLocation();
    let oldPath = newState.state?.oldPath;
    let textPath = newState.state?.pathText;

    let rentedIds = JSON.parse(localStorage.getItem("rentedVans")) || [];

    let removeId = (id) => {
        rentedIds = rentedIds.filter((idVan) => {
            return id == idVan ? false : id
        })
        localStorage.setItem("rentedVans", JSON.stringify(rentedIds))
    }


    return(

        <>
            <div className="back_to_userVans">
                <FaArrowLeft />
                <Link to={(newState.state === null) ? ".." : `${oldPath}`} relative="path">{(!oldPath) ? "back to all vans" : `back to ${textPath == "host" && "dahsboard"}`}</Link>
            </div>

            <section className="myVanDetailS_section_cont">

                <div className="wrapper_pad">
                    <div className="header_forVan_details_user">
                        <div className="header_forVan_details_img">
                            <img src={vanData.imageUrl} alt={vanData.name} />
                        </div>
                        <div className="header_forVan_detail">
                            <div className={`header_forVan_type simple ${vanData.type}`}>{vanData.type}</div>
                            <div className="header_forVan_name">{vanData.name}</div>
                            <div className="header_forVan_price"><span>${vanData.price}</span> /day</div>
                            <div className="unrentIt" onClick={() => removeId(vanData.id)}>
                                <Link to={(newState.state === null) ? ".." : `${oldPath}`} relative="path">
                                    UnRent
                                </Link>
                            </div>
                        </div>
                    </div>

                    <nav className="myVans_details_easy_navigation">

                        <ul className="myVans_details_links_cont">

                            <li className="myVans_detail_link">
                                <NavLink end style={({isActive}) => isActive ? active : null} to=".">Details</NavLink>
                            </li>

                            <li className="myVans_detail_link">
                                <NavLink style={({isActive}) => isActive ? active : null} to="pricing">Pricing</NavLink>
                            </li>

                            <li className="myVans_detail_link">
                                <NavLink style={({isActive}) => isActive ? active : null} to="photos">Photos</NavLink>
                            </li>

                        </ul>

                    </nav>

                    <Outlet context={vanData} />
                </div>
                
            </section>
        </>
        
    )

}