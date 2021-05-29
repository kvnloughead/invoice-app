import nothingHere from '../../images/nothing-here.png';

export const lightTheme = {
  isLight: true,
  bgMain: '#F2F2F2',
  bgSidebar: '#373B53',
  bgInvoice: '#FFFFFF',
  colorPrimary: '#0C0E16',
  colorSecondary: '#7E88C3',
  colorFormLabel: '#7C5DFA',
  colorName: '#858BB2',
  nothingHere,
  button: {
    newInvoice: {
      background: '#7C5DFA',
      hover: '#9277FF',
      color: '#FFF',
      width: '150px',
    },
    markAsPaid: {
      background: '#7C5DFA',
      color: '#FFF',
      hover: '#9277FF',
      width: '131px',
    },
    edit: {
      background: '#F9FAFE',
      color: '#7E88C3',
      hover: '#DFE3FA',
      width: '73px',
    },
    saveAsDraft: {
      background: '#373B53',
      color: '#888EB0',
      hover: '#0C0E16',
      width: '133px',
    },
    saveChanges: {
      background: '#7C5DFA',
      color: '#FFF',
      hover: '#9277FF',
      width: '133px',
    },
    delete: {
      background: '#EC5757',
      color: '#FFF',
      hover: '#FF9797',
      width: '89px',
    },
    addNewItem: {
      background: '#F9FAFE',
      color: '#7E88C3',
      hover: '#DFE3FA',
      width: '504px',
    },
    cancel: {
      background: '#F9FAFE',
      color: '#7E88C3',
      hover: '#DFE3FA',
      width: '96px',
    },
  },
};

export const darkTheme = {
  bgMain: '#141625',
  bgSidebar: '#1E2139',
  bgInvoice: '#1E2139',
  colorPrimary: '#FFFFFF',
  colorSecondary: '#DFE3FA',
  colorName: '#DFE3FA',
  nothingHere: '../../images/nothing-here-dark.png',
  button: {
    newInvoice: {
      background: '#7C5DFA',
      hover: '#9277FF',
      color: '#FFF',
      width: '150px',
    },
    markAsPaid: {
      background: '#7C5DFA',
      color: '#FFF',
      hover: '#9277FF',
      width: '131px',
    },
    edit: {
      background: '#252945',
      color: '#DFE3FA',
      hover: '#fff',
      width: '73px',
    },
    save: {
      background: '#373B53',
      color: '#DFE3FA',
      hover: '#1E2139',
      width: '133px',
    },
    delete: {
      background: '#EC5757',
      color: '#FFF',
      hover: '#FF9797',
      width: '89px',
    },
    addNewItem: {
      background: '#F9FAFE',
      color: '#7E88C3',
      hover: '#DFE3FA',
      width: '504px',
    },
  },
};
