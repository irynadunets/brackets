module.exports = function check(str, bracketsConfig) { 
  const n = bracketsConfig.length;
  for (let i = 0; i < n;) {
     const brackets = bracketsConfig[i].join('');
     const contain = str.includes(brackets);
     if (contain) {  str = str.replace(brackets, ''); i = 0;
     } else { i++; }
  }
return str==='';
}
