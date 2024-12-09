export default async function Page(props : {params: Promise<{id : number}>}){
    const params = await props.params;
    const id = params.id;

    return <h1>La hostia</h1>;
}