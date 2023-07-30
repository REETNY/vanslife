import { useEffect } from "react";
import { Link, useLoaderData, useSearchParams, useOutletContext } from "react-router-dom";


export default function Vans(){
    let vanDatas = useLoaderData();
    let [currFilter, setFilter] = useSearchParams();
    const { func } = useOutletContext();
    const genNum = Math.floor(Math.random() * 10)

    let filterType = currFilter.get("type");

    function addFilter(key, value){
        const sp = new URLSearchParams(currFilter);
        if(!value || value === null || value === ""){
            sp.delete(key)
        }else{
            sp.set(key,value)
        }
        return `?${sp.toString()}`;
    }

    let toBeMapped = filterType ?  vanDatas.filter((van) => van.type === filterType ? van : false) : vanDatas;

    let mappedVans = toBeMapped.map((van) => {
        return (
            <div className="each_Van_Det" key={van.id} >
                <Link to={van.id} state={{userSearch: currFilter.toString(), type : filterType }}>
                    <div className="van_det_cont">
                        <img src={van.imageUrl} alt={van.name} className="van_det_img" />
                    </div>
                    <div className="van_det_info">
                        <div className="van_det_name">{van.name}</div>
                        <div className="van_det_pricing">
                            <span className="van_price_curr">${van.price}</span>
                            <span className="van_det_duration">/day</span>
                        </div>
                    </div>
                    <div className="van_det_type">
                        <div className={`rounded_pill_type ${van.type}`}>{van.type}</div>
                    </div>
                </Link>
            </div>
        )
    })

    const delay = async(val) => {
        return new Promise((resolve) => setTimeout(resolve, val));
    }

    useEffect(() => {

        async function fry(){
            await delay(3000);
            func()
        }
        
        fetch("/api/vans")
            .then((data) => console.log("data"))
            .finally(() => {
                fry();
            })
    }, [genNum, vanDatas, currFilter]);

    return(
        <>
            {mappedVans && 
                <section className="vansPage">
                <div className="vanPage_header">Explore our van options</div>
                <div className="van_filter_options">
                    <Link className="filterBtns rugged" to={addFilter("type","rugged")}>Rugged</Link>
                    <Link className="filterBtns luxury" to={addFilter("type","luxury")}>Luxury</Link>
                    <Link className="filterBtns simple" to={addFilter("type","simple")}>Simple</Link>
                    {filterType !== null && <Link className="clearFilter" to={() => addFilter("type","")}>Clear filters</Link>}
                </div>
                <div className="all_rendered_vans">
                    {mappedVans}
                </div>
                </section> 
            }
        </>
    )
}