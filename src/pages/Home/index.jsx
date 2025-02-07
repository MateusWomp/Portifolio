import { Link } from 'react-router-dom'
import styles from './home.module.css'

function Home(){
    return(
        <section className={styles.home}>
                <div className = {styles.apresentação}>
                    <p>
                        Olá, sou <br/>     
                        <span>Mateus Rocha Pimentel</span> <br/>
                        Desenvolvedor
                    </p>
                    <Link to="/sobre" className= {`${styles.btn} ${styles.btn_red}`}>
                        Saiba mais sobre mim
                    </Link>
                </div>
                <figure>
                    <img className={styles.img_home} src="/developer-ciano.svg" alt="Imagem de Home"/>
                </figure>
        </section>
    )
}
export default Home