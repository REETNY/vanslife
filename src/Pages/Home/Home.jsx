import { useEffect } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom"


export default function Home(){

    const { func } = useOutletContext();
    let genNum = Math.floor(Math.random() * 10);

    const delay = async(val) => {
        return new Promise((resolve) => setTimeout(resolve, val));
    }

    useEffect(() => {
        async function fry(){
            await delay(3000);
            func()
        }
        fry()
    }, [genNum]);

    let data = useLocation();

    return(
        <>
            {
                <section className="mainHome">
                    <div className="head_text_one">You got the travel plans, we got the travel vans</div>
                    <div className="group_text">
                        <div className="text_small_det1">Add adventure to your life by joining the #vanlife movement.</div>
                        <div className="text_small_det1">Rent the perfect van to make your perfect road trip.</div>
                    </div>
                    <Link className="honeBtn" to="/vans" >Find your van</Link>
                </section>
            }
        </>
    )
}