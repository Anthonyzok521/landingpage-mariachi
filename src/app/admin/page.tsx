import { Metadata } from 'next';
import { getAuthLogin } from '../api';
import { Login } from '~/components/common/Login';
import { IAuth } from '~/shared/types'
import { Admin } from '~/components/common/admin/Admin';

export const metadata: Metadata = {
    title: 'Admin',
};

export default async function Home() {

    const data = await getAuthLogin() as IAuth;

    return (
            !data.auth ?
            <Login /> :
            <Admin />
    )

}

