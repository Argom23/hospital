

//TODO arreglar la db para poder pedir todo

export async function fetchDoctoresInfo() {
    const url='http://localhost:3010/api/doctores'
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}
export  async function fetchDoctoresInfoById(id:number) {
    const url = `http://localhost:3010/api/doctores/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

export async function fetchHospitales(){
    const url='http://localhost:3010/api/hospitales';
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}
export  async function fetchHospitalesById(id:number) {
    const url = `http://localhost:3010/api/hospitales/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}


export async function fetchPacientes(search?:string ) {
    if (search == null){
        const url='http://localhost:3010/api/pacientes';
        const response = await fetch(url);
        const json = await response.json()
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return json;
    }else{

    }

}
export  async function fetchPacientesById(id:number) {
    const url = `http://localhost:3010/api/pacientes/${id}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

export async function fetchCitas(){
    const url='http://localhost:3010/api/citas';
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}
export async function fetchCitabyId(id:number){
    const url='http://localhost:3010/api/citas/'+id;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}
export async function fetchFacturas(){
    const url='http://localhost:3010/api/facturas';
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}
export async function fetchFacturaById(id:number){
    const url='http://localhost:3010/api/facturas/'+id;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}
export async function fetchCirugias(){
    const url='http://localhost:3010/api/cirugias';
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}
export async function fetchCirugiasById(id:number){
    const url='http://localhost:3010/api/cirugias/'+id;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}
export async function fetchPersonal(){
    const url='http://localhost:3010/api/personal';
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}
export async function fetchPersonalById(id:number){
    const url='http://localhost:3010/api/personal/${id}';
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}
export async function fetchRecetas(){
    const url='http://localhost:3010/api/recetas';
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}
export async function fetchRecetasById(id:number){
    const url=`http://localhost:3010/api/recetas/${id}`;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}

export async function fetchTratamiento(){
    const url='http://localhost:3010/api/tratamientos';
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}
export async function fetchTratamientosById(id:number){
    const url=`http://localhost:3010/api/tratamientos/${id}`;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}
export async function fetchMedicina(){
    const url=`http://localhost:3010/api/medicinas`;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();

}
export async function fetchMedicinaById(id:number){
    const url=`http://localhost:3010/api/medicinas/${id}`;
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();

}
