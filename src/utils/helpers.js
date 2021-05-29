const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const formatDate = (date) => {
  const [y, m, d] = date.split('-');
  return `${d} ${months[parseInt(m, 10)]} ${y}`;
};

const formatMoney = (cost, symbol) => {
  const bills = Math.floor(cost);
  const coins = `.${parseFloat(cost - Math.floor(cost)).toFixed(2).split('.')[1]}`;
  return `${symbol}${Number(bills).toLocaleString()}${coins}`;
};

const capitalizeFirstLetter = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

// eslint-disable-next-line import/prefer-default-export
export const processInvoices = (invoices) => {
  const processedInvoices = invoices.map((invoice) => ({
    ...invoice,
    id: invoice.id,
    createdAt: formatDate(invoice.createdAt),
    paymentDue: formatDate(invoice.paymentDue),
    clientName: invoice.clientName,
    total: formatMoney(invoice.total, '£ '),
    status: capitalizeFirstLetter(invoice.status),
    items: invoice.items.map((item) => ({
      ...item,
      price: formatMoney(item.price, '£ '),
      total: formatMoney(item.total, '£ '),
    })),
  }));
  return processedInvoices;
};

export const formatItemsList = (items) => {
  const formattedItems = items.map((item) => ({
    ...item,
    price: item.price.split(' ')[1],
    total: item.total.split(' ')[1],
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
