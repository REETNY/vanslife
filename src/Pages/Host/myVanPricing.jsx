import { useOutletContext } from "react-router-dom"


export default function MyVanPricing(){

    let vanData = useOutletContext();

    return(
        <div className="myVan_pricing_prices">
            <ul className="van_price_cont">
                <li className="van_prices_works">${vanData.price}<span>/day</span> </li>
                <li className="van_prices_works">${vanData.price * 7 - (7 * 20)}<span>/week</span> </li>
                <li className="van_prices_works">${vanData.price * 30 - (30 * 25)}<span>/month</span> </li>
            </ul>
        </div>
    )
}