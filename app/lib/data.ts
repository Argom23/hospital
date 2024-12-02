
//TODO arreglar la db para poder pedir todo

export async function fetchDoctoresInfo() {
    const url='http://localhost:3010/api/doctores'
    const response = await fetch(url);
    if(!response.ok){
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
export async function fetchPacientes(){
    const url='http://localhost:3010/api/pacientes';
    const response = await fetch(url);
    if(!response.ok){
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
export async function fetchFacturas(){
    const url='http://localhost:3010/api/facturas';
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(response.statusText);
    }
    return response.json();
}
export async function fetchCirugia(){
    const url='http://localhost:3010/api/cirugias';
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
export async function fetchRecetas(){
    const url='http://localhost:3010/api/recetas';
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


