import styles from "./Sobre.module.css"
import imgStar from "../../assets/Captura de tela 2024-11-10 205607 1.webp"

export function Sobre(){
    return(
        <main id={styles.sobre_main}>
            <section id={styles.section_img}>
                <img src={imgStar} alt="Imagem da loja do Starbucks" />
            </section>
            <section id={styles.section_desc}>
                <h4>preparação</h4>
                <h1>Níveis de torra</h1>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
                <button id={styles.sobre_btn}>saiba mais</button>
            </section>
        </main>
    )
}