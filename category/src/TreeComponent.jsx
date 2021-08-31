import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, TreeSelect } from "antd";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
const TreeComponent = () => {
  //get the state from redux
  const { category } = useSelector((state) => state);
  const dispatch = useDispatch();
  //get all the actions
  const { getCategories } = bindActionCreators(actionCreators, dispatch);
  const [value, setValue] = useState("");
  //alert the categoryId when item was been selected
  const handleChange = (value) => {
    setValue(value);
    alert(value);
  };
  return (
    <div>
      {/* fetch the data from redux */}
      <Button
        type="primary"
        onClick={() => {
          getCategories();
          console.log(category);
        }}
      >
        Fetch
      </Button>
      <div>
        <TreeSelect
          style={{ width: "100%" }}
          dropdownStyle={{ maxHeight: 400, minWidth: 400, overflow: "auto" }}
          value={value}
          placeholder="Please Select"
          onChange={handleChange}
          treeData={category}
        ></TreeSelect>
      </div>
    </div>
  );
};

export default TreeComponent;
