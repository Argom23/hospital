'use client';
import {
  UserGroupIcon,
  HomeIcon,
  AtSymbolIcon,
    CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard'},
  {name:'Doctores', href:'/dashboard/doctores'},
  {name:'Hospitales', href:'/dashboard/hospitales'},
  { name: 'Paciente', href: '/dashboard/pacientes' },
  {name: 'Facturas',href: '/dashboard/facturas' },
  {name: 'Recetas', href:'/dashboard/receta' },
  {name:'Cirugia', href:'/dashboard/cirugia' },
  {name:'Personal', href:'/dashboard/personal' },
  {name: 'Tratamiento', href:'/dashboard/tratamiento' },
  {name:'Cita', href:'/dashboard/cita' },
  {name:"Medicina", href:'/dashboard/medicina' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
            <Link
                key={link.name}
                href={link.href}
                className={clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-cyan-100 hover:text-green-500 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                      'bg-cyan-100 text-green-500': pathname === link.href,
                    },
                )}
            >

              <p className="hidden md:block">{link.name}</p>
            </Link>
        );
      })}
    </>
  );
}
