import _ from "lodash";
import axios from "axios";

//create the root 
let root = {
  categoryId: "root",
  name: "Root Category",
  parent: null,
};

const url = "http://localhost:8080"

const fetchProgram = async () => {
    //get data from server
    const {data} = await axios.get(url);
    //set the root tree with children array
  let rootList = data.filter((rootItem) => rootItem.parent === "root");
  _.set(root, "children", rootList);

//start loop to find the children for each element in the root
  root.children.map((item) => {
      //check and find all the child
    const hasChild = (t) => {
      let child = data.filter((s) => s.parent === t.categoryId);
      t.children = child;
      //call the function again if the children array is not empty
      if (t.children.length > 0) {
        t.children.map((gs) => {
          hasChild(gs);
        });
      } else {
        return t;
      }
    };
    //call the function again
    hasChild(item);
  });
  console.log(root);
};

fetchProgram();