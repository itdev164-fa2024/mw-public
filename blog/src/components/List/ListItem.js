import React from "react";
import { BaseContainer } from "../BaseContainer";

export const ListItem = ({ children, ...rest }) =>
(
  <BaseContainer as="li" {...rest}>
    {children}
  </BaseContainer>
);
