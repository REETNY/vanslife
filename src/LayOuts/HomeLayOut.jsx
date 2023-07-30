import { Outlet } from "react-router-dom"
import HomeHeader from "../Components/HomeHeader";
import HomeFooter from "../Components/HomeFooter";
import { useState, useEffect } from "react";


export default function HomeLayOut(){

    const [ALS, setALS] = useState(true);

    function changeALS(){
        setALS(false);
    }

    function falsy(bool){
        setALS(bool)
    }

    useEffect(() => {
        const htmlEl = document.getElementsByTagName("html")[0];
        if(ALS){
            htmlEl.style.overflowY = "hidden";
        }else{
            htmlEl.style.overflowY = "auto";
        }
    }, [ALS])

    console.log(ALS)

    return(
    
        <section id="MainApp" style={ALS ? {overflowY: "hidden"} : {overflowY: "auto"}} >
            <HomeHeader funcFF={falsy} />
            <Outlet context={{func: changeALS, func2: falsy}} />
            <div className="loaderCont" style={ALS ? {display: "flex"} : {display: "none"}}>
                <div className="honeycomb">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <HomeFooter />
            </section>

    )
}