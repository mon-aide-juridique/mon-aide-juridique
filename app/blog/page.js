import classes from './Blog.module.css';
import Link from "next/link";

export default function Blog() {
    return (
        <div className={classes.maindiv}>
            Blog
            <ul>
                <li><Link href='/blog/hello-world'>Hello world</Link></li>
                <li>...</li>
            </ul>
        </div>
    );
};