import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  align-items: ${props => props.ai};
  justify-content: ${props => props.jc};
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;