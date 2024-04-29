import { useRouter } from "next/router";

export default function Car({params} : {params : {car: string}}){

    
    return <>{<h1>{params.car}</h1>

    }</>
}

export async function getStaticProps({params} : {params : {id: string}}) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`)
    const data = await req.json();
    return{
        props:{
            car: data
        }
    }
} 

export async function getStaticPaths(){
    const req = await fetch('http://localhost:3000/cars.json');
    const data = await req.json();

    const paths = data.map((car: any)=>{
        return {param: {id: car}}
    })

    return {
        paths,
        fallback: false
    }
}