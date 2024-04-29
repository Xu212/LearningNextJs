import { useRouter } from "next/router"

export default function Car({params} : {params : {id: string}}){

    /*const router = useRouter()
    const {id} = router.query*/
    
    return <>{<h1>{params.id}</h1>

    }</>
}