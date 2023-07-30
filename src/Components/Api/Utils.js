
import { redirect } from "react-router-dom";

export default async function utils(request){
    const isLoggedIn = localStorage.getItem("isLogged") || false;

    const pathName = new URL(request.url).pathname;

    if (!isLoggedIn) {

        const response = redirect(`/login?message=you have to login first!&redirectTo=${pathName}`)

        response.body = true

        throw response
    }
}

// For anyone that's stuck on the protected routes, the error that you're getting might be because of Mirage JS not being able to play well with react-router version 6.4.5. There's two options to fix this, either downgrade your version or try this hacky code that bob helped me with

// export async function requireAuth() {

//     const isLoggedIn = false



//     if (!isLoggedIn) {

//         const response = redirect("/login")

//         response.body = true

//         throw response

//     }

//     return null

// }