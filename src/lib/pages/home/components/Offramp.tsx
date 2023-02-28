import {
  Grid,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import "../../../styles/ButtonContainer.css";

const Buy = () => {

  const onStart = async function () {
    try {

    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  // onstart get data
  useEffect(() => {
    onStart();
  }, []);

  return (
      <div className="button-container">
          <button className="button">Button 1</button>
          <button className="button">Button 2</button>
          <button className="button">Button 3</button>
          <button className="button">Button 4</button>
          <button className="button">Button 5</button>
      </div>
  );
};

export default Buy;
