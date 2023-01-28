import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { v4 as uuid } from "uuid";
import FamilyDetails from "./FamilyDetails";
import FamilyTree from "./Familytree";
import { addNode } from "./redux/action";
// import FamilyTreeWithAdd from './Familytree';

function App() {
  const currentNode = useSelector((store) => store.currentNode);
  const dispatch = useDispatch();
  const data = {
    name: "New",
    spouse: "New!",
    location: "Pulewama",
    birthYear: 1966,
    presentAddress: "Opp. Jamia Masjid Shopian",
  };
  return (
    <Box
      display={"grid"}
      padding="20px"
      gridTemplateColumns="repeat(12,1fr)"
      sx={{ columnGap: "10px" }}
    >
      <FamilyTree />
      <FamilyDetails />
      <Button>Import JSON</Button>
      <Button>Export JSON</Button>
      <Button onClick={() => dispatch(addNode(currentNode, 1, data))}>
        Add Family
      </Button>
      <Button>Print Family Tree </Button>
    </Box>
  );
}

export default App;
