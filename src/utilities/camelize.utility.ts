export const camelizeInterface = (str: string): string => {
  const camel = str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');

  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

export const camelize = (str: string): string => {
  const camel = str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');

  return camel;
}