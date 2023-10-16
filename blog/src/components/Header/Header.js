import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Outer = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.header.backgroundColor};
`;

const H1 = styled.h1`
  margin: 0px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: lightgray;
  }
`;

export const Header = ({ siteTitle }) => (
  <Outer>
    <H1>
      <StyledLink to="/">
        {siteTitle}
      </StyledLink>
    </H1>
  </Outer>
);
