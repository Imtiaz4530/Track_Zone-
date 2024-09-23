import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import style from "./index.module.css";
import { getOffset, getTimezone } from "../../../utils/utils";
import Button from "../../ui/Button/Button";

const Form = ({
  values = { title: "", timezone: "UTC", offset: "0" },
  edit = false,
  handleClock,
  title = true,
  setOpen,
}) => {
  const [state, setState] = useState({ ...values });

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "offset") {
      value = Number(value) * 60;
    }

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClock(state);
    setState({ ...values });
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className={style.container}>
        <TextField
          className={style.input}
          disabled={!title}
          label="Title"
          type="text"
          id="title"
          name="title"
          value={state.title}
          onChange={handleChange}
          variant="outlined"
        />
      </Box>
      <Box className={style.container}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Timezone</InputLabel>
          <Select
            className={style.input}
            labelId="demo-simple-select-label"
            name="timezone"
            id="demo-simple-select"
            value={state.timezone}
            label="Timezone"
            onChange={handleChange}
          >
            {getTimezone().map((timezone) => (
              <MenuItem key={timezone} value={timezone}>
                {timezone}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {(state.timezone === "GMT" || state.timezone === "UTC") && (
        <Box className={style.container}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Offset</InputLabel>
            <Select
              className={style.input}
              name="offset"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.offset / 60}
              label="Offset"
              onChange={handleChange}
            >
              {getOffset().map((offset) => (
                <MenuItem key={offset} value={offset}>
                  {offset}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}
      <Button
        clas={edit ? "edit" : "create"}
        value={edit ? "Update" : "Create"}
      />
    </form>
  );
};

export default Form;
