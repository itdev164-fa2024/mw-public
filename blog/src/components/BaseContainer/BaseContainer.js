import React from "react";
import { Flex, Box } from "rebass";

export const BaseContainer = ({ children, flex = false, ...rest }) =>
{
  let Component = (flex) ? Flex : Box;
  return <Component {...rest}>{children}</Component>
}
