import styles from './Novidades.module.css'
import imgCafe from '../../assets/Captura de tela 2024-11-10 205921 1.webp'

export function Novidades(){
    return(
    <>
        <main id={styles.nvd_main}>
            <section id={styles.section_desc}>
                <h4>preparação</h4>
                <h1>Níveis de torra</h1>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
                <button id={styles.nvd_btn}>saiba mais</button>
            </section>
            <section id={styles.section_img}>
                <img src={imgCafe} alt="Imagem de um grão de café" />
            </section>
        </main>
        <div id={styles.nvd_background}></div>
    </>
    )
}