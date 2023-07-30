

export default function formLoader( {request} ){
    return new URL(request.url).searchParams.get("message")
}