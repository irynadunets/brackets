module.exports = function check(str, bracketsConfig) {
  const n = bracketsConfig.length;
  let i = 0;
  while ( i < n) {
     const bracketsTemplate = bracketsConfig[i].join('');
     const finded = str.includes(bracketsTemplate);
     if (finded) {
       str = str.replace(bracketsTemplate, '');
       i = 0;
     } else {
       i++;
     }
 }
return str === '';
}

