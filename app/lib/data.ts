
import { z } from "zod";
import axios from "axios";
//TODO arreglar la db para poder pedir todo

export async function fetchDoctoresInfo() {
    const url='http://localhost:3010/api/doctores'
    const response = await axios.get(url);
    return response.data;
}
export async function fetchHospitales(){

  const url='http://localhost:3010/api/hospital';
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error(response.statusText);
  }
  const hospitales = await response.json();
  return hospitales;
}

