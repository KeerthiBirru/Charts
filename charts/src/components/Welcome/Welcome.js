import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import "./Welcome.css";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Welcome = () => {
  return (
    <div>
      <Grid container>
        <Grid
          className="multicolor"
          item
          xs={12}
          p={2}
          display="flex"
          sx={{
            border: "1px solid",
            backgroundColor: "#ff6600",
            color: "#fff",
          }}
        >
          <Grid item xs={7}>
            <Typography fontSize={42} fontFamily="inter">
              Welcome
            </Typography>
            <Typography fontSize={42} fontFamily="inter">
              Long name example
            </Typography>
          </Grid>
          <Grid item xs={5} display="flex">
            <Grid item xs={6}>
              <Typography fontSize={28} fontFamily="inter">
                February 2023
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              display="flex"
              sx={{ justifyContent: "space-around" }}
            >
              <Box
                sx={{
                  borderRadius: "30px 30px",
                  width: "70px",
                  height: "25px",
                  textAlign: "center",
                  backgroundColor: "#e699ff",
                }}
              >
                <Typography fontSize={14}>Today</Typography>{" "}
              </Box>
              &nbsp; &nbsp;{" "}
              <Box marginTop="4px">
                <ArrowBackIosIcon
                  style={{
                    height: "18px",
                  }}
                />{" "}
                <ArrowForwardIosIcon
                  style={{
                    height: "18px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Welcome;
