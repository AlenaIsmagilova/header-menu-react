import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../logo/logo";
import styles from "./header-menu.module.css";
import arrowDown from "../../app/assets/images/MediumArrowDown.svg";
import arrowRight from "../../app/assets/images/SmallArrowRight.svg";
import classNames from "classnames";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const HeaderMenu = () => {
  const [isContainerHovered, setIsContainerHovered] = useState(false);
  const [isDropDownMenuOpened, setIsDropDownMenuOpened] = useState(false);

  const onMouseOverHandler = () => {
    if (!isContainerHovered) {
      setIsContainerHovered(true);
      setIsDropDownMenuOpened(true);
    }
  };

  const onDropDownMenuClickHandler = () => {
    setIsDropDownMenuOpened(false);
    setIsContainerHovered(false);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <Logo />
        <Tabs defaultIndex={1}>
          <TabList
            className={classNames(
              "m-0",
              "p-0",
              "text",
              "text_size_medium",
              "list",
              styles.itemsList
            )}
          >
            <Tab
              className={styles.tab}
              selectedClassName={classNames(styles.selectedTab)}
            >
              <NavLink
                className={classNames("link", styles.menuContent)}
                to="/products/cards"
              >
                Карточки
              </NavLink>
            </Tab>
            <Tab
              className={styles.tab}
              selectedClassName={classNames(styles.selectedTab)}
            >
              <NavLink
                className={classNames("link", styles.menuContent)}
                to="/products/photobooks"
              >
                Фотокниги
              </NavLink>
            </Tab>
            <Tab
              className={styles.tab}
              selectedClassName={classNames(styles.selectedTab)}
            >
              <NavLink
                className={classNames("link", styles.menuContent)}
                to="/products/certificate"
              >
                Сертификаты
              </NavLink>
            </Tab>
            <Tab
              className={styles.tab}
              selectedClassName={classNames(styles.selectedTab)}
            >
              <NavLink
                className={classNames("link", styles.menuContent)}
                to="/products/gifts"
              >
                В подарок
              </NavLink>
            </Tab>
            <Tab className={styles.tab} selectedClassName={styles.selectedTab}>
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
                {isDropDownMenuOpened && (
                  <div className={styles.dropDownContent}>
                    <NavLink
                      to="/products/tradition-book"
                      className={classNames("link")}
                    >
                      <li
                        className={styles.content}
                        onClick={onDropDownMenuClickHandler}
                      >
                        Книга традиций
                      </li>
                    </NavLink>
                    <NavLink
                      to="/products/notebook"
                      className={classNames("link")}
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
                            className={classNames("link")}
                          >
                            <li
                              className={styles.content}
                              onClick={onDropDownMenuClickHandler}
                            >
                              Блокнот с фото
                            </li>
                          </NavLink>
                          <NavLink
                            to="/products/notebook/ready-made"
                            className={classNames("link")}
                          >
                            <li
                              className={styles.content}
                              onClick={onDropDownMenuClickHandler}
                            >
                              Готовые блокноты
                            </li>
                          </NavLink>
                        </div>
                      </li>
                    </NavLink>
                    <li className={styles.unactiveContent}>Кому</li>
                    <NavLink
                      to="/products/to-friends"
                      className={classNames("link")}
                    >
                      <li
                        className={styles.content}
                        onClick={onDropDownMenuClickHandler}
                      >
                        Друзьям
                      </li>
                    </NavLink>
                    <NavLink
                      to="/products/to-relatives"
                      className={classNames("link")}
                    >
                      <li className={styles.unactiveContent}>Близким</li>
                    </NavLink>
                    <NavLink
                      to="/products/to-just-merried"
                      className={classNames("link")}
                    >
                      <li
                        className={styles.content}
                        onClick={onDropDownMenuClickHandler}
                      >
                        Молодожёнам
                      </li>
                    </NavLink>
                    <div className={styles.separator}></div>
                    <li className={styles.unactiveContent}>...</li>
                    <NavLink
                      to="/products/wedding"
                      className={classNames("link")}
                    >
                      <li
                        className={styles.content}
                        onClick={onDropDownMenuClickHandler}
                      >
                        Свадьба
                      </li>
                    </NavLink>
                  </div>
                )}
              </li>
            </Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default HeaderMenu;
