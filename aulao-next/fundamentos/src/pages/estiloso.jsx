import styles from '../styles/Estiloso.module.css'
import Layout from '@/components/Layout'

const Estiloso = () => {
    return (
        <Layout>
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}

export default Estiloso