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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            sunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Minima est enim accusantium ducimus facere quae, tempora voluptate
            explicabo.
          </p>
          <span>
            <i className="fas fa-car"></i>
            <Link onClick={() => window.scrollTo(0, 0)} to="/appointment">
              Boka
            </Link>
          </span>
        </div>
      ) : (
        <div className={styles.priceList}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            sunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Minima est enim accusantium ducimus facere quae, tempora voluptate
            explicabo.
          </p>
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
