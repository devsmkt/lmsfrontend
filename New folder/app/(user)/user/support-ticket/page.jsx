import { getMetaTitle } from "@/lib/helpers";
import { Tickets } from "./_components/Tickets";

export const metadata = getMetaTitle('Support Tickets');
export const dynamic = 'force-dynamic';

export default function page() {
    return (
        <>
            <Tickets />
        </>
    )
}
