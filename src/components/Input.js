import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  background: #fff;
  border: none;
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  outline: none;
  border-radius: 4px;
  padding: 0 14px;
  font-size: 16px;
  appearance: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main}
  }

  transition: border-color 200ms ease-in;

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
