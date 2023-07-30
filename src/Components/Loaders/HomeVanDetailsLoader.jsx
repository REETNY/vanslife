import HomeDetailsFetcher from "../../Components/Api/HomeDetailsFetcher";

export default function VanDetailsLoader({params}){
    return HomeDetailsFetcher(params.id)
}