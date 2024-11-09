import React from "react";
import styled from 'styled-components';

interface ButtonProps {
    variant?: 'primary' | 'secondary';
    children?: React.ReactNode;
  }
  
  const StyledButton = styled.button<ButtonProps>`
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.typography.fontSize};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.primary : theme.colors.secondary};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Button = ({variant, children}: ButtonProps) => {
    return (
        <StyledButton variant={variant} className={variant}>
            {children}
        </StyledButton>
    )
}

export default Button;