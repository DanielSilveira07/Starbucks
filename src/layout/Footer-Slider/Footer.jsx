import styles from "./Footer.module.css"
import Claranja from "../../assets/laranja 3.webp"
import Cvermelho from "../../assets/vermelho 1.webp"
import Camarelo from "../../assets/amarelo 1.webp"
import CGlaranja from "../../assets/laranja2x 1.webp"
import CGvermelho from "../../assets/vermelho2x 1.webp"
import CGamarelo from "../../assets/amarelo2x 1.webp"

export function Footer(){
    return(
    <div id={styles.footer_slide}>
        <footer>
            <nav id={styles.footer_nav}>
                <ul id={styles.footer_menu}>
                    <li className={styles.footer_li}><img src={Claranja} alt="Foto do copo com café do Starbucks" /></li>
                    <li className={styles.footer_li}><img src={Cvermelho} alt="Foto do copo com café do Starbucks" /></li>
                    <li className={styles.footer_li}><img src={Camarelo} alt="Foto do copo com café do Starbucks" /></li>
                </ul>
            </nav>
        </footer>
        <section id={styles.footer_section}>
            <img src={CGlaranja} alt="" />
        </section>
        <div id={styles.background_img}></div>
    </div>
    )
}