import HostFetcher from "../Api/HostFetcher";
import utils from "../Api/Utils";

export default async function HostDetails_VansLoader({ request }){
    await utils(request)
    return HostFetcher()
}