"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Hello() {

    const { data: session } = useSession()

    // checking if sessions exists
    if (session) {
        //logged in code
        return (
            <div>
                <p>Welcome {session.user?.name}. Signed In As</p>
                <p>{session.user?.email}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        )
    }

    return (
        <div>
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