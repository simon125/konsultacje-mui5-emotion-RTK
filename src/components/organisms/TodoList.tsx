import { FC } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import { Paper } from "components/atoms/Paper";
import { selectTodoList, fetchTodos, selectFilter } from "redux/todosList";
import { Button, List, ListItem, MenuItem, Select } from "@mui/material";
import { Status } from "types";
import { useEffect } from "react";

const StyledListItem = styled(ListItem)<{ completed: string }>`
  display: flex;
  p {
    text-decoration: ${({ completed }) => completed};
    max-width: 200px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
  }

  p + div {
    margin-left: auto;
    margin-right: 10px;
  }
`;

const StyledSelect = styled(Select)`
  width: 140px;
`;

export const TodoList: FC = () => {
  const dispatch = useDispatch();
  const todosToDisplay = useSelector(selectTodoList);
  const selectedFilter = useSelector(selectFilter);

  useEffect(() => {
    // @ts-ignore // ATTENTION types issuses caused by version incompatibility
    dispatch(fetchTodos(selectedFilter));
    console.log({ selectedFilter });
  }, [dispatch, selectedFilter]);

  return (
    <Paper>
      <h4>Todo list</h4>
      <List>
        {todosToDisplay.map((todo) => (
          <StyledListItem
            key={todo.id}
            completed={todo.status === Status.DONE ? "line-through" : "none"}
          >
            <p>{todo.name}</p>
            <StyledSelect value={todo.status} size="small">
              <MenuItem value={Status.TODO}>Todo</MenuItem>
              <MenuItem value={Status.IN_PROGRESS}>In progress</MenuItem>
              <MenuItem value={Status.DONE}>Done</MenuItem>
            </StyledSelect>
            <Button variant="contained" color="error" size="small">
              Remove
            </Button>
          </StyledListItem>
        ))}
      </List>
    </Paper>
  );
};
