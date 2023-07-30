import { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom"



export default function MyVanPhotos(){

    let vanData = useOutletContext();
    let [bool, setBool] = useState(false);
    let imgStatus = useRef(null);

    function openImage(url, bool){
        
        setBool((prev) => {
            imgStatus.current = url;
            return bool;
        });
    }

    return(
        <>
            <div className="hostVanId_photos_cont">

                <button className="imgClicker" onClick={() => openImage(vanData.imageUrl, true)}>
                    <div className="eachContainerImgId">
                        <img src={vanData.imageUrl} alt="" className="imageVanIdTabs" />
                    </div>
                </button>

                <button className="imgClicker" onClick={() => openImage(vanData.imageUrl, true)}>
                    <div className="eachContainerImgId">
                        <img src={vanData.imageUrl} alt="" className="imageVanIdTabs" />
                    </div>
                </button>

                <button className="imgClicker" onClick={() => openImage(vanData.imageUrl, true)}>
                    <div className="eachContainerImgId">
                        <img src={vanData.imageUrl} alt="" className="imageVanIdTabs" />
                    </div>
                </button>

                <button className="imgClicker" onClick={() => openImage(vanData.imageUrl, true)}>
                    <div className="eachContainerImgId">
                        <img src={vanData.imageUrl} alt="" className="imageVanIdTabs" />
                    </div>
                </button>

            </div>

            <div onClick={() => openImage(null, false)} className="fullImageContBack" style={bool ? {display: "flex"} : {display: "none"}}>

                <span className="closeBtn" onClick={() => openImage(null, false)}>X</span>

                <div>
                    <img src={imgStatus.current} alt="" />
                </div>
            </div>
        </>
    )
}