import React from "react";
import { BaseContainer } from "../BaseContainer";

export const List = ({ children, ...rest }) =>
(
  <BaseContainer
    flex
    flexDirection="column"
    mx="auto"
    as="ul"
    {...rest}
  >
    {children}
  </BaseContainer>
);
