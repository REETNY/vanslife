import { useOutletContext } from "react-router-dom"




export default function MyVanDetails(){

    let vanData = useOutletContext();

    return(
        <div className="hostedVanDetails">

            <div className="hostedVanName">
                <span className="headerDesc">Name:</span>
                <span className="mainName">{vanData.name}</span>
            </div>

            <div className="hostedVanCate">
                <span className="headerDesc">Category:</span>
                <span className="mainCate">{vanData.type}</span>
            </div>

            <div className="hostedVanDesc">
                <span className="headerDesc">Description:</span>
                <span className="mainDesc">{vanData.description}</span>
            </div>

            <div className="hostedVanVisible">
                <span className="headerDesc">Visibility:</span>
                <span className="mainVisible">Visible</span>
            </div>

        </div>
    )
}