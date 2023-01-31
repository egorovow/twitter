function replaceLink(message) {
  const arr = message.split(' ');
  let str = '';
  const arrNew = [];
  let res = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(0, 8) == 'https://') { str = arr[i].slice(8); arr[i] = ''; }
    if (arr[i].slice(0, 7) == 'http://') { str = arr[i].slice(7); arr[i] = ''; }
    if (arr[i].slice(0, 4) == 'www.') { str = arr[i].slice(4); arr[i] = ''; }
    if (arr[i].slice(0, 6) == 'ftp://') { str = arr[i].slice(6); arr[i] = ''; }

    if (str != '') {
      res = `<a href="https://${str}">${str}</a>`;
      arrNew.push(res);
      str = '';
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(-4, -3) == '.') { str = arr[i]; arr[i] = ''; }
    if (arr[i].slice(-3, -2) == '.') { str = arr[i]; arr[i] = ''; }

    if (str != '') {
      res = `<a href="https://${str}">${str}</a>`;
      arrNew.push(res);
      str = '';
    }
  }

  return arrNew.join(' ');
}