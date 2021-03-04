import React, { useContext } from "react";
import { AppContext } from "../Context/Context";
import styles from "./MoreInfoComponent.module.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

function MoreInfoComponent(props) {
  const { saveText } = useContext(AppContext);
  const {
    title,
    text,
    img,
    route,
    array,
    button,
    extraText,
    special,
  } = saveText;

  const useStyles = makeStyles({
    moreInfoCard: {
      color: "var(--dark)",
      maxWidth: 600,
      margin: "3rem auto",
    },
    content: {
      height: 200,
    },
    btn: {
      backgroundColor: "var(--color)",
      textDecoration: "none",
      padding: "10px 1rem",
    },
  });

  const classes = useStyles();

  return (
    <div className={styles.moreInfoComponent}>
      <h1>Mer information</h1>
      <h2 style={{ textAlign: "center", marginTop: "0" }}>Däck & Rekond</h2>
      <Card className={classes.moreInfoCard}>
        <CardMedia className={classes.content} image={img} title={title} />
        <CardContent>
          <Typography
            style={{ marginBottom: "10px" }}
            gutterBottom
            variant="h4"
            component="h2"
          >
            {title}
          </Typography>
          <Typography variant="body1">
            {text}
            {extraText}
          </Typography>
          <Typography
            style={{ paddingTop: "1rem" }}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            {special}
          </Typography>

          <CardActions
            className={styles.btn}
            style={{ paddingTop: "1rem", paddingLeft: "0" }}
          >
            <div className={styles.headingBtn}>
              <Link
                onClick={window.scrollTo(0, 0)}
                to={{ pathname: route }}
                target={button.length > 8 ? "_self" : "_blank"}
              >
                {button}
              </Link>
              <Link
                onClick={window.scrollTo(0, 0)}
                to={array === "boka" ? "/Appointment" : "/PriceList"}
              >
                Tillbaka
              </Link>
            </div>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}

export default MoreInfoComponent;
