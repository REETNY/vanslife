

function delay(val){
    return new Promise((resolve) => setTimeout(resolve, val));
}

export default async function HomeDetailsFetcher(id){

    await delay(3000)

    let serverResp = await fetch(`/api/vans/${id}`);
    if(!serverResp.ok){
        throw{
            message: "failed to fetch van details",
            statusText: serverResp.statusText,
            status: serverResp.status
        }
    }
    let resp = await serverResp.json();
    let data = resp.vans;
    return data;
}