import React from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Grid } from "@mui/material";

// import GridViewIcon from "@mui/icons-material/GridView";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";

import Welcome from "../Welcome/Welcome";
import Status from "../Status/Status";
import Planning from "../Planning/Planning";
const drawerWidth = 240;

const Sidebar = () => {
  return (
    <div>
      <Grid container spacing={2} py={2} justifyContent="space-between">
        <Grid item xs={2} height={900} mx={4}>
          <Box
            sx={{
              border: "1px solid",
              borderRadius: "5px 5px",
              backgroundColor: "#466072",
              color: "#fff",
              flexDirection: "row",
              display: "flex",
              padding: "8px 12px 8px 12px",
              // width: "100%",
            }}
          >
            <GridViewSharpIcon
              sx={{ color: "#fff", marginBlock: "3px", height: "18px" }}
            />{" "}
            &#160;
            <Typography fontFamily="inter" fontWeight={500} fontSize={16}>
              Dashboard
            </Typography>
          </Box>
          <Box
            mt={2}
            sx={{
              borderRadius: "5px 5px",
              backgroundColor: "#E7E9EE",
              flexDirection: "row",
              display: "flex",
              padding: "8px",
            }}
          >
            <PlayArrowSharpIcon
              sx={{ color: "#415A6C", marginBlock: "3px", height: "18px" }}
            />{" "}
            &#160;
            <Typography color="#415A6C" fontWeight={500} fontSize={16}>
              Demand Planning
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: "5px 5px",
              backgroundColor: "#E7E9EE",
              flexDirection: "row",
              display: "flex",
              marginBlock: "10px",
              padding: "8px",
            }}
          >
            <PlayArrowSharpIcon
              sx={{ color: "#415A6C", marginBlock: "3px", height: "18px" }}
            />{" "}
            &#160;
            <Typography color="#415A6C" fontWeight={500} fontSize={16}>
              {" "}
              Demand Scenarious
            </Typography>{" "}
          </Box>
          <Box
            sx={{
              borderRadius: "5px 5px",
              backgroundColor: " #E7E9EE",
              flexDirection: "row",
              display: "flex",
              padding: "8px",
              // width: "260px",
            }}
          >
            <PlayArrowSharpIcon
              sx={{ color: "#415A6C", marginBlock: "3px", height: "18px" }}
            />{" "}
            &#160;
            <Typography color="#415A6C" fontWeight={500} fontSize={16}>
              {" "}
              Supply Planning
            </Typography>{" "}
          </Box>

          <Box mt={5}>
            <Typography
              backgroundColor="#7E919F"
              borderRadius="5px 5px 0px 0px"
              display="flex"
              padding="8px 12px 8px 12px"
            >
              <ArrowDropDownSharpIcon
                sx={{
                  color: "#fff",
                  marginBlock: "3px",
                  height: "18px",
                  fontSize: "large",
                }}
              />{" "}
              &#160;
              <Typography color="#fff" fontFamily="inter" fontSize={14}>
                {" "}
                Distribution Planning
              </Typography>
            </Typography>
            <Box
              sx={{ backgroundColor: "#E7E9EE", border: "1px solid #D4F1F4" }}
            >
              <Typography color="#415A6C" padding="6px" mx={3} fontSize={14}>
                SKU Prioritization
              </Typography>
              <hr />
              <Typography color="#415A6C" padding="6px" mx={3} fontSize={14}>
                00S Risk Detection{" "}
              </Typography>
              <hr />
              <Typography color="#415A6C" padding="6px" mx={3} fontSize={14}>
                Smart Stock Reallocation
              </Typography>
            </Box>
          </Box>

          <Box
            mt={1}
            sx={{
              borderRadius: "5px 5px",
              backgroundColor: "#E7E9EE",
              flexDirection: "row",
              display: "flex",
              padding: "8px",
            }}
          >
            <PlayArrowSharpIcon
              sx={{ color: "#415A6C", marginBlock: "3px", height: "18px" }}
            />{" "}
            &#160;
            <Typography color="#415A6C" fontSize={14}>
              Retrospective Analysis
            </Typography>
          </Box>
          <Box mt={2} border="1px dashed"></Box>
          <Box
            mt={2}
            sx={{
              borderRadius: "5px 5px",
              backgroundColor: "#E7E7E7",
              flexDirection: "row",
              display: "flex",
              padding: "8px",
            }}
          >
            <PlayArrowSharpIcon
              sx={{
                color: "#415A6C",
                marginBlock: "3px",
                height: "18px",
              }}
            />{" "}
            &#160;
            <Typography color="#415A6C" fontFamily="inter">
              Historical Runs
            </Typography>
          </Box>
          <Box
            mt={2}
            sx={{
              borderRadius: "5px 5px",
              backgroundColor: "#E7E7E7",
              color: "#415A6C",
              flexDirection: "row",
              display: "flex",
              padding: "8px 12px 8px 12px",
            }}
          >
            <ReportProblemIcon color="#415A6C" /> &#160;&#160;
            <Typography color="#415A6C" fontFamily="inter">
              Alerts
            </Typography>
          </Box>
          <Box
            mt={2}
            sx={{
              borderRadius: "5px 5px",
              backgroundColor: "#E7E7E7",
              flexDirection: "row",
              display: "flex",
              padding: "8px",
            }}
          >
            <PlayArrowSharpIcon
              sx={{ color: "#415A6C", marginBlock: "3px", height: "18px" }}
            />{" "}
            <Typography color="#415A6C" fontFamily="inter">
              {" "}
              &#160; Historical Activations
            </Typography>{" "}
          </Box>
        </Grid>
        {/* main  body...........................*/}
        <Grid item xs={9} p={2} sx={{ backgroundColor: "#E7E9EE" }}>
          <Welcome />
          <Status />
          <Planning />
        </Grid>
      </Grid>
    </div>
  );
};

export default Sidebar;
