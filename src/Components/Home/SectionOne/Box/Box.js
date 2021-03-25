import React from "react";
import styles from "./Box.module.css";
import { Link } from "react-router-dom";

function Box({ boxClick, setBoxClick }) {
  return (
    <div className={styles.box}>
      <div className={styles.boxHeader}>
        <div
          onClick={() => setBoxClick(!boxClick)}
          className={boxClick ? styles.box1 : styles.activeBox}
        >
          <h3>PRISLISTA</h3>
        </div>
        <div
          onClick={() => setBoxClick(!boxClick)}
          className={boxClick ? styles.activeBox : styles.box2}
        >
          <h3>BOKA</h3>
        </div>
      </div>

      {boxClick ? (
        <div className={styles.priceList}>
          <h3>Bokningsbara tjänster Däck, Verkstad & Rekond</h3>
          <span>
            <i className="fas fa-car"></i>
            <Link onClick={() => window.scrollTo(0, 0)} to="/appointment">
              Boka
            </Link>
          </span>
        </div>
      ) : (
        <div className={styles.priceList}>
          <h3>
            Våra tjänster för dina behov, till ett konkurrenskraftigt pris
          </h3>
          <span>
            <i className="fas fa-car"></i>
            <Link onClick={() => window.scrollTo(0, 0)} to="priceList">
              Prislista
            </Link>
          </span>
        </div>
      )}
    </div>
  );
}

export default Box;
