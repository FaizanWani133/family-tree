import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FolderIcon from "@mui/icons-material/Folder";
import { useDispatch, useSelector } from "react-redux";
import { addNode, getNode } from "./redux/action";

const FamilyTree = () => {
  const data = useSelector((store) => store.treeData);

  const dispatch = useDispatch();
  //   const handleAdd = (node, position) => {
  //     const newMember = { id: uuid(), name: "New", children: [] };
  //     const updatedData = { ...treeData };
  //     const findNode = (data) => {
  //       if (data.id === node.id) {
  //         data.children.splice(position, 0, newMember);
  //         return;
  //       }
  //       if (data.children) {
  //         data.children.forEach((child) => findNode(child));
  //       }
  //     };
  //     findNode(updatedData);
  //     setTreeData(updatedData);
  //   };
  function handleGetDetails(node) {
    dispatch(getNode(node.id));
  }

  const renderTree = (node) => {
    return (
      <Accordion
        disableGutters
        sx={{
          paddingLeft: "10px",
          boxShadow: "none",
          border: "none",
          //   borderLeft: "1px solid black",
        }}
      >
        <AccordionSummary
          onClick={() => handleGetDetails(node)}
          sx={{
            flexDirection: "row-reverse",
            justifyContent: "start",
            padding: "0",

            "&:hover": {
              backgroundColor: "red",
            },
          }}
          expandIcon={
            node.children && node.children.length > 0 && <ExpandMoreIcon />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <FolderIcon />
          <Typography>{node.name}</Typography>
          {/* <Button
            sx={{ marginLeft: "10px" }}
            variant="contained"
            size="small"
            onClick={() => handleAdd(node, 1)}
          >
            Add
          </Button> */}
        </AccordionSummary>

        {node.children &&
          node.children.map((child) => (
            <AccordionDetails>{renderTree(child)}</AccordionDetails>
          ))}
      </Accordion>
    );
  };

  return (
    <Box
      border={"1px solid black"}
      borderRadius="10px"
      padding="10px"
      sx={{ gridColumnStart: "1", gridColumnEnd: "6" }}
    >
      <Typography textAlign={"center"}>Family Tree</Typography>
      <Divider />
      {renderTree(data)}
    </Box>
  );
};

export default FamilyTree;
