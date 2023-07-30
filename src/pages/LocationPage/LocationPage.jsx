import styles from './styles.module.css';
import classnames from 'classnames';
import { DistanceMatrixService, useJsApiLoader } from '@react-google-maps/api';
import { Map } from '../../components/Map/Map';
// import { Autocomplete } from '../../components/Autocomplete/Autocomplete';
import imgMap from './img/mapImg.png';
import { Header } from '../../components/Header/Header';

export const LocationPage = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const center = {
    lat: 50.0775,
    lng: 14.453727,
  };

  const libraries = ['places'];

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
    libraries,
  });

  return (
    <section className={styles.root}>
      <Header />
      <h3>Our Location</h3>
      <div className={styles.map}>
        {isLoaded ? <Map center={center} /> : <h3>Loading...</h3>}
      </div>
      <div className={styles.wrapper}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <caption>Store Hours</caption>
            <tbody>
              <tr>
                <td>Tuesday - Friday: </td>
                <td>9:00 - 19:00</td>
              </tr>
              <tr>
                <td>Saturday: </td>
                <td>10:00 - 19:00</td>
              </tr>
              <tr>
                <td>Sunday: </td>
                <td>10:00 - 18:00</td>
              </tr>
              <tr>
                <td>Monday: </td>
                <td>closed</td>
              </tr>
            </tbody>
          </table>
          <p>Czech Republic,Vinohradská 86, 130 00 Vinohrady</p>
        </div>

        <div className={styles.imgWrapper}>
          <img className={styles.img} src={imgMap} alt={'Location foto'} />
        </div>
      </div>
      {/* < Autocomplete isLoaded={isLoaded} /> */}
    </section>
  );
};
