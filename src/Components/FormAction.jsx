import { redirect } from "react-router-dom";
import loginUser from "./Api/LoginUser";

export default async function formAction({ request }){
    let formDatas = await request.formData();
    let email = formDatas.get("email");
    let password = formDatas.get("password");
    
    let pathName = new URL(request.url).searchParams.get("redirectTo") || "/host";

    console.log(pathName)

    try{
        let data = await loginUser({email, password})
        localStorage.setItem("isLogged", true);
        let success = redirect(`${pathName}`);
        success.body = true;
        return success;

    }catch(err){
        return err.message
    }
}


// export default async function formAction ({ request }){
//     let formInfos = await request.formData();
//     let email = formInfos.get("email");
//     let password = formInfos.get("password");

//     try{
//         let data = await loginUser({email, password});
//         localStorage.setItem("isLogged", true)
        
//         let navigateTo = redirect("/host");
//         navigateTo.body = true
//         throw navigateTo
//     }catch(err){
//         return err.message
//     }
// }