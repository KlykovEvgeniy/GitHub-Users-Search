import { useEffect, useState } from 'react';
import { RejectUser, User } from 'types/user';
import { getUserByName } from 'services/api';
import { SeacrhUser } from 'components/SearchUser/SearchUser';
import { About } from 'components/About/About';
import './Main.styled.scss';

export const Main = function () {
    const [user, setUser] = useState<string | null>('KlykovEvgeniy');
    const [userObj, setUserObj] = useState<User | RejectUser | null>(null)

    useEffect(() => {
        getUserByName(user!).then(data => setUserObj(data))
    }, [user])

    const userData = (username: string): void => {
        setUser(username)
    }

    const check = userObj instanceof Object && 'login' in userObj 

    return (
        <main className='main'>
            <SeacrhUser onClick={userData} />
            <div>
                {check && <About user={userObj}/>}
                {!check && <span className='lower-text'>No users</span>}
            </div>
        </main>
    )
}