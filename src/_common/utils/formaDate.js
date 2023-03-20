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


export const formatDateUpdate = (date) => new Intl.DateTimeFormat('default', options).format(new Date(date));

export const formatDateCreatedAt = (date) => new Intl.DateTimeFormat("pt-BR").format(new Date(date));

console.log(formatDateCreatedAt("2022-09-25T21:24:29.855Z"));