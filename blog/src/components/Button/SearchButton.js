import React from "react";
import { ThemeConsumer } from "styled-components";
import { IconButton } from "./IconButton";

export const SearchButton = (props) =>
(
  <ThemeConsumer>
    {(theme) => <IconButton icon={theme.icons.Search} {...props} />}
  </ThemeConsumer>
);
