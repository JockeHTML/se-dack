import React, { useEffect, useContext } from "react";
import Contact from "./Contact";
import styles from "./ContactPage.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import { AppContext } from "../Context/Context";

const ContactPage = () => {
  const { loading, loadingFunction } = useContext(AppContext);
  useEffect(() => {
    loadingFunction();
  }, []);
  return (
    <>
      {loading ? (
        <div className={styles.loader}>
          <ClipLoader color="#e6192e" loading={loading} size={150} />
        </div>
      ) : (
        <div>
          <div className={styles.topImage}>
            <h1>KONTAKT</h1>
          </div>
          <Contact />
        </div>
      )}
    </>
  );
};

export default ContactPage;
