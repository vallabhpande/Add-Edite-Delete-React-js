import * as React from "react";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GlobalContext } from "../App";
import { useContext } from "react";
import EditModal from "./edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material";

export default function MainTable(props) {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const { data } = useContext(GlobalContext);
  const { setData } = useContext(GlobalContext);
  const { EditData } = useContext(GlobalContext);
  const [index1, setIndex1] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(5);
  };

  const deleteRow = () => {
    console.log(index1);
    var newArr = data.filter((table) => table.id !== index1);
    setData(newArr);
  };

  //  delete row with bug

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (index1) => {
    setIndex1(index1);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className=" grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2">
      <Paper>
        <div >
          <TableContainer sx={{ width: 1900, marginTop:2 }}>
            <Table sx={{ width: 1900, marginTop:2 }}>
              <TableHead>
                <TableRow sx={{ bgcolor: "text.secondary" }}>
                  <TableCell align="center">Sr.No</TableCell>
                  <TableCell align="center">Group</TableCell>
                  <TableCell align="center">SubGroupDiscription</TableCell>
                  <TableCell align="center">SubGroupName</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">CreatedBy</TableCell>
                  <TableCell align="center">CreatedDate</TableCell>
                  <TableCell align="center">LastModifiedBy</TableCell>
                  <TableCell align="center">LastModifiedDate</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 1 ? data.slice() : data).map((table) => (
                  <TableRow key={table.id}>
                    <TableCell align="center">{table.serial} </TableCell>
                    <TableCell align="center">{table.Group}</TableCell>
                    <TableCell align="center">
                      {table.SubGroupDiscription}
                    </TableCell>
                    <TableCell align="center">{table.SubGroupName}</TableCell>
                    <TableCell align="center">
                      {" "}
                      {table.status === 1 ? (
                        <span>
                          <p>Active</p>
                        </span>
                      ) : (
                        <span>
                          <p>Inactive</p>
                        </span>
                      )}
                    </TableCell>
                    <TableCell align="center">{table.CreatedBy}</TableCell>
                    <TableCell align="center">{table.CreatedDate}</TableCell>
                    <TableCell align="center">{table.LastModBy}</TableCell>
                    <TableCell align="center">{table.LastModDate}</TableCell>
                    <TableCell align="center">
                      <Button onClick={() => EditData(table.id)}>
                        <EditModal />
                      </Button>
                      <Button onClick={() => handleClickOpen(table.id)}>
                        <DeleteOutlineIcon
                          sx={{ color: "error.main" }}
                          fontSize="small"
                        /></Button>
                    </TableCell>
                      <div>
                        <Dialog sx={{}}
                          open={open}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle>
                            {"ARE YOU SURE DELETE ROW"}
                          </DialogTitle>
                          <Button
                            sx={{ color: "error.main" }}
                            onClick={() => deleteRow(table.id)}
                          > 
                          <button onClick={handleClose}>DELETE</button>
                          </Button>
                          <Button onClick={handleClose}>CLOSE</Button>
                        </Dialog>
                      </div>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Paper>
    </div>
  );
}
