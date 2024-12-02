export default async function Page(props : {params: Promise<{id : number}>}){
    const params = await props.params;
    const id = params.id;
    return(<div>Detalles del hospital {id} </div>)
}