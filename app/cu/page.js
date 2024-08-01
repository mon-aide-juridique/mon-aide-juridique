import classes from './CU.module.css';
import Link from "next/link";

export default function CU() {
    return (
        <div className={classes.maindiv}>
            Conditions d&apos;Utilisation
            <ul>
                <li>
                    <Link href='/cu/politique-confidentialite'>
                        Politique de Confidentialité de mon-aide-juridique.fr
                    </Link>
                </li>
                <li>
                    <Link href='/cu/conditions-service'>
                        Conditions d&apos;utilisation de mon-aide-juridique.fr
                    </Link>
                </li>
            </ul>
        </div>
    );
};