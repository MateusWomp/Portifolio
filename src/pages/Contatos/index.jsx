import styles from './Contatos.module.css'
import {GoMail} from 'react-icons/go'
import {BsGithub, BsLinkedin, BsWhatsapp} from 'react-icons/bs'

function Contatos(){
    return(
        <>
          <selection className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre.</p>
            
            <div className={styles.icones}>

                  <a href='mailto: oi17matus2gmail.com' target='_blank' rel='noopener noreferrer'>
                    <GoMail className={styles.icone}/>
                  </a>
                  <a href='https://github.com/MateusRoch' target='_blank' rel='noopener noreferrer'>
                    <BsGithub className={styles.icone}/>
                  </a>
                  <a href='https://www.linkedin.com/in/mateus-rocha-pimentel' target='_blank' rel='noopener noreferrer'>
                    <BsLinkedin className={styles.icone}/>
                  </a>
                  <a href='https://wa.me/5593991297109' target='_blank' rel='noopener noreferre'>
                    <BsWhatsapp className={styles.icone}/>
                  </a>
            </div>
          </selection>
        </>
    )
}
export default Contatos