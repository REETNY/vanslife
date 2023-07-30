export default async function HostVanIdFetcher(id){
    let serverResp = await fetch(`/api/host/vans/${id}`);

    if(!serverResp.ok){
        throw{
            message: "unable to fetch van details",
            statusText: serverResp.statusText,
            status: serverResp.status
        }
    }
    let res = await serverResp.json();
    let data = res.vans;
    return data;
}