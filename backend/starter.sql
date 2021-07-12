DROP TABLE IF EXISTS clientAddresses;
DROP TABLE IF EXISTS senderAddresses;
DROP TABLE IF EXISTS invoices;
DROP TABLE IF EXISTS clients;

CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  clientName varchar(40),
  email varchar(40)
);

CREATE TABLE clientAddresses (
  id SERIAL PRIMARY KEY,
  clientId integer,
  street varchar(40),
  city varchar(40),
  postCode varchar(40),
  country varchar(40),
  CONSTRAINT fk_client
    FOREIGN KEY(id) 
	    REFERENCES clients(id)
);

CREATE TABLE senderAddresses (
  id SERIAL PRIMARY KEY,
  clientId integer,
  street varchar(40),
  city varchar(40),
  postCode varchar(40),
  country varchar(40),
  CONSTRAINT fk_client
    FOREIGN KEY(id) 
	    REFERENCES clients(id)
);

CREATE TABLE invoices ( 
  /* Dates formatted as ISO 8601: YYYY-MM-DD */
  id SERIAL PRIMARY KEY,
  clientId integer,
  invoiceNumber char(6),
  createdAt date,
  paymentDue date,
  describeInvoice varchar(40),
  paymentTerms integer,
  paidStatus varchar(7) CHECK (paidStatus in ('paid', 'pending', 'draft')),
  CONSTRAINT fk_client
    FOREIGN KEY(id) 
      REFERENCES clients(id)
);

INSERT INTO clients (clientName, email)
VALUES ('Jensen Huang', 'jensenh@mail.com');

INSERT INTO clientAddresses (clientId, street, city, postCode, country)
VALUES (1, '106 Kendell Street', 'Sharrington', 'NR24 5WQ', 'United Kingdom');

INSERT INTO senderAddresses (clientId, street, city, postCode, country)
VALUES (1, '10 Union Terrace', 'London', 'E1 3EZ', 'United Kingdom');

INSERT INTO invoices (clientId, invoiceNumber, createdAt, paymentDue, describeInvoice, paymentTerms, paidStatus)
VALUES (1, 'RT3080', '2021-08-18', '2021-08-19', 'Re-branding', 1, 'paid');