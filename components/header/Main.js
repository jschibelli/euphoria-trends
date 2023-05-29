import styles from "./styles.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux";


export default function Main() {
  const { cart }=useSelector((state) => ({ ...state }));
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
