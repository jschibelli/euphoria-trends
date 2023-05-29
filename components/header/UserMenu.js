import styles from "./styles.module.scss";

export default function UserMenu({ loggedIn }) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Euphoria Trends</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <img
            src="https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png"
            alt=""
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back, </span>
            <h3>John Schibelli</h3>
            <span>Sign Out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
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
