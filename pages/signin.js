import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/signin.module.scss";
import { BiLeftArrowAlt } from 'react-icons/bi';
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoginInput from "../components/inputs/loginInput";
import { useState } from "react";

const initalvalues = {
  login_email: "",
  login_password: "",
};
export default function signin() {
  const [user, setUser] = useState(initalvalues);
  const { login_email, login_password } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name] : value });
  };
  console.log(user);

  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Email address is required ")
      .email('Please enter a vaild email address'),
    login_password:Yup.string().required("Please enter a password"),
  })
  return (
    <div>
      <Header country="United States" />
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt />
            </div>
            <span>
              Happy to join us!<Link href="/">Go Store</Link>
            </span>
          </div>
          <div className={styles.login__form}>
            <h1>Sign In</h1>
            <p>Log in to Euphoira Trends</p>
            <Formik
              enableReinitialize
              initialValues={{
                login_email,
                login_password,
              }}
              validationSchema={loginValidation}
            >
              {(form) => (
                <form>
                  <LoginInput
                    type="text"
                    name="login_email"
                    icon="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="login_password"
                    icon="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer country="United States" />
    </div>
  );
}
