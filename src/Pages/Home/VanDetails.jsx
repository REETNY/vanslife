import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

export default function VanDetails(){

    let [rentedVan, setRentedVan] = useState(JSON.parse(localStorage.getItem("rentedVans")) || [])

    let navigate = useNavigate()

    let isFiltered = useLocation()

    function rentVan(id) {
        let isLogged = localStorage.getItem("isLogged") || false;
        if(!isLogged){
            navigate(`/login?message=you must login in first!&redirectTo=${isFiltered.pathname}`)
        }else{
            if(!rentedVan.includes(id)){
                setRentedVan((val) => {
                    return [...val, id]
                })
            }else{
                setRentedVan((val) => {
                    let arr = val;
                    let arr2 = arr.filter((item) => item != id ? item : false);
                    return(arr2)
                })
            }
        }
    }
    
    localStorage.setItem("rentedVans", JSON.stringify(rentedVan))

    console.log(rentedVan)

    let vanData = useLoaderData()

    let urlStr = isFiltered.state.userSearch ? `?${isFiltered.state.userSearch}` : "";

    let currType = isFiltered.state.type ? isFiltered.state.type : "all"

    return(
        <section className="rentable_van_details">
            <div className="BackLink"><span><FaArrowLeft /></span><Link relative="path" to={`../${urlStr}`}>Back to {currType} vans</Link></div>
            <div className="rent_van_detail">
                <div className="rent_vanImg_cont">
                    <img src={vanData.imageUrl} alt={vanData.name} className="vanImg_rentable" />
                </div>
                <div className="rent_van_type"><span className={`van_type_rentable ${vanData.type}`}>{vanData.type}</span></div>
                <div className="rent_van_head">{vanData.name}</div>
                <div className="rent_van_price">${vanData.price} <span className="rentable_duration_van">/day</span> </div>
                <div className="rent_van_description">
                    {vanData.description}
                </div>
                <div className="button_rent_van_now">
                    <button className="rent_the_van" onClick={()=> rentVan(vanData.id)}>{rentedVan.includes(vanData.id) ? "Unrent this van" : "Rent this van"}</button>
                </div>
            </div>
        </section>
    )
}