import { Link } from "react-router-dom";


export default function NotFound(){
    return(
        <div className="not_found_cont">
            <div className="not_found_msg">Page Not Found!</div>
            <div className="go_to_hone">
                <Link to="/" >Home</Link>
            </div>
        </div>
    )
}