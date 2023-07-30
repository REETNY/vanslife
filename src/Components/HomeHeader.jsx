import { useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";


export default function HomeHeader({funcFF}){

    let locate = useLocation();

    const activeStyle = {
        borderBottom: "2px solid black"
    }

    let refHam = useRef(null);
    let refNav = useRef(null);
    let mobileLinks = useRef([]);

    const mobileLink = (el) => {
        if(el && !mobileLinks.current.includes(el)){
            mobileLinks.current.push(el)
        }
    }


    useEffect(() => {
        refHam.current.addEventListener("click", () => {
            if(refHam.current.classList.contains("open")){
                refHam.current.classList.remove("open");
                refNav.current.style.height = '0px';
                refNav.current.style.transition = 'height .6s linear';
            }else{
                refHam.current.classList.add("open");
                refNav.current.style.height = '210px';
                refNav.current.style.transition = 'height .6s linear';
            }
        })

        mobileLinks.current.map((el) => {
            el.addEventListener("click", (el) => {
                if(refHam.current.classList.contains("open")){
                    refHam.current.classList.remove("open");
                    refNav.current.style.height = '0px';
                    refNav.current.style.transition = 'height .6s linear';
                }
                
            })
        })

    }, [])

    return(
        <div className="mainHead">

            <header>
                <div className="MainLogo" ref={mobileLink} onClick={() => {funcFF(true) }} >
                    <Link to="/">#VanLife</Link>
                </div>

                <nav className="forLaptopView">
                    <ul className="linksCont">
                        <li className="link" onClick={() => funcFF(true)}>
                            <NavLink to="host" style={({isActive}) => isActive ? activeStyle : null} >Host</NavLink>
                        </li>
                        <li className="link" onClick={() => {funcFF(true) }}>
                            <NavLink to="about" style={({isActive}) => isActive ? activeStyle : null} >About</NavLink>
                        </li>
                        <li className="link" onClick={() => {funcFF(true) }}>
                            <NavLink to="vans" style={({isActive}) => isActive ? activeStyle : null} >Vans</NavLink>
                        </li>
                        <li className="link">
                            <NavLink to="login" style={({isActive}) => isActive ? activeStyle : null} ><FaUser /></NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="hamCont" ref={refHam}>
                    <div className="hamLine"></div>
                </div>

                <nav className="mobileOnly" ref={refNav}>
                    <ul className="linksCont">
                        <li className="link" ref={mobileLink} onClick={() => {funcFF(true) }}>
                            <NavLink to="host" style={({isActive}) => isActive ? activeStyle : null} >Host</NavLink>
                        </li>
                        <li className="link" ref={mobileLink}>
                            <NavLink to="about" style={({isActive}) => isActive ? activeStyle : null} >About</NavLink>
                        </li>
                        <li className="link" ref={mobileLink} onClick={() => {funcFF(true) }}>
                            <NavLink to="vans" style={({isActive}) => isActive ? activeStyle : null} >Vans</NavLink>
                        </li>
                        <li className="link" ref={mobileLink}>
                            <NavLink to="login" style={({isActive}) => isActive ? activeStyle : null} ><FaUser /></NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}