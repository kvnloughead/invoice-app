export const buttonConfig = {
  newInvoice: {
    hasDarkMode: false,
    styles: {
      background: `#7C5DFA`,
      hover: `#9277FF`,
      color: `#FFF`,
      width: `150px`,
    },
    label: 'New Invoice',  
  },

  markPaid: {
    hasDarkMode: false,
    styles: {
      background: `#7C5DFA`,
      color: `#FFF`,
      hover: `#9277FF`,
      width: `131px`,
    },
    label: 'Mark as Paid',  
  },

  edit: {
    styles: {
      hasDarkMode: true,
      background: { light: `#F9FAFE`, dark: `#252945`},
      color: { light: `#7E88C3`, dark: `#DFE3FA`},
      hover: { light: `#DFE3FA`, dark: `#fff`},
      width: `73px`,
    },
    label: 'Edit',  
  },
  
  save: {
    styles: {
      hasDarkMode: true,
      background: { light: `#373B53`, dark: `#373B53`},
      color: { light: `#888EB0`, dark: `#DFE3FA`},
      hover: { light: `#0C0E16`, dark: `#1E2139`},
      width: `133px`,
    },
    label: 'Save as Draft',  
  },

  delete: {
    styles: {
      hasDarkMode: false,
      background: `#EC5757`,
      color: `#FFF`,
      hover: `#FF9797`,
      width: `89px`,
    },
    label: 'Delete',  
  },

  addItem: {
    styles: {
      hasDarkMode: false,
      background: `#F9FAFE`,
      color: `#7E88C3`,
      hover: `#DFE3FA`,
      width: `350px`,
    },
    label: '+ Add New Item',  
  },
}