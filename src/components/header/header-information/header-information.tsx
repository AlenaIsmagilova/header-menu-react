import classNames from "classnames";
import { FC, useState } from "react";
import button from "../../app/assets/images/Cross.svg";
import styles from "./header-information.module.css";

const HeaderInformation: FC = () => {
  const [isInfoContentOpen, setIsInfoContentOpen] = useState(true);

  const handleCloseButton = () => {
    setIsInfoContentOpen(false);
  };

  return (
    isInfoContentOpen && (
      <div className={classNames("text", "text_size_small", styles.container)}>
        <p className={classNames("m-0", styles.textContent)}>
          1, 8 и 9 мая типография и курьерские службы на каникулах. Наша
          поддержка работает в обычном режиме, а оформить заказ можно 24/7 на
          сайте или в приложении.
        </p>
        <div className={styles.buttonWrapper}>
          <button
            type="button"
            className={classNames("p-0", styles.button)}
            onClick={handleCloseButton}
          >
            <img
              className={styles.image}
              src={button}
              alt="Кнопка закрытия"
            ></img>
          </button>
        </div>
      </div>
    )
  );
};

export default HeaderInformation;
