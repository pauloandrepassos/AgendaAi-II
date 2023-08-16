import LinkButton from "../layaut/LinkButton"
import styles from './Apresentacao.module.css'

function Apresentacao() {
    return (
        <section className={styles.apresentacao}>
            <h1>Agenda aí</h1>
            <h2>Não espere pelo lanche, faça ele esperar por você!</h2>
            <div className={styles.botoes}>
                <LinkButton text="Entrar"/>
            </div>
            <h3>Vantagens de usar o nosso software:</h3>
            <h4>- praticidade na hora de agendar a compra de seu lanche</h4>
            <h4>- menor tempo gasto no resgate do lanche na cantina</h4>
            <h4>- garantia de aquisição do seu lanche preferencial</h4>
            <h4>- facilita a compra do lanche de seus filhos na(s) escola(s)</h4>
            <div className={styles.botoes}>
                <LinkButton text="Cadastrar cantina" to="/FormCadastroCantina"/>
            </div>
        </section>
    )
}

export default Apresentacao