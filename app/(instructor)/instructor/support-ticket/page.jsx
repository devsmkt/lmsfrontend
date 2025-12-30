import { getMetaTitle } from "@/lib/helpers";
import { Tickets } from "./_components/Tickets";

export const dynamic = 'force-dynamic';
export const metadata = getMetaTitle('Support Tickets');

export default function page() {
    return (
        <>
            <div className="dashboard-body">
                <div className="dashboard-body-wrapper">
                    <div className="container">
                     
                        <Tickets />
                    </div>
                </div>
            </div>
        </>

    )
}
