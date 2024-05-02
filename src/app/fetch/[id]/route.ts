import {cars} from "../../../../public/cars.json";

export async function GET(
    _request: Request,
    { params }: {params : {id:string}}
) {
    const car = cars.find((car) => car.id === params.id);
    return Response.json(car)
}

export async function PATCH(
    request: Request,
    {params}: {params: {id:string}}
) {
    const body = await request.json()
    const color = body.color
    const price = body.price
    const index = cars.findIndex(
        car => car.id === params.id
    )
    cars[index].color = color
    cars[index].price = price
    return Response.json(cars[index]);
}
export async function DELETE(
    request: Request,
    {params}: {params: {id:string}}
) {
    const index = cars.findIndex(
        car => car.id === params.id
    )

    const deletedCar = cars[index]
    cars.splice(index,1)
    return Response.json(deletedCar);
}