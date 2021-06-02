import React from "react";
import classes from "./Links.module.css";

const Links = () => {
  return (
    <div className={classes.links}>
      <h3>KONTAKT</h3>
      <ul>
        <li>
          <span>
            <i class="fas fa-phone-alt"></i>
            <p>060-619135</p>
          </span>
        </li>
        <li>
          <span>
            <i class="fas fa-envelope"></i> <p>info@sedack.se</p>
          </span>
        </li>

        <li>
          <span>
            <i class="fas fa-map-marker-alt"></i> <p>Ortviksvägen 39</p>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Links;
