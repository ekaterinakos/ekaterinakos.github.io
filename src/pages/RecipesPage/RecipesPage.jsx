import styles from './styles.module.css';
import classnames from 'classnames';
import cookiesImg from './img/ChocolateChipCookies.jpg';
import cookiesImgZoomIn from './img/ChocolateChipCookiesZoomIn.jpg';
import ChocolateChipCookiesOrange from './img/ChocolateChipCookiesOrange.jpg';
import { Header } from '../../components/Header/Header';


export const RecipesPage = () => {
  return (
    <section className={styles.root}>
      <Header/>
      <h2>The best recipes every week </h2>
      <h3>Chocolate Chip Cookies</h3>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          alt="Chocolate Chip Cookies"
          src={cookiesImg}
        />
        <img
          className={styles.img}
          alt="Chocolate Chip Cookies"
          src={cookiesImgZoomIn}
        />
        <img
          className={styles.img}
          alt="Chocolate Chip Cookies"
          src={ChocolateChipCookiesOrange}
        />
      </div>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <caption>Ingredients </caption>
          <tbody>
            <tr>
              <td>2 1/4 </td>
              <td>cups Gold Medal™ all-purpose flour</td>
            </tr>
            <tr>
              <td> 1 </td>
              <td>teaspoon baking soda </td>
            </tr>
            <tr>
              <td> 1/2 </td>
              <td>teaspoon salt </td>
            </tr>
            <tr>
              <td>1 </td>
              <td>cup butter, softened</td>
            </tr>
            <tr>
              <td>3/4</td>
              <td> cup granulated sugar</td>
            </tr>
            <tr>
              <td>3/4</td>
              <td>cup packed brown sugar</td>
            </tr>
            <tr>
              <td>1 </td>
              <td>egg</td>
            </tr>
            <tr>
              <td>1</td>
              <td>teaspoon vanilla </td>
            </tr>
            <tr>
              <td>2</td>
              <td>cups semisweet chocolate chips</td>
            </tr>
            <tr>
              <td>1</td>
              <td> cup coarsely chopped nuts, if desired</td>
            </tr>
          </tbody>
        </table>
        <table className={classnames(styles.table, styles.tableTips)}>
          <caption>Tips</caption>
          <tbody>
            <tr>
              <td>tip 1</td>
              <td>
                For best results, bake cookies on middle oven rack. For even
                baking, it’s best to bake one sheet at a time.
              </td>
            </tr>
            <tr>
              <td>tip 2</td>
              <td>
                Use a 1-inch meat baller (or a cookie/ice cream scoop) to make
                consistently even-shaped cookies.
              </td>
            </tr>
            <tr>
              <td>tip 3</td>
              <td>
                Line flat cookie sheets with parchment for easy cleanup. Be sure
                to give the dropped dough plenty of air space, so the cookies
                won’t bump into each other as they spread.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ol className={styles.list}>
        <h3>Steps</h3>
        <li>
          Heat oven to 375°F. In small bowl, mix flour, baking soda and salt;
          set aside.
        </li>
        <li>
          In large bowl, beat softened butter and sugars with electric mixer on
          medium speed, or mix with spoon about 1 minute or until fluffy,
          scraping side of bowl occasionally.
        </li>
        <li>
          Beat in egg and vanilla until smooth. Stir in flour mixture just until
          blended (dough will be stiff). Stir in chocolate chips and nuts.
        </li>
        <li>
          Onto ungreased cookie sheets, drop dough by rounded tablespoonfuls 2
          inches apart.
        </li>
        <li>
          Bake 8 to 10 minutes or until light brown (centers will be soft). Cool
          2 minutes; remove from cookie sheet to cooling rack. Cool completely,
          about 30 minutes. Store covered in airtight container.
        </li>
      </ol>
    </section>
  );
};
