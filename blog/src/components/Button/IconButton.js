import React from "react";
import styled from "styled-components";
import { BaseButton } from "./BaseButton";

const StyledButton = styled(BaseButton)`
  ${ ({ theme, variant }) => theme.variants.iconButton[variant ?? "primary"] }
`;

export const IconButton = styled(({ icon, ...rest }) => 
{
  const clone = React.cloneElement(icon, rest);
  return <StyledButton as={clone.type} {...rest} className={rest.className}></StyledButton>
})`
  // css
`;

IconButton.defaultProps = { size: 24 };
