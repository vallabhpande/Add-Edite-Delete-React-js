import { Button } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../App";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

export default function Search() {
  const { Data } = useContext(GlobalContext);
  const { setData } = useContext(GlobalContext);
  const [selectedVal, setSelectedVal] = React.useState("");

  useEffect(() => {
    setData(Data);
  }, []);


// input serch bar 

  const HandleChange = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setData(Data);
    }
    setSelectedVal(e.target.value);
  };


  // Search Option

  const handleSearch = () => {
    if (selectedVal === "") {
      setData(Data);
    } else {
      const sData = Data.filter(
        (item) =>
          item.Group.toLowerCase().includes(selectedVal.toLowerCase()) ||
          item.SubGroupDiscription.toLowerCase().includes(
            selectedVal.toLowerCase()
          ) ||
          item.SubGroupName.toLowerCase().includes(selectedVal.toLowerCase()) ||
          item.CreatedBy.toLowerCase().includes(selectedVal.toLowerCase())
      );

      setData(sData);
    }
  };

  return (
    <div className=" ml-20 flex ">

      <input list="brow"  
       placeholder="Search Sub-Group"
          onChange={HandleChange}
        className=" text-lg  border-2 from-black h-7 w-96"/>
<datalist id="brow">
  <option value="Pathalogy"/>
  <option value="OPD Charges"/>
  <option value="Mammography"/>
  <option value="X-Ray"/>
  <option value="MRI"/>
  <option value="CT-Scan"/>
  <option value="Doppler"/>
  <option value="Ultrasonography"/>
  <option value="Radiology"/>
</datalist>  




      <Button onClick={handleSearch}>
        <SearchIcon />
      </Button>
    </div>
  );
}
