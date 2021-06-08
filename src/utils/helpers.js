import { months, localeString } from './constants';

export const formatDate = (date) => {
  const [y, m, d] = date.split('-');
  return `${d} ${months[parseInt(m, 10) - 1]} ${y}`;
};

const formatNumber = (cost, locale = localeString) => cost.toLocaleString(locale, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatCurrency = (cost) => `$ ${formatNumber(cost)}`;

const capitalizeFirstLetter = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

export const processInvoices = (invoices) => {
  const processedInvoices = invoices.map((invoice) => ({
    ...invoice,
    id: invoice.id,
    createdAt: invoice.createdAt,
    paymentDue: invoice.paymentDue,
    clientName: invoice.clientName,
    total: formatNumber(invoice.total),
    status: capitalizeFirstLetter(invoice.status),
    items: invoice.items.map((item) => ({
      ...item,
      price: formatNumber(item.price),
      total: formatNumber(item.total),
    })),
  }));
  return processedInvoices;
};

export const formatLineItems = (items) => {
  const formattedItems = items.map((item) => (item.quantity === 0 ? items : {
    ...item,
    price: formatCurrency(item.price),
    total: formatCurrency(item.total),
  }));
  return formattedItems;
};

export const accessObjectProperty = (obj, keys) => {
  const newKeys = typeof keys === 'string' ? keys.split('.') : keys;
  let current = obj;
  newKeys.forEach((key) => {
    current = current[key];
  });
  return current;
};
