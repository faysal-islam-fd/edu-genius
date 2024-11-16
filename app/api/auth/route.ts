import connectDB from "@/app/lib/connectDB";


export async function GET(request:Request) {
    return Response.json({message:"Hello World"})
}

export async function POST(request:Request) {
    await connectDB()
    const user = await request.json()
    console.log(user)
    return new Response(JSON.stringify(user),{
        headers:{
            "content-type":"application/json"
        },
        status: 201
    })
}