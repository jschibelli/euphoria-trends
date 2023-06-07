import styles from "./styles.module.scss";
import { FaOpencart } from 'react-icons/fa';
import { RiSearch2Line } from 'react-icons/ri';
import { useSelector } from "react-redux";


// This code exports a React component called "Main" that renders a header containing a logo, search bar, and a link to the cart page. It also displays the number of items in the cart stored in the Redux store.

export default function Main() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <a href="/" className={styles.logo}>
          <img src="../../../EuphoriaTrends-logo.png" alt="" />
        </a>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <a href="/cart" className={styles.cart}>
          <FaOpencart />
          <span>{cart.length}</span>
        </a>
      </div>
    </div>
  );
}
