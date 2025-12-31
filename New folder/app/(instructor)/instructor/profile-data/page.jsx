import { getMetaTitle } from "@/lib/helpers";
import ProfileForm from "./_components/ProfileForm";

export const dynamic = 'force-dynamic';
export const metadata = getMetaTitle('Profile Data');

export default function ProfileData() {
    return (
        <>

            <ProfileForm />

        </>
    )
}
