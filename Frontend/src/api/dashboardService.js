import axios from './axios';

export const getTransactionStats = async (startDate, endDate) => {
  const params = {};
  if (startDate) params.start_date = startDate;
  if (endDate) params.end_date = endDate;

  const response = await axios.get('/transactions/stats', { params });
  return response.data;
};

export const getRecentTransactions = async (limit = 10) => {
  const response = await axios.get('/transactions', {
    params: { limit }
  });
  return response.data;
};

export const getAccounts = async () => {
  const response = await axios.get('/accounts');
  return response.data;
};

export const getSavingsGoals = async () => {
  const response = await axios.get('/savings/goals');
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get('/categories');
  return response.data;
};

export const getExpensesByCategory = async (startDate, endDate) => {
  const response = await axios.get('/reports/expenses-by-period', {
    params: {
      start_date: startDate,
      end_date: endDate
    }
  });
  return response.data;
};
