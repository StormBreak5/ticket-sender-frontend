import Link from 'next/link';
import styles from './styles.module.scss';

export default function Header() {
    return (
        <header className={styles.container}>
            <nav className={styles.navbar}>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/Tickets'>
                    <a>Faça seu ticket</a>    
                </Link>   
            </nav>
        </header>
    )
}