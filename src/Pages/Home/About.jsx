

import { useEffect } from "react";
import aboutThumb from "../../assets/images/about-hero.png"
import { Link, useOutletContext } from "react-router-dom"

export default function About(){

    let {func} = useOutletContext();
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

    return(
        <section className="about_page">
            <div className="about_hero_cont">
                <img src={aboutThumb} alt="about hero" className="hero_ing_about" />
            </div>

            <div className="about_info_body">
                <div className="about_info_head">Don't squeeze in a sedan when you could relax in a van</div>

                <div className="info_mission">
                    <div className="mission1">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) </div>
                    <div className="mission2">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</div>
                </div>

                <div className="destination_awaiting">
                    <div className="choose_vans">
                        <span className="vansHeadChoose1">Your destination is waiting</span>
                        <span className="vansHeadChoose2">Your van is ready</span>
                    </div>
                    <Link className="aboutTOVans" to="/vans">Explore our vans</Link>
                </div>
            </div>
        </section>
    )
}