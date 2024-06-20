import { fetchCustomers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/create-form";

export default async function Page(){
    const customers = await fetchCustomers();
    return(
        <main>
            <Breadcrumbs
            breadcrumbs={[
                {label:'Invoices',href: '/dashboard/invoices'},
                {
                    label:'Create Invoices',href:'dashboard/invoice/create',
                    active:true
                }
            ]}
            >
            </Breadcrumbs>
            <Form customers={customers}></Form>
        </main>
    )
}