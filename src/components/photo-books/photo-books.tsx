import styles from "./photo-books.module.css";
import photoBook from "../app/assets/images/PhotoBook.svg";
import classNames from "classnames";
import newImage from "../app/assets/images/Marker.svg";

const PhotoBooks = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.infoWrapper}>
        <div className={styles.products}>
          <p
            className={classNames(
              "text",
              "text_size_small",
              "m-0",
              styles.columnTitle
            )}
          >
            Товары
          </p>
          <div className={styles.boxWithImage}>
            <p
              className={classNames(
                "text",
                "text_size_medium",
                "m-0",
                styles.productTitle
              )}
            >
              Минибук, 24 стр.
            </p>
            <img className={styles.newImage} src={newImage} alt="новая книга" />
          </div>
          <div className={styles.bookWrapper}>
            <p
              className={classNames(
                "text",
                "text_size_medium",
                "m-0",
                styles.productTitle
              )}
            >
              Фотокнига в твёрдой фотообложке
            </p>
            <p
              className={classNames(
                "text",
                "text_size_small",
                "m-0",
                styles.pagesInBook
              )}
            >
              40; 80 стр.
            </p>
          </div>
          <div className={styles.bookWrapper}>
            <p
              className={classNames(
                "text",
                "text_size_medium",
                "m-0",
                styles.productTitle
              )}
            >
              Большая фотокнига
            </p>
            <p
              className={classNames(
                "text",
                "text_size_small",
                "m-0",
                styles.pagesInBook
              )}
            >
              100; 160 стр.
            </p>
          </div>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.productTitle
            )}
          >
            Красная тканевая книга с сердцем, 40 стр.
          </p>
          <a
            href="/products/all"
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.link
            )}
          >
            Все товары
          </a>
          <p
            className={classNames(
              "text",
              "text_size_small",
              "m-0",
              styles.columnTitle
            )}
          >
            Тематики
          </p>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.productTitle
            )}
          >
            Свадебные книги
          </p>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.productTitle
            )}
          >
            Детские книги
          </p>
        </div>
        <div className={styles.costs}>
          <p
            className={classNames(
              "text",
              "text_size_small",
              "m-0",
              styles.columnTitle
            )}
          >
            Стоимость
          </p>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.costContent
            )}
          >
            до 1,000 ₽
          </p>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.costContent
            )}
          >
            от 1,000 до 3,000 ₽
          </p>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.costContent
            )}
          >
            от 3,000 до 5,000 ₽
          </p>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.costContent
            )}
          >
            от 5,000 ₽
          </p>
          <a
            href="/products/all"
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.link
            )}
          >
            Все
          </a>
          <p
            className={classNames(
              "text",
              "text_size_small",
              "m-0",
              styles.coverTitle
            )}
          >
            Тип обложки
          </p>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.costContent
            )}
          >
            Твёрдая
          </p>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.costContent
            )}
          >
            Тканевая
          </p>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.costContent
            )}
          >
            Мягкая
          </p>
          <a
            href="/products/all"
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.link
            )}
          >
            Все
          </a>
        </div>
        <div className={styles.pages}>
          <p
            className={classNames(
              "text",
              "text_size_small",
              "m-0",
              styles.columnTitle
            )}
          >
            Страницы, шт.
          </p>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.costContent
            )}
          >
            24
          </p>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.costContent
            )}
          >
            40
          </p>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.costContent
            )}
          >
            80
          </p>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.costContent
            )}
          >
            100
          </p>
          <p
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.costContent
            )}
          >
            160
          </p>
          <a
            href="/products/all"
            className={classNames(
              "text",
              "text_size_medium",
              "m-0",
              styles.link
            )}
          >
            Все
          </a>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={photoBook} alt="фотокнига" />
      </div>
    </div>
  );
};

export default PhotoBooks;
