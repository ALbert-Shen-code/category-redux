import React,{useState} from "react";
import { useSelector } from "react-redux";
import {Button,TreeSelect} from "antd";
import './App.css'
import data from "./categories.json"
const App = () => {
  const categories = useSelector((state) => state);
  const [category,setCategory] = useState(data);
  console.log(data);
  console.log(categories);

  const handleChange = ()=>{
    setCategory({name});
  }

  return (
      <div className="App">
          <Button type="primary">Click</Button>
          <TreeSelect style={{width:'100%'}}
          dropdownStyle={{maxHeight:400, overflow:'auto'}}
          value={category.name}
          treeData={category}
          placeholder="please Select"
          treeDefaultExpandAll
          onChange={this.handleChange}
          />
      </div>
  )
};

export default App;
