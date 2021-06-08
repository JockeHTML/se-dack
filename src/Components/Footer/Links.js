import React from "react";
import classes from "./Links.module.css";
import { navLinks } from "../Data/Data";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className={classes.links}>
      <h3>LÄNKAR</h3>
      <ul>
        {navLinks.map((data, index) => {
          const { page, url } = data;
          return (
            <li key={index}>
              <Link onClick={() => window.scrollTo(0, 0)} to={url}>
                <span>
                  <i className="fas fa-angle-right"></i>
                  <p>{page}</p>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
