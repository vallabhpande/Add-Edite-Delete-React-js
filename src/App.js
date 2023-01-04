import React from "react";
import Main from "./components/me";
import MainTable from "./components/tableRow";
import { createContext } from "react";

export const GlobalContext = createContext();

function App() {
  const [data, setData] = React.useState([]);
  const [editObj,setEditObj]=React.useState({})
  const [updateIndex,setUpdateIndex]=React.useState()  

  const EditData=(index)=>{
    setUpdateIndex(index)
    setEditObj({
      id:DataTable.result[index-1].id,
      serial:DataTable.result[index-1].serial,
      Group:DataTable.result[index-1].Group,
      SubGroupDiscription:DataTable.result[index-1].SubGroupDiscription,
      SubGroupName:DataTable.result[index-1].SubGroupName,
      status:DataTable.result[index-1].status,
      CreatedBy:DataTable.result[index-1].CreatedBy,
      CreatedDate:DataTable.result[index-1].CreatedDate,
      LastModBy:DataTable.result[index-1].LastModBy,
      LastModDate:DataTable.result[index-1].LastModDate
    })

  }

  const DataTable = {
    result: [
      {
        id: 1,
        serial: 1,
        Group: "Pathalogy",
        SubGroupDiscription: "Pathalogy",
        SubGroupName: "Pathalogy",
        status: 1,
        CreatedBy: "Manish Patil",
        CreatedDate: "2022-10-31 11:40:28 AM",
        LastModBy: "Manish Patil",
        LastModDate: "2022-10-31 11:40:28 AM",
      },
      {
        id: 2,
        serial: 2,
        Group: "OPD Charges",
        SubGroupDiscription: "OPD Charges",
        SubGroupName: "OPD Charges",
        status: 0,
        CreatedBy: "Manish Patil",
        CreatedDate: "2022-10-08 02:28:09 PM",
        LastModBy: "Manish Patil",
        LastModDate: "2022-10-08 02:28:09 PM",
      },
      {
        id: 3,
        serial: 3,
        Group: "Radiology",
        SubGroupDiscription: "Mammography",
        SubGroupName: "Mammography",
        status: 1,
        CreatedBy: "Manisha Patil",
        CreatedDate: "2022-10-08 11:42:23 AM",
        LastModBy: "Manish Patil",
        LastModDate: "2022-10-08 11:42:23 AM",
      },
      {
        id: 4,
        serial: 4,
        Group: "Radiology",
        SubGroupDiscription: "X-Ray",
        SubGroupName: "X-Ray",
        status: 1,
        CreatedBy: "Manisha Patil",
        CreatedDate: "2022-10-08 11:42:01 AM",
        LastModBy: "Manish Patil",
        LastModDate: "2022-10-08 11:42:01 AM",
      },
      {
        id: 5,
        serial: 5,
        Group: "Radiology",
        SubGroupDiscription: "MRI",
        SubGroupName: "MRI",
        status: 1,
        CreatedBy: "Manish Patil",
        CreatedDate: "2022-10-08 11:41:46 AM",
        LastModBy: "Manish Patil",
        LastModDate: "2022-10-08 11:42:01 AM",
      },
      {
        id: 6,
        serial: 6,
        Group: "Radiology",
        SubGroupDiscription: "CT-Scan",
        SubGroupName: "CT-Scan",
        status: 1,
        CreatedBy: "Manish Patil",
        CreatedDate: "2022-10-08 11:41:35 AM",
        LastModBy: "Manish Patil",
        LastModDate: "2022-10-08 11:42:35 AM",
      },
      {
        id: 7,
        serial: 7,
        Group: "Radiology",
        SubGroupDiscription: "Doppler",
        SubGroupName: "Doppler",
        status: 1,
        CreatedBy: "Manish Patil",
        CreatedDate: "2022-10-08 11:41:21 AM",
        LastModBy: "Manish Patil",
        LastModDate: "2022-10-08 11:42:21 AM",
      },
      {
        id: 8,
        serial: 8,
        Group: "Radiology",
        SubGroupDiscription: "Ultrasonography",
        SubGroupName: "Ultrasonography",
        status: 0,
        CreatedBy: "Manish Patil",
        CreatedDate: "2022-10-08 11:41:00 AM",
        LastModBy: "Manish Patil",
        LastModDate: "2022-10-08 11:42:00 AM",
      },
      {
        id: 9,
        serial: 9,
        Group: "Radiology",
        SubGroupDiscription: "Radiology",
        SubGroupName: "Radiology",
        status: 1,
        CreatedBy: "Manish Patil",
        CreatedDate: "2022-10-08 11:40:28 AM",
        LastModBy: "Manish Patil",
        LastModDate: "2022-10-08 11:40:28 AM",
      },
    ],
  };

  

  return (
    <GlobalContext.Provider
      value={{
        data,setData,
        Data: DataTable.result,
        EditData:EditData,
        editObj:editObj,
        updateIndex:updateIndex
      }}
    >
      <div>
        <div className="mt-6">
          <Main />
        </div>
        <div className="mt-5">
          <MainTable sx={{ marginTop:2 }} data={DataTable} />
        </div>
      </div>
      
    </GlobalContext.Provider>
  );
}

export default App;
