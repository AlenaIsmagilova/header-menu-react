import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logo/logo";
import styles from "./header-menu.module.css";
import arrowDown from "../../app/assets/images/MediumArrowDown.svg";

const HeaderMenu = () => {
  const [isContainerHovered, setIsContainerHovered] = useState(false);

  const onMouseOverHandler = () => {
    if (!isContainerHovered) {
      setIsContainerHovered(true);
    }
  };

  return (
    <>
      <Logo />
      <div>
        <ul>
          <NavLink
            to="/products/cards"
            className={({ isActive, isPending }) =>
              isPending ? styles.pending : isActive ? styles.active : ""
            }
          >
            <li>Карточки</li>
          </NavLink>
          <NavLink
            to="/products/photobooks"
            className={({ isActive, isPending }) =>
              isPending ? styles.pending : isActive ? styles.active : ""
            }
          >
            <li>Фотокниги</li>
          </NavLink>
          <NavLink
            to="/products/certificate"
            className={({ isActive, isPending }) =>
              isPending ? styles.pending : isActive ? styles.active : ""
            }
          >
            <li>Сертификаты</li>
          </NavLink>
          <NavLink
            to="/products/gifts"
            className={({ isActive, isPending }) =>
              isPending ? styles.pending : isActive ? styles.active : ""
            }
          >
            <li>В подарок</li>
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive, isPending }) =>
              isPending ? styles.pending : isActive ? styles.active : ""
            }
          >
            <li
              className={styles.dropDownContainer}
              onMouseOver={onMouseOverHandler}
            >
              Ещё
              <img
                className={isContainerHovered ? styles.arrowDown : ""}
                src={arrowDown}
                alt="стрелка вниз"
              />
              <div className={styles.dropDownContent}>
                <NavLink
                  to="/products/tradition-book"
                  className={({ isActive, isPending }) =>
                    isPending ? styles.pending : isActive ? styles.active : ""
                  }
                >
                  <li>Книга традиций</li>
                </NavLink>
                <NavLink
                  to="/products/notebook"
                  className={({ isActive, isPending }) =>
                    isPending ? styles.pending : isActive ? styles.active : ""
                  }
                >
                  <li>Блокноты</li>
                </NavLink>
              </div>
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default HeaderMenu;
