let tit=function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0;i <str.length;i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  console.log(tit("hi abd yepd iruka pathu romba naal aachey !!!"))