module.exports = function check(str, bracketsConfig) { 
 for (let i = 0; i < bracketsConfig.length;) {  
       if (str.includes(bracketsConfig[i].join(''))) {  str = str.replace(bracketsConfig[i].join(''), ''); i=0;
       }else{i++}}
return str==='';
}
