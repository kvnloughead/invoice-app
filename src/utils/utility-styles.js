import { css } from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const bgStandard = (image) => css`
  background-image: url('${image}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const flexCenter = (orientation) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${orientation};
`;
