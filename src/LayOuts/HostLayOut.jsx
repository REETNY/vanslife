import { useEffect } from "react";
import HostHeader from "../Components/HostHeader";
import { Outlet, useOutletContext } from "react-router-dom";

export default function HostLayOut(){

    let { func, func2 } = useOutletContext();
    let numGen = Math.floor(Math.random() * 10);

    useEffect(() => {
        func()
    }, [numGen])


    return(
        <section className="Host_full_cont">
            <HostHeader func2={func2}/>
            <Outlet context={func}/>
        </section>
    )

}