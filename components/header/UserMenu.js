import styles from "./styles.module.scss";
import { signIn, signOut } from "next-auth/react";

export default function UserMenu({ session }) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Euphoria Trends</h4>
      {session ? (
        <div className={styles.flex}>
          <img
            src={session.user.image}
            alt=""
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back, </span>
            <h3>{session.user.name}</h3>
            <span onClick={() => signOut()}>Sign Out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined} onClick={() => signIn()}>Login</button>
        </div>
      )}
      <ul>
        <li>
          <a href="/profile">Account</a>
        </li>
        <li>
          <a href="/profile/orders">My Orders</a>
        </li>
        <li>
          <a href="/profile/messages">Message Center</a>
        </li>
        <li>
          <a href="/profile/address">Address</a>
        </li>
        <li>
          <a href="/profile/wishlist">Wishlist</a>
        </li>
      </ul>
    </div>
  );
}
