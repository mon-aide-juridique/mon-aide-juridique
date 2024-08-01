"use client";

import classes from './SSO.module.css';
import { useSession, signIn, signOut } from "next-auth/react";

export default function SSO() {

    const { data: session } = useSession()

    // checking if sessions exists
    if (session) {
        //logged in code
        return (
            <div className={classes.maindivok}>
                <p>Welcome {session.user?.name}. Signed In As</p>
                <p>{session.user?.email}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
    }

    return (
        <div className={classes.maindivko}>
            <p>
                Not Signed In
            </p>
            <p>
                <button onClick={() => signIn('google')}>Sign in with Google</button>
            </p>
            <p>
                <button onClick={() => signIn('github')}>Sign in with GitHub</button>
            </p>
        </div>
    );
};