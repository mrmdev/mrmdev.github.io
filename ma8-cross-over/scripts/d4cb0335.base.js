function getQueryParameter(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null==c?"":decodeURIComponent(c[1].replace(/\+/g," "))}function browseInWechat(){return/MicroMessenger/i.test(navigator.userAgent)}String.format=function(a){if(0===arguments.length)return null;var b=Array.prototype.slice.call(arguments,1);return a.replace(/\{(\d+)\}/g,function(a,c){return b[c]})},String.prototype.endsWith=function(a){return-1!==this.indexOf(a,this.length-a.length)};