export const getStringDate = (date) => {
  const offset = new Date().getTimezoneOffset() * 60000;
  const today = date ? new Date(date - offset) : new Date(Date.now() - offset);

  return today.toISOString().slice(0, 10);
};
