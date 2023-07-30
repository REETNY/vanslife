

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function loginUser(creds) {

    await sleep(3000);

    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json();
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    return data;
}