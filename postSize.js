function postSize(message) {
  const str = message.replace(/[\a-z0-9/\/./:]/gi, '');
  const len = str.length;
  return len;
}
