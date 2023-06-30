import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { FC } from "react";
import styles from "./header-help-links.module.css";
import { arr } from "./data";

const HeaderHelpLinks: FC = () => {
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
              className={classNames("link", styles.b2bContent)}
            >
              <li>Покупать как компания</li>
            </NavLink>
          </div>
          <div className={styles.containerForContacts}>
            {arr.map((item) => (
              <NavLink to={item.to} className={item.customClassNameForNavLink}>
                <li
                  className={
                    item.customClassNameForImg ? item.customClassNameForImg : ""
                  }
                >
                  {item.title}
                  {item.imgArrowSrc ? (
                    <img src={item.imgArrowSrc} alt="стрелка вниз" />
                  ) : (
                    ""
                  )}
                </li>
              </NavLink>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderHelpLinks;
