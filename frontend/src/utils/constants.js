import { v4 as uuidv4 } from 'uuid';

const padWithZero = (number) => (parseInt(number, 10) < 10 ? `0${number}` : number);
const getCurrentDate = () => {
  let [m, d, y] = new Date().toLocaleDateString().split('/');
  m = padWithZero(m);
  d = padWithZero(d);
  return `${y}-${m}-${d}`;
};

export const localeString = 'en-us';
export const currency = '$';
export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const summaryHeaderString = (numInvoices, isMobile) => {
  const pluralMarker = numInvoices === 1 ? '' : 's';
  const isOrAre = numInvoices === 1 ? 'is' : 'are';
  const total = numInvoices > 1 ? 'total ' : '';
  if (isMobile) {
    return `${numInvoices} invoice${pluralMarker}`;
  }
  return `${numInvoices > 0 ? `There ${isOrAre} ${numInvoices} ${total}invoice${pluralMarker}` : 'No invoices'}`;
};

export const paidStatusColors = {
  paid: { color: 'rgba(51, 214, 159, 1)', background: 'rgba(51, 214, 159, .0571)' },
  pending: { color: 'rgba(255, 143, 0, 1)', background: 'rgba(255, 143, 0, .0571)' },
  draft: { color: 'rgba(55, 59, 83, 1)', background: 'rgba(55, 59, 83, .0571)' },
};

export const lineItemNames = {
  name: 'Item Name',
  quantity: 'QTY.',
  price: 'price',
  total: 'total',
};

export const itemsListNames = {
  name: 'Item Name',
  quantity: 'Qty.',
  price: 'Price',
  total: 'Total',
};

export const buttonLabels = {
  newInvoice: (isMobile) => (isMobile ? 'New' : 'New Invoice'),
  markAsPaid: () => 'Mark as Paid',
  edit: () => 'Edit',
  saveAsDraft: () => 'Save as Draft',
  saveChanges: () => 'Save Changes',
  saveAndSend: () => 'Save & Send',
  discard: () => 'Discard',
  cancel: () => 'Cancel',
  delete: () => 'Delete',
  addNewItem: () => '+ Add New Item',
};

export const dropdownConfig = {
  filterBy: {
    title: 'Filter by Status',
    id: 'filter-by',
    options: [
      'Draft', 'Pending', 'Paid',
    ],
  },
  paymentTerms: {
    title: 'Payment Terms',
    id: 'payment-terms',
    options: [
      'Net 30 Days', 'Net 7 days', 'Net 1 Day',
    ],
  },
};

export const formConfig = {
  edit: {
    title: 'Edit',
    fieldsets: [
      {
        legend: 'Bill From',
        id: uuidv4(),
        inputs: [
          {
            label: 'Street Address',
            keys: ['senderAddress', 'street'],
            width: 1,
            id: uuidv4(),
          },
          {
            label: 'City',
            keys: ['senderAddress', 'city'],
            width: 3,
            id: uuidv4(),
          },
          {
            label: 'Post Code',
            keys: ['senderAddress', 'postCode'],
            width: 3,
            id: uuidv4(),
          },
          {
            label: 'Country',
            keys: ['senderAddress', 'country'],
            width: 3,
            id: uuidv4(),
          },
        ],

      },
      {
        legend: 'Bill To',
        id: uuidv4(),
        inputs: [
          {
            label: 'Client\'s Name',
            keys: ['clientName'],
            width: 1,
            id: uuidv4(),
          },
          {
            label: 'Client\'s Email',
            keys: ['clientEmail'],
            width: 1,
            id: uuidv4(),
          },
          {
            label: 'Street Address',
            keys: ['clientAddress', 'street'],
            width: 1,
            id: uuidv4(),
          },
          {
            label: 'City',
            keys: ['clientAddress', 'city'],
            width: 3,
            id: uuidv4(),
          },
          {
            label: 'Post Code',
            keys: ['clientAddress', 'postCode'],
            width: 3,
            id: uuidv4(),
          },
          {
            label: 'Country',
            keys: ['clientAddress', 'country'],
            width: 3,
            id: uuidv4(),
          },
        ],
      },
    ],
  },
  new: {
    title: 'New Invoice',
    fieldsets: [
      {
        legend: 'Bill From',
        inputs: [
          {
            label: 'Street Address',
            keys: ['senderAddress', 'street'],
            width: 1,
            id: uuidv4(),
          },
          {
            label: 'City',
            keys: ['senderAddress', 'city'],
            width: 3,
            id: uuidv4(),
          },
          {
            label: 'Post Code',
            keys: ['senderAddress', 'postCode'],
            width: 3,
            id: uuidv4(),
          },
          {
            label: 'Country',
            keys: ['senderAddress', 'country'],
            width: 3,
            id: uuidv4(),
          },
        ],
        id: uuidv4(),
      },
      {
        legend: 'Bill To',
        id: uuidv4(),
        inputs: [
          {
            label: 'Client\'s Name',
            keys: ['clientName'],
            width: 1,
            id: uuidv4(),
          },
          {
            label: 'Client\'s Email',
            keys: ['clientEmail'],
            width: 1,
            placeholder: 'e.g. email@example.com',
            id: uuidv4(),
          },
          {
            label: 'Street Address',
            keys: ['clientAddress', 'street'],
            width: 1,
            id: uuidv4(),
          },
          {
            label: 'City',
            keys: ['clientAddress', 'city'],
            width: 3,
            id: uuidv4(),
          },
          {
            label: 'Post Code',
            keys: ['clientAddress', 'postCode'],
            width: 3,
            id: uuidv4(),
          },
          {
            label: 'Country',
            keys: ['clientAddress', 'country'],
            width: 3,
            id: uuidv4(),
          },
        ],
      },
    ],
  },
};

export const dateInputConfig = {
  label: 'Invoice Date',
  keys: ['createdAt'],
  width: 2,
};

export const descriptionInputConfig = {
  label: 'Project Description',
  keys: ['description'],
  placeholder: 'e.g. Graphic Design Service',
  width: 1,
};

export const blankInvoice = {
  id: '',
  createdAt: getCurrentDate(),
  paymentDue: '',
  description: '',
  paymentTerms: 1,
  clientName: '',
  clientEmail: '',
  status: '',
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  items: [
    {
      name: '',
      quantity: 0,
      price: 0,
      total: 0,
    },
  ],
  total: 0,
};

export const invoiceMobileStyles = {
  sentTo: {
    label: {
      row: 6,
      col: 1,
    },
    item: {
      row: 7,
      col: 1,
    },
  },
  sendTo: {
    col: 2,
    ta: 'left',
  },
};

export const lineItemMobileStyles = {
  gridAreas: {
    name: 'a',
    quantity: 'c',
    price: 'd',
    total: 'b',
  },
  textAlign: {
    name: 'left',
    quantity: 'left',
    price: 'left',
    total: 'right',
  },
  alignSelf: {
    total: 'center',
  },
  color: {
    quantity: '#888EB0',
    price: '#888EB0',
  },
};
