
import styles from './App.module.css';
function App() {
  const nameNav = "<Henrique P Possebon/>"
  return (
   <>
   <section className={styles.container}>
      <div className={styles.header}>
        <nav>
          <p>
            {nameNav}
          </p>
          <a href="https://github.com/zilla3k" target='blank' rel='noopener noreferrer'>
            GitHub
          </a>
          <a href="https://linkedin.com/in/henrique-pelanda" target="_blank" 
          rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=henriquepelanda.web@gamail.com&su=Portfolio&body=(Sua%20mensagem)" target='_blank' rel="noreferrer">
            Contato
          </a>
        </nav>
      </div>

      <div className={styles.content}>
        <p>
          Prazer, me chamo Henrique e sou um Desenvolvedor Front End e um apaixonado por construir aplicações web de classe.
        </p>
        <p>
          Proficiente em uma variedade de tecnologias, incluindo React, JavaScript, TypeScript, HTML, CSS e NodeJS. Capaz de gerenciar efetivamente a si mesmo durante projetos independentes, bem como colaborar em um ambiente de equipe.
        </p>
        
      </div>
    </section>
   </>
  );
}

export default App;
