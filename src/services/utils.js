export const getInfoFromUrlHash = (urlHash) => {
  if (!urlHash) {
    return { error: 'Acesso negado! Por favor autorize o acesso ao aplicativo.' };
  }
  return urlHash
    .substring(1)
    .split("&")
    .reduce((accumulator, hashItem) => {
      if (hashItem) {
        const keyValue = hashItem.split('=');
        accumulator[camelCase(keyValue[0])] = decodeURIComponent(keyValue[1]);
      }
      return accumulator;
    }, {});
}

export const camelCase = (string) => string.replace(/([-_]\w)/g, g => g[1].toUpperCase())

export const getNameById = (id, arr) => {
  if (!id || arr.length === 0) return '';
  return arr.find((item) => item.id === id).name
}