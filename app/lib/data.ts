
import {FormattedDoctoresTable, FormattedHospitalesTable} from './definitions';
//TODO arreglar la db para poder pedir todo
export async function fetchDoctoresInfo() {

  const url = 'http://localhost:3010/api/doctores';
  const data = await fetch(url);

  // var doctores: FormattedDoctoresTable[] = [];
  // var doctor: FormattedDoctoresTable = {
  //   id: 1,
  //   idEspecializacion:1,
  //   nombre:"caesar",
  //   idDepartamento:1,
  //   idHospital:1
  // }
  // doctores.push(doctor);
  // var doctor: FormattedDoctoresTable = {
  //   id: 2,
  //   idEspecializacion:12,
  //   nombre:"Javier",
  //   idDepartamento:12,
  //   idHospital:13
  // }
  // doctores.push(doctor);
  return doctores;
}
export async function fetchHospitales(){
  const url='http://localhost:3010/api/hospitales';
  var hospitales: FormattedHospitalesTable[] = [];
  return hospitales;
}

