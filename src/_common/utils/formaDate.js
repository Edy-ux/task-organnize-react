const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
  timeZone: 'America/Sao_Paulo'
};

const formatDateUpdate = (date) => new Intl.DateTimeFormat('default', options).format(date);
const formatDateCreateAt = (date) => new Intl.DateTimeFormat('pt-BR').format(date);

export { formatDateUpdate, formatDateCreateAt };
