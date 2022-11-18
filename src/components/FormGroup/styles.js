import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }

  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 12px;
    display: block;
    margin-top: 8px;
  }

  .form-item {
    position: relative;

    .loader {
      width: fit-content;
      height: fit-content;
      position: absolute;
      top: 0px;
      bottom: 0px;
      margin: auto 0;
      right: 16px;
    }
  }
`;
