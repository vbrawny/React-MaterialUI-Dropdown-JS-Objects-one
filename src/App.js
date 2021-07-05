import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
});

export default function App() {
  let myCar = "BMW";
  const classes = useStyles();

  const [selectedCar, setSelectedCar] = useState(myCar);

  const handleChange = (event) => {
    setSelectedCar(event.target.value);
  };
  return (
    <div className="App">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">My Car</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectedCar}
          onChange={handleChange}
          label="My Car"
        >
          <MenuItem value={"BMW"}>BMW</MenuItem>
          <MenuItem value={"BENZ"}>BENZ</MenuItem>
          <MenuItem value={"AUDI"}>AUDI</MenuItem>
        </Select>
      </FormControl>
      {"Selected Car: " + selectedCar}
    </div>
  );
}
