import { Contacts } from "../Contacts/Contacts";
import { ReactComponent as Logo } from './img/logo.svg';
import { SocialIcons } from '../SocialIcons/SocialIcons';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { Button } from "../Button/Button";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContextProvider/ThemeContext";
import { ContactForm } from '../ContactForm/ContactForm';

export const Footer = () => {
const {theme} = useContext(ThemeContext)

    return (
      <footer
        className={classnames(
          styles.root,
          theme === 'default' ? styles.dark : 'default'
        )}
      >
        <div className={styles.conteiner}>
          <section>
            <Contacts className={classnames(styles.contacts)} />
          </section>
          <section className={styles.inputSubscribe}>
            <p>
              Sign up for our mailing list <br /> to receive news, special
              offers and more
            </p>
            <form className={styles.form}>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="Your email"
              />
              <Button className={styles.buttonSubscribe}>{'send >'}</Button>
            </form>
          </section>

          <div>
            <SocialIcons className={styles.socialIcons} />
            <ContactForm className={styles.contactForm} />
          </div>
          <section className={styles.copyright}>
            <div>
              <div className={styles.logo}>
                <Link className={styles.linkLogo} to="/">
                  <Logo />
                </Link>
              </div>
              «Mila`s Cake» 2023
              <small>&#169;</small>
              copyright
            </div>
          </section>
        </div>
      </footer>
    );
}