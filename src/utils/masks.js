export default {
  unmask: (string) => string.replace(/[^a-zA-Z0-9]/g, ''),
  phone: (string) => string
    .replace(/\D/g, '')
    .replace(/^(\d{2})\B/, '($1) ')
    .replace(/(\d{1})?(\d{4})(\d{4})/, '$1$2-$3'),
};
