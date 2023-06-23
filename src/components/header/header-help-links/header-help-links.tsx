import * as classNames from "classnames";
import { NavLink } from "react-router-dom";
import styles from "./header-help-links.module.css";

const HeaderHelpLinks = () => {
  return (
    <nav>
      <ul>
        <NavLink
          to="/buy-to-company"
          className={({ isActive, isPending }) =>
            isPending ? styles.pending : isActive ? styles.active : ""
          }
        >
          <li>Покупать как компания</li>
        </NavLink>
        <NavLink
          to="/inspiration"
          className={({ isActive, isPending }) =>
            isPending ? styles.pending : isActive ? styles.active : ""
          }
        >
          <li>Вдохновиться</li>
        </NavLink>
        <NavLink
          to="/constructor"
          className={({ isActive, isPending }) =>
            isPending ? styles.pending : isActive ? styles.active : ""
          }
        >
          <li>Помочь собрать книгу</li>
        </NavLink>
        <NavLink
          to="/vacancy"
          className={({ isActive, isPending }) =>
            isPending ? styles.pending : isActive ? styles.active : ""
          }
        >
          <li>Работать у нас</li>
        </NavLink>
        <NavLink
          to="/faq"
          className={({ isActive, isPending }) =>
            isPending ? styles.pending : isActive ? styles.active : ""
          }
        >
          <li>Помощь</li>
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive, isPending }) =>
            isPending ? styles.pending : isActive ? styles.active : ""
          }
        >
          <li>Контакты</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default HeaderHelpLinks;
