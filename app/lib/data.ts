
import { z } from "zod";
//TODO arreglar la db para poder pedir todo

export async function fetchDoctoresInfo() {
    const url='http://localhost:3010/api/doctores'
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
}
export async function fetchHospitales(){

  const url='http://localhost:3010/api/hospitales';
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error(response.statusText);
  }
  const hospitales = await response.json();
  const id = hospitales[0].IdHospital;
  return hospitales;
}

