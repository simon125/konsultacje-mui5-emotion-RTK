import { FC } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { Paper } from "../atoms/Paper";
import { Status } from "types";
import { selectStatus, setStatus, setName, selectName } from "redux/todoAdd";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AddTodo: FC = () => {
  const dispatch = useDispatch();

  const selectedName = useSelector(selectName);
  const selectedStatus = useSelector(selectStatus);

  return (
    <Paper>
      <h4>Add new todo</h4>
      <StyledForm onSubmit={() => console.log(123)}>
        <TextField
          label="Enter what needs to be done"
          value={selectedName}
          onChange={(e) => dispatch(setName(e.target.value))}
        />
        <Select
          value={selectedStatus}
          onChange={(e) => dispatch(setStatus(e.target.value))}
        >
          <MenuItem value={Status.TODO}>Todo</MenuItem>
          <MenuItem value={Status.IN_PROGRESS}>In progress</MenuItem>
          <MenuItem value={Status.DONE}>Done</MenuItem>
        </Select>
        <Button variant="contained" color="primary" size="large" fullWidth>
          Submit
        </Button>
      </StyledForm>
    </Paper>
  );
};
