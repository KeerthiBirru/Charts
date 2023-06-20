import React, { useState } from "react";

// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";

import HelpIcon from "@mui/icons-material/Help";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import PersonIcon from "@mui/icons-material/Person";

import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";

import "./Topbar.css";
import Logo from "../../image/logo.jpeg";

const Topbar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <div>
      {/* <AppBar position="static"> */}
      <Toolbar
      //  sx={{ borderBottom: "1px solid" }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          {/* <MenuIcon /> */}
          <img src={Logo} alt="logo" width={30} height={30} />
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />

        {/* search................................ ..........*/}

        <Box>
          <Search
            sx={{
              backgroundColor: "#F5F6F8",
              borderRadius: "20px 20px",
              width: "200px",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {/* <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton> */}

          <IconButton
            size="large"
            // aria-label="show 17 new notifications"
            color="inherit"
          >
            {/* <Badge badgeContent={17} color="error"> */}
            <NotificationsIcon />
            {/* </Badge> */}
          </IconButton>

          <IconButton className="helpicon">
            <HelpIcon />
            <ArrowDropDownSharpIcon />
          </IconButton>

          <IconButton className="profile">
            <PersonIcon
              sx={{
                border: "1px solid #DADADA",
                borderRadius: "2px 2px",
                color: "#FF007E",
                backgroundColor: "#DADADA",
              }}
            />
            <ArrowDropDownSharpIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            // aria-controls={mobileMenuId}
            aria-haspopup="true"
            // onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      {/* </AppBar> */}
    </div>
  );
};

export default Topbar;
