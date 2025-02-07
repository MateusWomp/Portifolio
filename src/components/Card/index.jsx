import { SiFlask } from 'react-icons/si'
import styles from './Card.module.css'
import { FaCss3Alt, FaHtml5, FaPython } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { TbSql } from 'react-icons/tb'

function Card({name, description, html_url}){
    return(
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5/>
                    <FaCss3Alt/>
                    <FaPython/>
                    <SiFlask/>
                    <TbSql/>
                </div>
                <a href={html_url} target='_blank' rel="noopenner norefferer" className={styles.botao}>
                    <BsArrowRight/>
                </a>
            </div>
        </section>
    )
}
export default Card