import { Pragati_Narrow } from "next/font/google";

export default async function Car({params} : {params : {id: string}}){
    const data = await getData()
    let i = 0;
    while (i<data.length && data[i].id !== params.id) {
        console.log(data[i].id !== params)
        ++i
    }
    let car ={}
    if(i<data.length){
        car= data[i]
    }
    else{
        return(<p>not found</p>)
    }
        return(<>
            <p>{car.id}</p>
            <p>{car.color}</p>
            <p>{car.price}</p></>)
    }

    //<h1>{params.car}</h1>

async function getData() {
    const res = await fetch('http://localhost:3000/fetch')
    
    if(!res.ok){
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
