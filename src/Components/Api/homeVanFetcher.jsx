

export default async function homeVanFetcher(){

    let serverRep = await fetch(`/api/vans`)
    if(!serverRep.ok){
        throw{
            message: "failed to fetch vans",
            statusText: serverRep.statusText,
            status: serverRep.status
        }
    }
    let resp = await serverRep.json();
    let data = resp.vans;
    return data

}