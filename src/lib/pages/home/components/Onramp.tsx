import {
  Grid,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

const Onramp = () => {

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
    <Grid textAlign="center" gap={2}>
      OnRamp to LUSD
    </Grid>
  );
};

export default Onramp;
