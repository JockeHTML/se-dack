import styles from "./button-group.module.css";

export default function ButtonGroup({ next, previous }) {
  return (
    <div>
      <div className={styles.buttonGroup}>
        <button onClick={() => console.log("next")} aria-label="Previous">
          <i className="fas fa-arrow-right"></i>
        </button>
        <button onClick={() => console.log("prev")} aria-label="Next">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
