import { useEffect } from "react";
import { Link, useLoaderData, useOutletContext } from "react-router-dom";

export default function MyVans(){
    let genNum = Math.floor(Math.random() * 10);
    let func = useOutletContext();

    useEffect(() => {
        func()
    }, [genNum])

    let userVan = useLoaderData();

    let mappedUserVan = userVan.length > 0 ? userVan.map((van) => {
        return(
            <div className="each_vans_user_own" key={van.id}>
                <Link to={van.id}>
                    <div className="each_van_img_cont">
                        <img src={van.imageUrl} alt={van.name} />
                    </div>
                    <div className="user_each_van_details">
                        <div className="user_van_myVanName">{van.name}</div>
                        <div className="user_van_myVanPrice">${van.price}/day</div>
                    </div>
                </Link>
             </div>
        )
    }): "You currently have no vans";

    return(
        <section className="user_myVans_section">
            <div className="user_myVans_head">Your Listed Vans</div>

            <div className="user_current_vans_cont">
                {mappedUserVan == "You currently have no vans" ? <h2>{mappedUserVan}</h2> : mappedUserVan }
            </div>

        </section>
    )
}