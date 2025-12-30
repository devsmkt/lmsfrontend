import { getMetaTitle } from "@/lib/helpers";
import RegistrationHandle from "./_components/RegistrationHandle";

export const dynamic = 'force-dynamic';
export const metadata = getMetaTitle('Register');

export default function Register() {
    return (
        <>

            <RegistrationHandle />

        </>
    )
}
