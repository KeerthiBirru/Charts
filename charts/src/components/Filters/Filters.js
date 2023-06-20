import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Filters = () => {
  return (
    <div>
      <Typography fontSize={28} color="#415A6C">
        Filters
      </Typography>
      <Grid container spacing={1}>
        <Grid
          container
          spacing={3}
          item
          xs={12}
          sx={{
            boxShadow: 3,
            // width: "8rem",
            height: "8rem",
            bgcolor: (theme) =>
              theme.palette.mode === "dark" ? "#101010" : "#fff",
            color: (theme) =>
              theme.palette.mode === "dark" ? "grey.300" : "grey.800",
            p: 1,
            m: 1,
            borderRadius: 2,
            // textAlign: "center",
            fontSize: "0.875rem",
            fontWeight: "700",
          }}
        >
          <Grid item xs={3}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Customer
                </InputLabel>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: "Customer",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Amazon</option>
                  <option value={20}>Google</option>
                  <option value={30}>Cap Gemeni</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Location
                </InputLabel>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: "Country",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>UK</option>
                  <option value={20}>USA</option>
                  <option value={30}>India</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Brand
                </InputLabel>
                <NativeSelect
                  defaultValue={10}
                  inputProps={{
                    name: "Brand",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Airwick</option>
                  <option value={20}>Nike</option>
                  <option value={30}>BMW</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={3} textAlign="center">
            <Button
              style={{
                color: "#E7E9EE",
                backgroundColor: "#FF007E",
              }}
            >
              APPLY FILTERS
              <PlayArrowIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Filters;
