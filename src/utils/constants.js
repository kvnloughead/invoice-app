import { v4 as uuidv4 } from 'uuid';

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
  newInvoice: 'New Invoice',
  markAsPaid: 'Mark as Paid',
  edit: 'Edit',
  saveAsDraft: 'Save as Draft',
  saveChanges: 'Save Changes',
  cancel: 'Cancel',
  delete: 'Delete',
  addNewItem: '+ Add New Item',
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
    id: uuidv4(),
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
};

export const dateInputConfig = {
  label: 'Invoice Date',
  keys: ['createdAt'],
  width: 2,
};

export const descriptionInputConfig = {
  label: 'Project Description',
  keys: ['description'],
  width: 1,
};

export const blankInvoice = {
  id: '',
  createdAt: '',
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
