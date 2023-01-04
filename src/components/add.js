import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { GlobalContext } from "../App";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const theme = createTheme({});
export default function AddModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { setData } = useContext(GlobalContext);
  const { data } = useContext(GlobalContext);
  const { register, handleSubmit } = useForm({});
  let checkBox = 0;
  const onSubmit = (addData) => {
    const group = addData.Group;
    const SubGroupDiscription = addData.SubGroupDiscription;
    const SubGroupName = addData.SubGroupName;

    if (addData.status === true) {
      checkBox = 1;
    }

    const addObj = {
      Group: group,
      SubGroupDiscription: SubGroupDiscription,
      SubGroupName: SubGroupName,
      status: checkBox,
    };

    setData([...data, addObj]);
    setOpen(false);
  };

  return (
    <div>
      <div className=" ml-1 border-black  bg-neutral-300 rounded-lg flex justify-end">
        <Button onClick={handleOpen}>+ Add New</Button>
      </div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <div>
            <fieldset className="border-slate-800 w-96 ml-36 mt-52 px-4 border-4 rounded-lg bg-white	">
              <Button
                onClick={handleClose}
                sx={{ marginLeft: 135, color: "error.main" }}
              >
                <CloseIcon />
              </Button>
              <legend class=" mt-10 text-black text-xl">Add Sub-Group</legend>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                  <Box className="flex ml-10 mt-6 space-x-5">
                    <Box>
                      <FormControl>
                        <InputLabel id="demo-simple-select-label">
                          Select Group*
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Age"
                          sx={{ width: 200 }}
                          {...register("Group", {
                            required: "select group",
                          })}
                        >
                          <MenuItem value={"Pathalogy"}>Pathology</MenuItem>
                          <MenuItem value={"Radiology"}>Radiology</MenuItem>
                          <MenuItem value={"OPD Charges"}>OPD Charges</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <Box>
                      <TextField
                        label="Sub-Group Name"
                        {...register("SubGroupDiscription", {
                          required: " enter sub-group",
                        })}
                        sx={{ width: 200 }}
                      />
                    </Box>
                    <Box>
                      <span>
                        <TextField
                          label="Sub-Group Discription"
                          {...register("SubGroupName", {
                            required: "enter discription",
                          })}
                          sx={{ width: 200 }}
                        />
                      </span>
                      <span className=" ml-5 mt-1 ">
                        <FormControlLabel
                          control={<Checkbox {...register("status")} />}
                          label="Active"
                        />
                      </span>
                    </Box>
                  </Box>
                  <Box className=" ">
                    <div className="ml-10 pb-4 space-x-4 mt-36 flex justify-end">
                      <Button
                        sx={{ border: 1, color: "#2e7d32" }}
                        type="button"
                        onClick={handleClose}
                      >
                        Reset
                      </Button>
                      <ThemeProvider theme={theme}>
                        <Button
                          type="submit"
                          sx={{ color: "error.main", border: 1 }}
                        >
                         Add
                        </Button>
                      </ThemeProvider>
                    </div>
                  </Box>
                </Box>
              </form>
            </fieldset>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
