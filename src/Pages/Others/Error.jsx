import { Link, useRouteError, useSearchParams } from "react-router-dom";


export default function Error(){

    let errorTemp = useRouteError();
    let param = location.pathname;
    let [sp, setSP] = useSearchParams();

    return(
        <div className="errorElement">
            <div className="errMsg">{errorTemp.message}</div>
            <div className="errorCode">{errorTemp.status}</div>
            <div className="errorReason">{errorTemp.statusText}</div>
            <div className="refreshBtn">
                <Link to={param} >Refresh</Link>
            </div>
        </div>
    )

}