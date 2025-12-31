import { getMetaTitle } from "@/lib/helpers";
import History from "./_components/History";

export const metadata = getMetaTitle('Deposit History');
export const dynamic = 'force-dynamic';

export default function page() {
    return (
        <>
            <div className="row justify-content-center mt-2">
                <History />
            </div>
        </>
    )
}
