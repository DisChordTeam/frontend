import styled from 'styled-components';

export const ServerWrap = styled.section`
  width: 26rem;
  height: 100%;
  background: ${(props) => props.theme.bgBlack4};
  display: flex;
  flex-direction: column;
`;
export const ServerTop = styled.article`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.border25};
  padding: 1rem;
  height: 6.1rem;
  box-sizing: border-box;
  > button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: ${(props) => props.theme.fff};
    font-size: 1.4rem;
  }
  > button > svg {
    font-size: 2rem;
  }
`;

export const ChatWrap = styled.section`
  flex: 1;
`;
export const ChatTop = styled.article`
  border-bottom: 1px solid ${(props) => props.theme.border25};
  padding: 1rem 2rem;
  background: ${(props) => props.theme.bgBlack2};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 6.1rem;
  box-sizing: border-box;
  > p {
    color: ${(props) => props.theme.fff};
    font-size: 1.2rem;
  }
`;
