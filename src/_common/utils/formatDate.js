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

const formatDateUpdate = (date) => new Intl.DateTimeFormat('default', options).format(new Date(date));

const formatDateCreatedAt = (date) => new Intl.DateTimeFormat('pt-BR').format(new Date(date));

const FormatDate = { formatDateUpdate, formatDateCreatedAt };

export default FormatDate;
