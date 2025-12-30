
import Dashboard from "./_components/Dashboard";
import { getMetaTitle } from "@/lib/helpers";

export const metadata = getMetaTitle('Dashboard');
export const dynamic = 'force-dynamic';

export default function DashboardPage() {
    return (
        <>
        <Dashboard />   
           
        </>
    )
}
