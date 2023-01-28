// reducer.js
import { v4 as uuid } from "uuid";
const initialState = {
  treeData: {
    id: uuid(),
    name: "GrandFather",
    spouse: "Grandmother",
    location: "shopian",
    birthYear: 1966,
    presentAddress: "Opp. Jamia Masjid Shopian",
    children: [],
  },
  currentNode: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NODE":
      const newMember = { id: uuid(), children: [], ...action.payload.data };
      // Find the node
      const findNodeAndUpdate = (data) => {
        if (data.id === action.payload.node.id) {
          data.children.splice(action.payload.position, 0, newMember);
          return;
        }
        if (data.children) {
          data.children.forEach((child) => findNodeAndUpdate(child));
        }
      };
      //update the tree data
      const updatedData = { ...state.treeData };
      findNodeAndUpdate(updatedData);
      return { ...state, treeData: updatedData };
    case "GET_NODE":
      const findNode = (data, id) => {
        if (data.id === id) {
          return data;
        }
        if (data.children) {
          for (let i = 0; i < data.children.length; i++) {
            const child = data.children[i];
            const node = findNode(child, id);
            if (node) return node;
          }
        }
      };
      return {
        ...state,
        currentNode: findNode(state.treeData, action.payload.id),
      };

    default:
      return state;
  }
};
