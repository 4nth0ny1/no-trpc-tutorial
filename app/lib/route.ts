// how to enfore typesafety in the api itself

import { apiRequestValidator } from "./validators/api-request"

export async function POST(req: Request) {
    const body = await req.json()
    // allowed to be destructured here, because of the typesafety
    try {
        const {name} = apiRequestValidator.parse(body)
    } catch (error) {
        return new Response("Unprocessable entity", {status: 422} )
    }


    return new Response("OK")
}

