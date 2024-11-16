import { Metadata } from 'next';
import { getAuthLogin } from '~/app/api';
import { AdminGallery } from '~/components/common/admin/AdminGallery';
import { Login } from '~/components/common/Login';
import { IAuth } from '~/shared/types'


export const metadata: Metadata = {
    title: 'Admin',
};

export default async function Home() {

    const data = await getAuthLogin() as IAuth;

    return (
            !data.auth ?
            <Login /> :
            <AdminGallery />
    )

}

