import styles from './Header.module.css'
import logoheader from '../../assets/logo 1.webp'
import { Link } from 'react-router-dom'

export function Header(){
    return(
        <header>
            <div id={styles.logo}>
            <Link to="/">
                <img src={logoheader} alt="Logo do Starbucks" />
            </Link>
            </div>
            <nav id={styles.header_nav}>
                <ul id={styles.menu}>
                    <li className={styles.menu_li}><Link to="/">Home</Link></li>
                    <li className={styles.menu_li}><Link to="novidades">Novidades</Link></li>
                    <li className={styles.menu_li}><Link to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
        </header>
    )
}