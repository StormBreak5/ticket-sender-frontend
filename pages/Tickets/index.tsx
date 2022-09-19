import Head from 'next/head';
import styles from './styles.module.scss';

export default function Tickets() {
    return (
        <>
            <Head>
                <title>Contato</title>
            </Head>

            <form action="send-ticket">
                <label htmlFor="name">Seu Nome</label>
                <input type="text" name='name' required/>
            </form>
        </>
    )
}