import { FaStar, FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData, useLocation } from "react-router-dom";



export default function DashBoard(){

    let vans = useLoaderData();

    let {pathname} = useLocation()

    let mappedUserVans = vans.length > 0 ? vans.map((van) => {
        return(
            <div className="eachVanListed" key={van.id}>
                <div className="listedVanImgCont">
                    <img src={van.imageUrl} alt={van.name} className="listImg" />
                </div>
                <div className="listed_van_dets">
                    <div className="listed_van_name">{van.name}</div>
                    <div className="listing_price">${van.price}/day</div>
                </div>
                <div className="edit_listed_van">
                    <Link state={{oldPath: pathname, pathText: "host"}} to={`/host/vans/${van.id}`} ><FaArrowRight /></Link>
                </div>
            </div>
        )
    }) : ""
    

    return(
        <section className="host_van_userDashBoard">
            <div className="host_van_welcome_cont">
                <div className="user_dash_greet">Welcome!</div>
                <div className="user_activity_recent">
                    <span className="acticity_income">Income last <span className="user_underLine">30 days</span></span>
                    <span className="user_check_dets">
                        <Link to="/host/income">Details</Link>
                    </span>
                </div>
                <div className="user_curr_bal">$2,260</div>
            </div>
            <div className="user_quick_reviewScore">
                <div className="user_quick_review">Review score</div>
                <div className="rated_what">
                    <span className="starIcons"><FaStar /></span>
                    <span className="rating_forUser">5.0/<span className="lightText">5</span> </span>
                </div>
                <div className="checkDets_review">
                    <Link to="/host/reviews">Details</Link>
                </div>
            </div>

            <div className="user_owned_vans">

                <div className="userVan_head_cont">
                    <div className="yourVan_head">Your Listed Vans</div>
                    <div className="checkAllVans">
                        <Link to="/host/vans">View all</Link>
                    </div>
                </div>

                <div className="logged_user_vans">

                    {(!mappedUserVans) ? <h2>You have no vans currently</h2> : mappedUserVans}

                </div>

            </div>

        </section>
    )
}