import {
  Grid,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

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
    <Grid textAlign="center" gap={2}>
      Offramp of LUSD
    </Grid>
  );
};

export default Buy;
