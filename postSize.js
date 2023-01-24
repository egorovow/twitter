function postSize(message) {
  const str = message.replace(/[a-z0-9:/._\+~#=@]{2,}\.[a-z]{2,6}/gi, '');
  return str.length;
}
