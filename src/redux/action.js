export const addNode = (node, position, data) => {
  return {
    type: "ADD_NODE",
    payload: {
      node,
      position,
      data,
    },
  };
};
export const getNode = (id) => {
  return {
    type: "GET_NODE",
    payload: {
      id,
    },
  };
};
