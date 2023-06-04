import Link from "next/link"
import styles from '../styles/Navegador.module.css'

export default function Navegador(props) {
    return (
        <Link
            href={props.direction}
        >
            <div className={styles.navegador} style={{
                backgroundColor: props.color ?? 'dodgerblue'
            }}>
                {props.text}
            </div>
        </Link>
    )
}