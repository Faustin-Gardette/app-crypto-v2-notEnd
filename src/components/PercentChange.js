import React, { useEffect, useState } from "react";
import colors from "../style/_settings.scss";

const PercentChange = ({ percent }) => {
  const [color, setColor] = useState();

  useEffect(() => {
    if (percent) {
      if (percent >= 0) {
        setColor(colors.green);
      } else {
        setColor(colors.red);
      }
    } else {
      setColor(colors.white);
    }
  }, []);

  return (
    <p className="percent-change-container" style={{ color }}>
      {percent ? percent.toFixed(1) + "%" : "-"}
    </p>
  );
};

export default PercentChange;
