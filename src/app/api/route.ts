import ogs from "open-graph-scraper"

export async function POST(request: Request) {
    const requestBody = await request.json()
    const url = requestBody.url
    try {
        const {result} = await ogs({url: url})
        return Response.json({success: true, result: result})
    } catch (e) {
        console.error(`invalid url ${e}`)
        return Response.json({success: false, result: {}})
    }

}