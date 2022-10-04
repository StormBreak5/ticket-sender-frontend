import Head from "next/head";
import styles from "./styles.module.scss";
import { serverURL } from "../services/api";
import axios from "axios";
import { useRouter } from "next/router";

export default function Tickets() {
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let data = {
      name: event.target.name.value,
      email: event.target.email.value,
      reason: event.target.reason.value,
      description: event.target.description.value,
    };

    axios
      .post(`${serverURL}/api/tickets`, data )
      .then((res) => {
        console.log(res);
        console.log(res.data);

        router.push('/Success');
      })
      .catch((error) => {
        console.error(error.response.data);
      }); 
  };

  return (
    <>
      <Head>
        <title>Contato</title>
      </Head>

      <h1 className={styles.title}>Fale conosco</h1>

      <div className={styles.container} id='form'>
        <form onSubmit={handleSubmit}>
          <div className={styles.formHead}>
            <div className={styles.nameContainer}>
              <label htmlFor="name">Seu Nome</label>
              <input type="text" id="name" name="name" placeholder="Digite o seu nome" required />
            </div>
            <div className={styles.emailContainer}>
              <label htmlFor="email">Seu endereço de e-mail</label>
              <input type="text" id="email" name="email" placeholder="Digite um e-mail para contato" required />
            </div>
          </div>
          <div className={styles.reasonContainer}>
            <label htmlFor="reason">Motivo do contato</label>
            <input type="text" name="reason" id="reason" placeholder="Nos informe o motivo do contato" required />
          </div>
          <div className={styles.descriptionContainer}>
            <label htmlFor="description">Descreva sua situação</label>
            <textarea
              name="description"
              id="description"
              placeholder="Descreva seu problema"
              cols={50}
              rows={5}
            ></textarea>
          </div>
          <input className={styles.submit} type="submit" />
        </form>
      </div>
    </>
  );
}
