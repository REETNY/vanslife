import HostVanIdFetcher from "../Api/HostVanIdFetcher"
import utils from "../Api/Utils";

export default async function HostVanIdLoader({params, request}){
    await utils(request)
    return HostVanIdFetcher(params.id);
}