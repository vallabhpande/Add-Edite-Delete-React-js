import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import { GlobalContext } from "../App";
import { useContext } from "react";
import { useForm } from "react-hook-form";

// Modal  Style 
const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const theme = createTheme({});

export default function EditModal() {
  const [open, setOpen] = React.useState(false);
// modal open
  const handleOpen = () => setOpen(true);
  // modal close
  const handleClose = () => setOpen(false);
//  Edit Table row 
  const { editObj } = useContext(GlobalContext);
  const { data } = useContext(GlobalContext);
  const { setData } = useContext(GlobalContext);
  const { updateIndex } = useContext(GlobalContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (addData) => {
    const SubGroupDiscription = addData.SubGroupDiscription;
    const SubGroupName = addData.SubGroupName;

// Checkbox Active and inActive
    const updateObj = {
      id: editObj.id,
      serial: editObj.serial,
      Group: editObj.Group,
      SubGroupDiscription: SubGroupDiscription,
      SubGroupName: SubGroupName,
      status: editObj.status,
      CreatedBy: editObj.CreatedBy,
      CreatedDate: editObj.CreatedDate,
      LastModBy: editObj.LastModBy,
      LastModDate: editObj.LastModDate,
    };
    const temp = [...data];
    temp.splice(updateIndex - 1, 1, updateObj);
    setData(temp);
    setOpen(false);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={handleOpen}>
          <EditIcon fontSize="small" />
        </Button>
      </ThemeProvider>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <fieldset className="border-slate-800 ml-10 rounded-lg mt-40  px-8 border-4 bg-white	">
            <Button
              onClick={handleClose}
              sx={{ marginLeft: 135, color: "error.main" }}
            >
              <CloseIcon />
            </Button>
            <legend class=" mt-10 text-black text-xl">Add Sub-Group</legend>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box className="flex mt-9 space-x-2">
                <Box>
                  <span>
                    <TextField
                      label="Select Group*"
                      defaultValue={editObj.Group}
                      sx={{ width: 200 }}
                      disabled
                    />
                  </span>
                </Box>
                <Box>
                  <span>
                    <TextField
                      label="Sub-Group Name*"
                      defaultValue={editObj.SubGroupDiscription}
                      sx={{ width: 200 }}
                      {...register("SubGroupDiscription")}
                    />
                  </span>
                </Box>
                <Box>
                  <span className="justify-self-center">
                    <TextField
                      label="Sub-Group Discription*"
                      defaultValue={editObj.SubGroupName}
                      sx={{ width: 200 }}
                      {...register("SubGroupName")}
                    />
                  </span>
                  <span>
                    <FormControlLabel
                      control={<Checkbox defaultChecked={editObj.status} />}
                      label="Active"
                    />
                  </span>
                </Box>

                <Box>
                  <div className=" mt-40 flex mb-5 space-x-2">
                    <span>
                      <Button
                        onClick={handleClose}
                        sx={{ color: "error.main", border: 1 }}
                      >
                        Cancel
                      </Button>
                    </span>
                    <span>
                      <ThemeProvider theme={theme}>
                        <Button
                          sx={{ color: "#2e7d32", border: 1 }}
                          type="submit"
                        >
                          Update
                        </Button>
                      </ThemeProvider>
                    </span>
                  </div>
                </Box>
              </Box>
            </form>
          </fieldset>
        </Box>
      </Modal>
    </div>
  );
}
