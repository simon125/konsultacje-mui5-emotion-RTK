import { FC } from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { AddTodo } from "./components/organisms/AddTodo";
import { TodoFilter } from "./components/organisms/TodoFilter";
import { TodoList } from "./components/organisms/TodoList";

const StyledGrid = styled(Grid)`
  padding: 20px;
  gap: 20px;
`;

const App: FC = () => {
  return (
    <StyledGrid
      container
      justifyContent="center"
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <AddTodo />
      </Grid>

      <Grid item>
        <TodoFilter />
      </Grid>

      <Grid item>
        <TodoList />
      </Grid>
    </StyledGrid>
  );
};

export default App;
