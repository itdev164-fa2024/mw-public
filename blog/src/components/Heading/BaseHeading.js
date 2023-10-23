import React from "react";
import { Heading } from "rebass";

export const BaseHeading = ({ children, ...rest }) =>
  <Heading {...rest}>
    {children}
  </Heading>;
