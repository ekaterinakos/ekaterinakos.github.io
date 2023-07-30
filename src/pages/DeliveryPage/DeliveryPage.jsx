import styles from './styles.module.css';
import classnames from 'classnames';
import geisImg from "./img/geis.png" 
import pplImg from "./img/ppl.png"
import cpImg from "./img/ceskaposta.png"
import { ReactComponent as MilasCar} from './img/MilasCar.svg';
import { Header } from '../../components/Header/Header';

export const DeliveryPage = () => {
  return (
    <section className={styles.root}>
      <Header />
      <h3 className={styles.title}>Local Delivery</h3>
      <div className={styles.conteiner}>
      <p className={styles.text}>
        Order your favorite Mila's Cake treats right to your door from our shop,
        or order ahead for contactless pick-up, with one of our exclusive
        delivery partners.
      </p>
      <MilasCar />
      </div>
      <ul className={styles.list}>
        <li>
          <img src={geisImg} alt="geis logo" />
        </li>
        <li>
          <img src={pplImg} alt="ppl logo" />
        </li>
        <li>
          <img src={cpImg} alt="ceska posta logo" />
        </li>
      </ul>
    </section>
  ); 
};
