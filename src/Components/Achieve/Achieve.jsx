import React from "react";
import classes from "./Achieve.module.css";
const Achieve = () => {
  return (
    <div className={classes.whole} id="achieve">
      <div className={classes.row1}>
        <div className={classes.r1}><h2 >CP Mentor at CPMC</h2></div>
        <div className={classes.r2}><h2 >Postman Student Expert</h2></div>
      </div>
      <div className={classes.row2}>
        <div className={classes.r3}><h2 >Completed Try Hack Me</h2></div>
        <div className={classes.r4}><h2 className={classes.b}>HackSquad 2023 Winner</h2></div>
      </div>
    </div>
  );
};

export default Achieve;
