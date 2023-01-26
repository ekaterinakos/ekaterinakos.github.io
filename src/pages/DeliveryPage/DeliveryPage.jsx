import styles from './styles.module.css';
import classnames from 'classnames';
import geisImg from "./img/geis.png" 
import pplImg from "./img/ppl.png"
import cpImg from "./img/ceskaposta.png"
import { ReactComponent as MilasCar} from './img/MilasCar.svg';

export const DeliveryPage = () => {
  return (
    <section className={styles.root}>
      <h3>Local Delivery</h3>
      <p className={styles.text}>
        Order your favorite Mila's Cake treats right to your door from our shop,
        or order ahead for contactless pick-up, with one of our exclusive
        delivery partners.
      </p>
      <MilasCar />
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
