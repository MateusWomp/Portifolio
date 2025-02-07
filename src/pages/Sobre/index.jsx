import styles from './Sobre.module.css'
import avatar from './Images/avatar.png'
import html from './Images/icon-html.svg'
import css from './Images/icon-css.svg'
import react from './Images/icon-react.svg'
import sql from './Images/icon-sql.svg'
import Python from './Images/Python.svg'
import Django from './Images/Django.svg'
import Flask from './Images/icon-flask.svg'


function Sobre(){
    return(
        <section className={styles.sobre}>
          <div className={styles.bio}>
              <img src={avatar} alt="Avatar" className={styles.avatar}/>
              <div className={styles.textos}>
                <h2>Sobre</h2>
                <p>Sou <span>Mateus Rocha Pimentel.</span><br/>
                <strong>Engenheiro de Software.</strong></p>
                <p>Estudante universitario e estagiando.</p>
                <p>Sou apaixonado por transformar ideias em realidade digital.</p>
                <p>Atualmente trabalhando na área de desenvolvimento web.</p><br/>
              </div>
          </div>
          <div className={styles.techs}>
              <h3>Techs</h3>
              <div className={styles.icones}>
                <img src={html} alt='Icone do HTML'/>
                <img src={css} alt='Icone do CSS'/>
                <img src={react} alt='Icone do REACT'/>
                <img src={sql} alt='Icone do SQL'/>
                <img src={Python} alt='Icone do PYTHON'/>
                <img src={Django} alt='Icone do DJANGO'/>
              <div className={styles.icones2}>
                <img src={Flask} alt='Icone do DJANGO'/>  
              </div>
              </div>
          </div>
        </section>
    )
}
export default Sobre