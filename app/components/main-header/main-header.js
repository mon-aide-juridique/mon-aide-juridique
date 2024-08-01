import Link from "next/link";
import Image from 'next/image';
import logoImage from '@/public/balances/balance_128_128.png';
import classes from './main-header.module.css';
import NavLink from "./nav-link";

export default function MainHeader() {

    return (
        <>
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImage} alt="Justice" priority />
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/blog">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/cu">
                                Conditions d'utilisation
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}