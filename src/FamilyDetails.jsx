import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function FamilyDetails() {
  const currentNode = useSelector((store) => store.currentNode);
  console.log(currentNode);
  const { name, spouse, location, birthYear, presentAddress } = currentNode;
  return (
    <Box
      border={"1px solid black"}
      borderRadius="10px"
      padding="10px"
      sx={{ gridColumnStart: "6", gridColumnEnd: "13" }}
    >
      <Typography textAlign={"center"}>Family Tree</Typography>
      <Divider />
      <Typography>Name : {name}</Typography>
      <Typography>Spouse : {spouse}</Typography>
      <Typography>Location : {location}</Typography>
      <Typography>Birth Year : {birthYear}</Typography>
      <Typography>Present Address : {presentAddress}</Typography>
    </Box>
  );
}

export default FamilyDetails;
