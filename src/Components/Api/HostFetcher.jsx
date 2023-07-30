

export default async function HostFetcher(){
    let serverResp = await fetch(`/api/vans`);

    if(!serverResp.ok){
        throw{
            message: "Unable to fetch van details",
            statusText: serverResp.statusText,
            status: serverResp.status
        }
    }

    let resp = await serverResp.json();
    let data = resp.vans;

    let userVansId = localStorage.getItem("rentedVans");

    let mappedData = (userVansId) ? data.filter((van) => {
        return userVansId.includes(van.id) ? van : false
    }) : undefined;

    return mappedData;
}