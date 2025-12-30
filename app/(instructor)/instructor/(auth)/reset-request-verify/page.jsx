import { getMetaTitle } from "@/lib/helpers";
import ResetRequestVerify from "./_components/ResetRequestVerify";

export const dynamic = 'force-dynamic';
export const metadata = getMetaTitle('Reset Request Verify');

export default function ResetRequestVerifyPage() {
    return (
        <>
            <div className="page-wrapper py-100">
                <ResetRequestVerify />
            </div>
        </>
    )
}
