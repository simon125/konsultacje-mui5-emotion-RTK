import { FC } from "react";
import { Paper } from "components/atoms/Paper";
import { MenuItem, Select } from "@mui/material";
import { Filter } from "types";
import { useDispatch, useSelector } from "react-redux";

import { setFilter, selectFilter } from "../../redux/todosList";

export const TodoFilter: FC = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector(selectFilter);

  return (
    <Paper>
      <h4>Filter todos</h4>
      <Select
        fullWidth
        value={selectedFilter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      >
        <MenuItem value={Filter.ALL}>All</MenuItem>
        <MenuItem value={Filter.TODO}>Todo</MenuItem>
        <MenuItem value={Filter.IN_PROGRESS}>In progress</MenuItem>
        <MenuItem value={Filter.DONE}>Done</MenuItem>
      </Select>
    </Paper>
  );
};
