import { FC, ReactNode } from "react";
import styled from "@emotion/styled";
import MuiPaper from "@mui/material/Paper";

const StyledPaper = styled(MuiPaper)`
  padding: 20px;
  width: 500px;
`;

export const Paper: FC<{ children: ReactNode }> = ({ children }) => {
  return <StyledPaper square>{children}</StyledPaper>;
};
