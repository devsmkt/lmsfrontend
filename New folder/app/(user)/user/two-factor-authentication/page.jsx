import { getMetaTitle } from "@/lib/helpers";
import TwoFaContent from './_components/TwoFaContent';

export const metadata = getMetaTitle('Two Factor Authentication');
export const dynamic = 'force-dynamic';
export default function page() {
    return (
        <>
           <div className="dashboard-main__wrapper">

            <div className="row justify-content-center">
                <TwoFaContent />
            </div>
           </div>
        </>
    )
}
