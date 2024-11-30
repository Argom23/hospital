
import DoctoresTable from "@/app/ui/doctores/table";
import {fetchDoctoresInfo} from "@/app/lib/data";
import {Suspense} from "react";


//TODO Doctores Skeleton,
export default async function Page() {
    const doctores=  await fetchDoctoresInfo();
    return (
        <main>
            {
                <Suspense>
                    <DoctoresTable doctores={doctores}></DoctoresTable>
                </Suspense>
            }

        </main>
);
}