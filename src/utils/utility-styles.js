import { css } from 'styled-components';

export const bgStandard = (image) => css`
  background-image: url('${image}');
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  border: none;
`;

export const flexCenter = (orientation) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${orientation};
`;

export const secondaryTextStyles = css`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colorSecondary};
`;

export const primaryTextStyles = css`
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.3125px;
  font-style: normal;
  color: ${({ theme }) => theme.colorPrimary};
`;

export const flexRowStyles = ({ ai, jc }) => css`
  display: flex;
  align-items: ${ai};
  justify-content: ${jc};
`;

export const flexColumnStyles = ({ ai, jc }) => css`
  display: flex;
  align-items: ${ai};
  justify-content: ${jc};
`;
