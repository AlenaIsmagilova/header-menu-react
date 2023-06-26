import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logo/logo";
import styles from "./header-menu.module.css";
import arrowDown from "../../app/assets/images/MediumArrowDown.svg";
import arrowRight from "../../app/assets/images/SmallArrowRight.svg";
import classNames from "classnames";

const HeaderMenu = () => {
  const [isContainerHovered, setIsContainerHovered] = useState(false);

  const styleForLink: any = ({ isActive, isPending }) =>
    isPending ? styles.pending : isActive ? styles.active : "";

  const onMouseOverHandler = () => {
    if (!isContainerHovered) {
      setIsContainerHovered(true);
    }
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <Logo />
        <ul
          className={classNames(
            "m-0",
            "p-0",
            "text",
            "text_size_medium",
            "list",
            styles.itemsList
          )}
        >
          <NavLink
            to="/products/cards"
            className={classNames(styleForLink, "link")}
          >
            <li className={styles.menuContent}>Карточки</li>
          </NavLink>
          <NavLink
            to="/products/photobooks"
            className={classNames(styleForLink, "link")}
          >
            <li className={styles.menuContent}>Фотокниги</li>
          </NavLink>
          <NavLink
            to="/products/certificate"
            className={classNames(styleForLink, "link")}
          >
            <li className={styles.menuContent}>Сертификаты</li>
          </NavLink>
          <NavLink
            to="/products/gifts"
            className={classNames(styleForLink, "link")}
          >
            <li className={styles.menuContent}>В подарок</li>
          </NavLink>
          <li
            className={styles.dropDownContainer}
            onMouseOver={onMouseOverHandler}
          >
            <div className={styles.dropDownContentTitle}>
              Ещё
              <img
                className={isContainerHovered ? styles.arrowDown : ""}
                src={arrowDown}
                alt="стрелка вниз"
              />
            </div>
            <div className={styles.dropDownContent}>
              <NavLink
                to="/products/tradition-book"
                className={classNames(styleForLink, "link")}
              >
                <li className={styles.content}>Книга традиций</li>
              </NavLink>
              <NavLink
                to="/products/notebook"
                className={classNames(styleForLink, "link")}
              >
                <li className={styles.dropDownContainerForNotebook}>
                  <div className={styles.contentWithArrow}>
                    Блокноты
                    <img
                      className={styles.arrowRight}
                      src={arrowRight}
                      alt="стрелка вправо"
                    />
                  </div>
                  <div className={styles.separator}></div>
                  <div className={styles.dropDownContentForNoteBook}>
                    <NavLink
                      to="/products/notebook/with-photo"
                      className={classNames(styleForLink, "link")}
                    >
                      <li className={styles.content}>Блокнот с фото</li>
                    </NavLink>
                    <NavLink
                      to="/products/notebook/ready-made"
                      className={classNames(styleForLink, "link")}
                    >
                      <li className={styles.content}>Готовые блокноты</li>
                    </NavLink>
                  </div>
                </li>
              </NavLink>
              <li className={styles.unactiveContent}>Кому</li>
              <NavLink
                to="/products/to-friends"
                className={classNames(styleForLink, "link")}
              >
                <li className={styles.content}>Друзьям</li>
              </NavLink>
              <NavLink
                to="/products/to-relatives"
                className={classNames(styleForLink, "link")}
              >
                <li className={styles.unactiveContent}>Близким</li>
              </NavLink>
              <NavLink
                to="/products/to-just-merried"
                className={classNames(styleForLink, "link")}
              >
                <li className={styles.content}>Молодожёнам</li>
              </NavLink>
              <div className={styles.separator}></div>
              <li className={styles.unactiveContent}>...</li>
              <NavLink
                to="/products/wedding"
                className={classNames(styleForLink, "link")}
              >
                <li className={styles.content}>Свадьба</li>
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderMenu;
