import ChangePasswordForm from "./_components/ChangePasswordForm";
import { getMetaTitle } from "@/lib/helpers";

export const metadata = getMetaTitle('Change Password');
export const dynamic = 'force-dynamic';

export default function ChangePassword() {

    return (
        <>
            <div className="row justify-content-center">
                <ChangePasswordForm />
            </div>
        </>
    )
}
