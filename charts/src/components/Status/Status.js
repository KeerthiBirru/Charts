import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

const Status = () => {
  return (
    <div>
      <Box
        p={1}
        mt={5}
        sx={{ justifyContent: "space-between", display: "flex" }}
      >
        <Typography fontSize={28} fontFamily="inter">
          Current Status/ Alert Section
        </Typography>
        <Typography
          fontSize={14}
          sx={{
            borderRadius: "20px 20px",
            backgroundColor: "#fff",
            height: "28px",
            width: "130px",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-evenly",
            marginLeft: "9px",
          }}
        >
          <Typography> See all alerts </Typography>
          <NavigateNextRoundedIcon
            style={{
              backgroundColor: "#ff0000",
              borderRadius: "50%",
              color: "#fff",
            }}
          />
        </Typography>{" "}
      </Box>
      <Grid>
        <Grid item xs={12} display="flex">
          <Grid item xs={4} m={1}>
            <Box
              sx={{
                borderRadius: "5px 5px ",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                height: "100%",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box m={2}>
                  <ReportProblemIcon sx={{ color: "red" }} />
                </Box>
                <Box m={1}>
                  <Typography
                    fontFamily="inter"
                    fontWeight={600}
                    fontSize={{ xl: 18, md: 14 }}
                  >
                    OSS Risk Detection on Airwick UK SKUs.
                  </Typography>
                </Box>
              </Box>
              <hr />
              <Box
                p={1}
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <Box>
                  <Typography
                    color="#415A6C"
                    fontWeight={500}
                    fontSize={{ xl: 14, md: 12 }}
                  >
                    OSS Risk Dectected
                  </Typography>
                  <Typography fontWeight={500} fontSize={12}>
                    Airwick Electrical Lemon
                  </Typography>
                  <Typography fontWeight={500} fontSize={12}>
                    Airwick Electrical Lavender
                  </Typography>
                  <Typography fontWeight={500} fontSize={12}>
                    Airwick Aersol Floral
                  </Typography>
                </Box>
                <Box sx={{ marginBottom: "10px" }}>
                  {" "}
                  <Typography
                    color="#415A6C"
                    fontWeight={500}
                    fontSize={{ xl: 14, md: 12 }}
                  >
                    Expected OLA
                  </Typography>
                  <Typography color="#F08C2A" fontWeight={500} fontSize={14}>
                    84%
                  </Typography>
                  <Typography color="#F08C2A" fontWeight={500} fontSize={14}>
                    86%
                  </Typography>
                  <Typography color="#F08C2A" fontWeight={500} fontSize={14}>
                    87%
                  </Typography>
                </Box>
              </Box>
            </Box>{" "}
          </Grid>
          <Grid item xs={4} m={1}>
            <Box
              sx={{
                borderRadius: "5px 5px ",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                height: "100%",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box m={2}>
                  <ReportProblemIcon sx={{ color: "red" }} />
                </Box>
                <Box m={1}>
                  <Typography
                    fontFamily="inter"
                    fontWeight={600}
                    fontSize={{ xl: 18, md: 14 }}
                  >
                    Vanish SKUs identifier for promotion prioritisation
                  </Typography>
                </Box>
              </Box>
              <hr />
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Typography
                  p={2}
                  fontWeight={500}
                  fontSize={{ xl: 16, md: 14 }}
                >
                  Some SKUs have opportunity for promotion priotisation
                </Typography>
              </Box>
            </Box>{" "}
          </Grid>
          <Grid item xs={4} m={1}>
            <Box
              sx={{
                borderRadius: "5px 5px ",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 0px 0px  rgba(0,0,0,0.3)",
                height: "100%",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box m={2}>
                  <ReportProblemIcon sx={{ color: "red" }} />
                </Box>
                <Box m={1}>
                  <Typography
                    fontFamily="inter"
                    fontWeight={600}
                    fontSize={{ xl: 18, md: 14 }}
                  >
                    OSS Risk Detection on Finish <br />
                    UK SKUs
                  </Typography>
                </Box>
              </Box>
              <hr />
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Typography p={2} fontSize={{ xl: 16, md: 14 }}>
                  Some SKUs required action due to OOS risk, press to inspect
                </Typography>
              </Box>
            </Box>{" "}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Status;
