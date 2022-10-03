import Head from "next/head";
import styles from "./styles.module.scss";

export default function SuccessPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seu ticket foi enviado com sucesso</title>
      </Head>

      <h1>Obrigado por entrar em contato conosco.</h1>
      <p>Em breve retornaremos. 😁</p>
    </div>
  );
}
