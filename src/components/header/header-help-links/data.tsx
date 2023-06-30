import styles from "./header-help-links.module.css";
import arrowDown from "../../app/assets/images/MediumArrowDown.svg";

export const arr = [
  {
    to: "/inspiration",
    title: "Вдохновиться",
    customClassNameForNavLink: ({ isActive }) =>
      isActive ? styles.inspirationContent : styles.contactsContent,
    imgArrowSrc: "",
    customClassNameForImg: "",
  },

  {
    to: "/constructor",
    title: "Помочь собрать книгу",
    customClassNameForNavLink: ({ isActive }) =>
      isActive ? styles.inspirationContent : styles.contactsContent,
    imgArrowSrc: "",
    customClassNameForImg: "",
  },
  {
    to: "/vacancy",
    title: "Работать у нас",
    customClassNameForNavLink: ({ isActive }) =>
      isActive ? styles.inspirationContent : styles.contactsContent,
    imgArrowSrc: "",
    customClassNameForImg: "",
  },
  {
    to: "/faq",
    title: "Помощь",
    customClassNameForNavLink: ({ isActive }) =>
      isActive ? styles.inspirationContent : styles.contactsContent,
    imgArrowSrc: arrowDown,
    customClassNameForImg: styles.contentWithArrow,
  },
  {
    to: "/contacts",
    title: "Контакты",
    customClassNameForNavLink: ({ isActive }) =>
      isActive ? styles.inspirationContent : styles.contactsContent,
    imgArrowSrc: "",
    customClassNameForImg: "",
  },
];
