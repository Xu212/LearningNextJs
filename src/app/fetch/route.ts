import {cars} from "../../../public/cars.json";

export async function GET() {
    return Response.json(cars)
}
export async function POST(request: Request) {
    const car = await request.json();
    const newCar= {
        id: `lambo${cars.length + 1}`,
        color: car.color,
        price: car.price
    }
    cars.push(newCar)
    return new Response(JSON.stringify(newCar),{
        headers:{
            "Content-Type": "application/json"
        },
        status:201,
    })
}