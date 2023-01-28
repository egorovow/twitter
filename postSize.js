function postSize(message) {
  const arr = message.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(0, 8) == 'https://'
        || arr[i].slice(0, 7) == 'http://'
        || arr[i].slice(0, 4) == 'www.'
        || arr[i].slice(0, 6) == 'ftp://') { arr[i] = ''; }

    if (arr[i].slice(-4, -3) == '.'
        || arr[i].slice(-5, -4) == '.') { arr[i] = ''; }
  }

  const res = arr.join(' ');

  return res.length;
}