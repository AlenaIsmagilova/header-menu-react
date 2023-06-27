import classNames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./header-help-links.module.css";
import arrowDown from "../../app/assets/images/MediumArrowDown.svg";

const HeaderHelpLinks = () => {
  const styleForLink: any = ({ isActive, isPending }) =>
    isPending ? styles.pending : isActive ? styles.active : "";

  return (
    <nav className={styles.navigation}>
      <div className={styles.navWrapper}>
        <ul
          className={classNames(
            "m-0",
            "p-0",
            "text",
            "text_size_small ",
            "list",
            styles.mainContainer
          )}
        >
          <div>
            <NavLink
              to="/b2b"
              className={classNames(styleForLink, "link", styles.b2bContent)}
            >
              <li>Покупать как компания</li>
            </NavLink>
          </div>
          <div className={styles.containerForContacts}>
            <NavLink
              to="/inspiration"
              className={classNames(
                styleForLink,
                "link",
                styles.inspirationContent
              )}
            >
              <li>
                <button
                  className={classNames(
                    styles.inspirationContent,
                    "text",
                    "text_size_small "
                  )}
                >
                  Вдохновиться
                </button>
              </li>
            </NavLink>
            <NavLink
              to="/constructor"
              className={classNames(
                styleForLink,
                "link",
                styles.contactsContent
              )}
            >
              <li>Помочь собрать книгу</li>
            </NavLink>
            <NavLink
              to="/vacancy"
              className={classNames(
                styleForLink,
                "link",
                styles.contactsContent
              )}
            >
              <li>Работать у нас</li>
            </NavLink>
            <NavLink
              to="/faq"
              className={classNames(
                styleForLink,
                "link",
                styles.contactsContent
              )}
            >
              <li className={styles.contentWithArrow}>
                Помощь
                <img src={arrowDown} alt="стрелка вниз" />
              </li>
            </NavLink>
            <NavLink
              to="/contacts"
              className={classNames(
                styleForLink,
                "link",
                styles.contactsContent
              )}
            >
              <li>Контакты</li>
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderHelpLinks;
