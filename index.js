function hashTags(tag) {
  const arr = tag.split(' ');
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(0, 1) == '#') {
      str = arr[i].slice(1);
      arr[i] = `href="/search?tag=${str}">#${str}</a>`;
    }
  }
  const res = arr.join(' ');
  return res;
}