import styles from "./styles.module.scss";
import { MdSecurity } from 'react-icons/md';
import { BsSuitHeart } from 'react-icons/bs';
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import { useState } from "react";

export default function Top() {
  const [loggedIn,setLoggedIn] = useState(true)
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <img
              src="https://www.seekpng.com/png/detail/99-996186_all-photo-png-clipart-15-star-us-flag.png"
              alt=""
            ></img>
            <span>United States / USD</span>
          </li>
          <li>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <BsSuitHeart />
            <a href="/profile/wishlist">Wishlist</a>
          </li>
          // This code displays a conditional statement which checks if the user
          is logged in. If the user is logged in, it will display their name and
          profile picture, along with a dropdown arrow. If the user is not
          logged in, it will display a default account icon with the text
          "Account" and a dropdown arrow. The code uses icons from the React
          Icons library to add visual elements.
          {loggedIn ? (
            <li>
              <div className={styles.flex}>
                <img
                  src="https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png"
                  alt=""
                />
                <span>John Schibelli</span>
                <RiArrowDropDownFill />
              </div>
            </li>
          ) : (
            <li>
              <div className={styles.flex}>
                <RiAccountPinCircleLine />
                <span>Account</span>
                <RiArrowDropDownFill />
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
