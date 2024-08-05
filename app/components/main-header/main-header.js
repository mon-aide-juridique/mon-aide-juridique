import Link from "next/link";
import Image from 'next/image';
import logoImage from '@/public/balances/balance_128_128.png';
import NavLink from "./nav-link";

export default function MainHeader() {

    return (
        <>
            <header>
                <Link href="/">
                    <Image src={logoImage} alt="Justice" priority />
                </Link>
                <nav>
                    <ul>
                        <li>
                            <NavLink href="/blog">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/cu">
                                Conditions d&apos;utilisation
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}