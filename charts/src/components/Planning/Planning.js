import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";

const Planning = () => {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <div>
      <Grid>
        <Grid item xs={12} display="flex">
          <Grid item xs={3} m={1}>
            <Box
              sx={{
                borderRadius: "5px 5px ",
                backgroundColor: "#00A6A5",
                padding: "5px 10px 5px 10px",
              }}
            >
              <Typography color="#fff">Demand Planning</Typography>
            </Box>{" "}
            <Box
              sx={{
                marginBlock: "10px",
                borderRadius: "5px 5px ",
                backgroundColor: "#fff",
                padding: "20px 10px 20px 10px",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Box>
                <Typography color="#000">
                  Forecast Builder - Sell Out
                </Typography>
              </Box>
              <Box>
                <GridViewSharpIcon />
              </Box>
            </Box>{" "}
            <Box
              sx={{
                borderRadius: "5px 5px ",
                backgroundColor: "#fff",
                padding: "20px 10px 20px 10px",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Box>
                <Typography color="#000">
                  Forecast Builder - Sell Out
                </Typography>
              </Box>
              <Box>
                <GridViewSharpIcon />
              </Box>
            </Box>{" "}
          </Grid>
          {/* demand scenarious................... */}
          <Grid item xs={3} m={1}>
            <Box
              sx={{
                borderRadius: "5px 5px ",
                backgroundColor: "#00A6A5",
                padding: "5px 10px 5px 10px",
              }}
            >
              <Typography color="#fff">Demand Scenarious</Typography>
            </Box>{" "}
            <Box
              sx={{
                marginBlock: "10px",
                borderRadius: "5px 5px ",
                backgroundColor: "#fff",
                padding: "20px 10px 20px 10px",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Box>
                <Typography color="#000">Scenario Selection</Typography>
              </Box>
              <Box>
                <GridViewSharpIcon />
              </Box>
            </Box>{" "}
            <Box
              sx={{
                borderRadius: "5px 5px ",
                backgroundColor: "#fff",
                padding: "20px 10px 20px 10px",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Box>
                <Typography color="#000" fontSize={14}>
                  Systematic data-driven forecast
                </Typography>
              </Box>
              <Box>
                <GridViewSharpIcon />
              </Box>
            </Box>{" "}
          </Grid>
          {/* Supply planning................... */}
          <Grid item xs={3} m={1}>
            <Box
              sx={{
                borderRadius: "5px 5px ",
                backgroundColor: "#00A6A5",
                padding: "5px 10px 5px 10px",
              }}
            >
              <Typography color="#fff">Supplay Planning</Typography>
            </Box>{" "}
            <Box
              sx={{
                marginBlock: "10px",
                borderRadius: "5px 5px ",
                backgroundColor: "#fff",
                padding: "20px 10px 20px 10px",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Box>
                <Typography color="#000">Forecast Builder Sell-in</Typography>
              </Box>
              <Box>
                <GridViewSharpIcon />
              </Box>
            </Box>{" "}
          </Grid>
          {/* Distribution planning................... */}
          <Grid item xs={3} m={1}>
            <Box
              sx={{
                borderRadius: "5px 5px ",
                backgroundColor: "#00A6A5",
                padding: "5px 10px 5px 10px",
              }}
            >
              <Typography color="#fff">Distribution Planning</Typography>
            </Box>{" "}
            <Box
              sx={{
                marginBlock: "10px",
                borderRadius: "5px 5px ",
                backgroundColor: "#fff",
                padding: "20px 10px 20px 10px",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Box>
                <Typography color="#000">SKU Prioritisation</Typography>
              </Box>
              <Box>
                <GridViewSharpIcon />
              </Box>
            </Box>{" "}
            {/* ...................c. */}
            <Button
              onClick={handleClick}
              variant="contained"
              color={flag ? "primary" : "secondary"}
              fullWidth
            >
              <Box
                sx={{
                  //   marginBlock: "10px",
                  borderRadius: "5px 5px ",
                  // backgroundColor: "#FF007E",
                  padding: "10px 5px 10px 5px",
                  justifyContent: "space-between",
                  display: "flex",
                }}
              >
                <Box>
                  <Typography color="#000">OSS Risk Detection</Typography>
                </Box>
                <Box>
                  <GridViewSharpIcon />
                </Box>
              </Box>{" "}
            </Button>
            <Box
              sx={{
                marginBlock: "10px",
                borderRadius: "5px 5px ",
                backgroundColor: "#fff",
                padding: "20px 10px 20px 10px",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Box>
                <Typography color="#000">Smart Stock Reallocation</Typography>
              </Box>
              <Box>
                <GridViewSharpIcon />
              </Box>
            </Box>{" "}
          </Grid>
        </Grid>
      </Grid>
      {/* <Button
        onClick={handleClick}
        variant="contained"
        color={flag ? "primary" : "secondary"}
      >
        button
      </Button> */}
    </div>
  );
};

export default Planning;
