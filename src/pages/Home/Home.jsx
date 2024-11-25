import styles from "./Home.module.css"
import { Footer } from '../../layout/Footer-Slider/Footer';

export function Home(){
    return(
      <>
        <main id={styles.home_main}>
          <header id={styles.main_header}>
            <h1>Mais que Café</h1>
            <h2>Isso é <p>Starbucks</p></h2>
          </header>
          <section id={styles.description}>
            <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
          </section>
          <button id={styles.main_button}>saiba mais</button>
        </main>
      <Footer />
      </>
    )
}