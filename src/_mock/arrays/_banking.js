import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const _bankingContacts = [...Array(12)].map(() => ({
  id: faker.random.numeric(5),
  name: faker.name.firstName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
}));

export const _bankingCreditCard = [
  {
    id: 0,
    balance: 53837.08,
    cardType: 'mastercard',
    cardHolder: faker.name.fullName(),
    cardNumber: '**** **** **** 3640',
    cardValid: '11/22',
  },
  {
    id: 1,
    balance: 180000,
    cardType: 'visa',
    cardHolder: faker.name.fullName(),
    cardNumber: '**** **** **** 8864',
    cardValid: '11/25',
  },
  {
    id: 2,
    balance: 50000,
    cardType: 'mastercard',
    cardHolder: faker.name.fullName(),
    cardNumber: '**** **** **** 7755',
    cardValid: '11/22',
  },
];

export const _bankingRecentTransitions = [
  {
    id: faker.random.numeric(5),
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    type: 'Income',
    message: 'Receive money from',
    category: faker.finance.transactionType(),
    date: faker.date.recent(15),
    status: 'in_progress',
    amount: faker.finance.amount(50, 400, 2),
  },
  {
    id: faker.random.numeric(5),
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    type: 'Expenses',
    message: 'Payment for',
    category: faker.finance.transactionType(),
    date: faker.date.recent(4),
    status: 'completed',
    amount: faker.finance.amount(50, 400, 2),
  },
  {
    id: faker.random.numeric(5),
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    type: 'Receive',
    message: 'Payment for',
    category: faker.finance.transactionType(),
    date: faker.date.recent(8),
    status: 'failed',
    amount: faker.finance.amount(50, 400, 2),
  },
  {
    id: faker.random.numeric(5),
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    type: 'Expenses',
    message: 'Payment for',
    category: faker.finance.transactionType(),
    date: faker.date.recent(3),
    status: 'completed',
    amount: faker.finance.amount(50, 400, 2),
  },
  {
    id: faker.random.numeric(5),
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    type: 'Expenses',
    message: 'Payment for',
    category: faker.finance.transactionType(),
    date: faker.date.recent(2),
    status: 'in_progress',
    amount: faker.finance.amount(50, 400, 2),
  },
];
