import React, { useState } from 'react';

import {
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stack,
  Container,
  ListItemText,
  List,
  Card,
  ListItem,
  ListItemIcon,
} from "@mui/material";

export default function Sort({ searchQuery, setSearchQuery, filteredVendors, setFilteredVendors }) {
  let data = filteredVendors;

  return (
    <Box sx={{ width: "100%", px: { xs: "1em", sm: "0em" }, pl: { sm: "1em" } }}>
      <Box
        sx={{
          width: "100%",
          height: "max-content",
          display: { xs: "flex", sm: "flex" },
          justifyContent: { xs: "center", sm: "flex-start" },
          alignItems: "flex-end",
          paddingLeft: { xs: "0rem", sm: "3em" },
        }}
      >
        {/* First Button - Restaurants */}
        <Button
          variant="text"
          disableElevation
          startIcon={
            <svg
              width="20"
              height="20"
              color="white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_14652_33433)">
                <path
                  d="M19.5542 17.4022C19.5422 17.3902 11.0506 9.53994 8.2232 6.92619C9.14633 5.41912 8.95656 3.42276 7.65187 2.11807C5.32668 -0.172469 2.08595 -0.571335 0.757317 0.757334C-0.571313 2.086 -0.172486 5.32674 2.11806 7.65193C3.42274 8.95662 5.4191 9.14646 6.92617 8.2233C9.53996 11.0506 17.3901 19.5423 17.4022 19.5543C17.9965 20.1486 18.96 20.1486 19.5543 19.5543C20.1485 18.96 20.1485 17.9964 19.5542 17.4022Z"
                  fill="white"
                ></path>
                <path
                  d="M19.0779 3.68925L16.4987 6.26842L15.5764 5.34612L18.1556 2.76691L17.2332 1.84461L14.654 4.42382L13.7317 3.50152L16.3109 0.922303L15.3886 0L12.3482 3.04035C11.2998 4.08874 11.1154 5.67307 11.7932 6.91104L10.9609 7.68041L12.3709 8.98385L13.0891 8.20694C14.3271 8.88475 15.9114 8.70033 16.9598 7.65194L20.0001 4.61155L19.0779 3.68925Z"
                  fill="white"
                ></path>
                <path
                  d="M7.55681 10.8271C7.55681 10.8271 0.460146 17.3878 0.445693 17.4023C-0.148564 17.9965 -0.148564 18.96 0.445693 19.5543C1.03995 20.1486 2.00346 20.1486 2.59776 19.5543C2.61221 19.5399 9.11185 12.5093 9.11185 12.5093L7.55681 10.8271Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_14652_33433">
                  <rect width="20" height="20" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          }
          sx={{
            color: 'black',
            padding: "1.4em 2.7em",
            borderRadius: "0px",
            borderBottom: "2px solid green",
            minWidth: { xs: "65%", sm: "64px" },
            '&:hover': {
              bgcolor: 'gray',
            },
          }}
        >
          <span className="jss354 jss378">Restaurants</span>
        </Button>

        {/* Second Button - Items */}
        <Button
          variant="text"
          disableElevation
          color="inherit"
          sx={{
            borderRadius: "0rem",
            color: 'black',
            padding: "1.4em 2.7em",
            borderBottom: "2px solid gray",
            minWidth: { xs: "65%", sm: "64px" },
            fontSize: "0.9em",
          }}
        >
          <span className="jss354 jss378">Items (0)</span>
        </Button>
      </Box>

      {/* Search Results Header */}
      <Box sx={{ paddingLeft: { xs: "0rem", sm: "3em" } }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            fontSize: { sm: "1.2em", xs: "0.9em" },
            color: "black",
          }}
        >
          Restaurants search results for {'"' + searchQuery + '"'}
        </Typography>
      </Box>

      {/* Vendor List */}
      <Box sx={{ width: "100%", height: "max-content" }}>
        <List sx={{ width: "100%" }}>
          {data !== null &&
            data.map((e, i) => (
              <ListItem
                key={i}
                sx={{
                  height: "auto",
                  borderBottom: "1px solid #efefef",
                  alignItems: "center",
                  gap: "2em",
                  paddingLeft: { xs: "1em", sm: "3em" },
                  "&:hover": {
                    background: "#e6e6e6",
                  },
                }}
                button={true}
              >
                <ListItemIcon>
                  <img
                    src={e.img}
                    alt="rider"
                    style={{ width: 100, height: 80 }}
                  />
                </ListItemIcon>

                <ListItemText
                  primary={
                    <Card elevation={0} sx={{ background: "transparent" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 500,
                          color: "black",
                          marginBottom: "0.3em",
                          fontSize: { xs: "1em", sm: "100%" },
                        }}
                        noWrap
                      >
                        {e.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ color: "#757575", marginBottom: "0.3em" }}
                      >
                        {e.tag.join(", ")}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "9px",
                          marginBottom: "0.3em",
                        }}
                      >
                        <div style={{ display: "flex", gap: "5px" }}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_10996_11354)">
                              <path
                                d="M15.9644 6.14218C15.8788 5.87882 15.6512 5.68688 15.3772 5.64711L10.7305 4.97199L8.65232 0.76097C8.52978 0.512684 8.27689 0.355469 8.00004 0.355469C7.72314 0.355469 7.47025 0.512684 7.34775 0.76097L5.26976 4.97194L0.622883 5.64707C0.348895 5.68688 0.121219 5.87882 0.0356762 6.14214C-0.0498662 6.4055 0.0214676 6.69457 0.219757 6.88782L3.58224 10.1651L2.78816 14.7936C2.74137 15.0665 2.85353 15.3423 3.07752 15.505C3.20423 15.5971 3.35432 15.644 3.50514 15.644C3.62089 15.644 3.73713 15.6164 3.84357 15.5604L7.99999 13.3754L12.1564 15.5604C12.2634 15.6167 12.3807 15.6435 12.4968 15.644C12.8981 15.6434 13.2232 15.318 13.2232 14.9166C13.2232 14.8607 13.2169 14.8063 13.205 14.754L12.4178 10.1651L15.7803 6.88782C15.9786 6.69457 16.0499 6.4055 15.9644 6.14218Z"
                                fill="#3BB987"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_10996_11354">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <span>{e.stars}</span>
                        </div>
                        <span>{Number(e.rating).toFixed(1)}+ Ratings</span>
                      </Box>
                    </Card>
                  }
                />
              </ListItem>
            ))}
        </List>
      </Box>
    </Box>
  );
                    }
