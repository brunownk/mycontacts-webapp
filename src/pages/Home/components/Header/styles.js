import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin-top: 32px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};

  > strong {
    font-size: 24px;
  }

  > a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }

    transition: all 0.2s ease-in;
  }
`;
