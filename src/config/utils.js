/**
 * @description 获取url参数
 * @param name
 * @returns {string}
 */
function getQueryString(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

/**
 * @description 跳转url
 * @param url
 */
function urlJump(url) {
  var zUrl = location.origin;
  var pathname = location.pathname;
  pathname = pathname.split("/");
  for (var i = 1; i < pathname.length - 1; i++) {
    zUrl += "/" + pathname[i]
  }
  zUrl += url;

  location.href = zUrl;
}

/**
 * 存储localStorage
 */
function setStore(name, content) {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
function getStore(name) {
  if (!name) return;
  return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
function removeStore(name) {
  if (!name) return;
  window.localStorage.removeItem(name);
}

/**
 * @type {String.toTime}
 *  年月日格式转{yyyy}-{mm}-{dd} {hh}：{mm}格式
 *  例子：
 *  var str ='2017年02月04日 14时02分01秒';
 *  str.toTime('{0}-{1}-{2} {3}:{4}:{5}')
 */
var toTime = String.prototype.toTime = function (str) {
  var reg = /^(\d{4})年(\d{1,2})月(\d{1,2})日(?:\s+)(\d{1,2})时(\d{1,2})分(\d{1,2})秒$/g,
      ary = [];
  str.replace(reg, function () {
    ary = Array.prototype.slice.call(arguments, 1, 7);
  });
  var format = arguments[0] || "{0}年{1}月{2}日 {3}:{4}:{5}";
  return format.replace(/{(\d+)}/g, function () {
    var val = ary[arguments[1]];
    return val.length === 1 ? "0" + val : val;
  });
};

/**
 * @type {String.myFormatTime}
 * {yyyy}-{mm}-{dd} {hh}：{mm}格式转年月日格式
 * 例子：
 * var str='2017-02-04 14:02:03';
 * str.myFormatTime('{0}-{1}-{2} {3}:{4}:{5}')
 */
var myFormatTime = String.prototype.myFormatTime = function () {
  var reg = /^(\d{4})(?:-|\/|\.|:)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})(?:\s+)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})$/g,
      ary = [];
  this.replace(reg, function () {
    ary = Array.prototype.slice.call(arguments, 1, 7);
  });
  var format = arguments[0] || "{0}年{1}月{2}日 {3}:{4}:{5}";
  return format.replace(/{(\d+)}/g, function () {
    var val = ary[arguments[1]];
    return val.length === 1 ? "0" + val : val;
  });
};

/**
 *
 * @type {Date.myFormat}
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 例子：
 * (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 */
var myFormat = Date.prototype.myFormat = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};

/**
 * @description 获取时间戳
 * @param t
 * @returns {number}
 */
function getTimestamp(t) {
  var oDay = parseInt(Date.parse(t.replace(/-/g, '/')));
  return Math.abs(oDay);
}

function getTimestamps(t) {
  var oDay = parseInt(Date.parse(t));
  return Math.abs(oDay);
}

/**
 * @description 把中划线的年月日转为斜杠（部分浏览器不支持中划线）
 * @param t
 * @returns {Date}
 */
function standardTime(t) {
  return new Date(t.replace(/-/g, '/'));
}

/**
 * @description 时间返回星期
 * @class getWeek
 * @param timestamp
 * @returns {string}
 */
function getWeek(timestamp) {
  timestamp = parseInt(timestamp);
  var weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  var myDate = new Date(timestamp);
  return weekDay[myDate.getDay()];
}

/**
 * @description 时间加-
 * @class
 * @param
 * @returns {string}
 */
function getStringTime(str) {
  let year = str.substring(0,4);
  let month = str.substring(4,6);
  let day = str.substring(6,8);
  return year+'-'+month+'-'+day;
}

/**
 * @description 格式化时间yyyy/mm/dd形式
 *  @param timestamp
 * @returns {string}
 */
function getDate(timestamp) {
  timestamp = parseInt(timestamp);
  var day = new Date(timestamp);
  var Year = 0;
  var Month = 0;
  var Day = 0;
  var CurrentDate = "";
  //初始化时间
  Year = day.getFullYear();
  Month = day.getMonth() + 1;
  Day = day.getDate();
  CurrentDate += Year + "-";
  if (Month >= 10) {
    CurrentDate += Month + "-";
  } else {
    CurrentDate += "0" + Month + "-";
  }
  if (Day >= 10) {
    CurrentDate += Day;
  } else {
    CurrentDate += "0" + Day;
  }
  return CurrentDate;
}

/**
 * @description 格式化时间yyyy/mm/dd/hh/mm/ss形式
 *  @param timestamp
 * @returns {string}
 */
function getTimes(timestamp) {
  timestamp = parseInt(timestamp);
  var day = new Date(timestamp);
  var Year = 0;
  var Month = 0;
  var Day = 0;
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var CurrentDate = "";
  //初始化时间
  Year = day.getFullYear();
  Month = day.getMonth() + 1;
  Day = day.getDate();
  hours = day.getHours();
  minutes = day.getMinutes();
  seconds = day.getSeconds();
  CurrentDate += Year + "-";
  if (Month >= 10) {
    CurrentDate += Month + "-";
  } else {
    CurrentDate += "0" + Month + "-";
  }
  if (Day >= 10) {
    CurrentDate += Day + " ";
  } else {
    CurrentDate += "0" + Day + " ";
  }
  if (hours >= 10) {
    CurrentDate += hours + ":";
  } else {
    CurrentDate += "0" + hours + ":";
  }
  if (minutes >= 10) {
    CurrentDate += minutes + ":";
  } else {
    CurrentDate += "0" + minutes + ":";
  }
  if (seconds >= 10) {
    CurrentDate += seconds;
  } else {
    CurrentDate += "0" + seconds;
  }
  return CurrentDate;
}

/**
 *  @description 深拷贝对象
 * @param source
 * @returns {{}}
 */
function deepCopy(source) {
  var result = {};
  for (var key in source) {
    result[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
  }
  return result;
}


/**
 * @description 读取cookie
 * @class getCookie
 * @param  {name}      cookie名称
 * @return {string}    cookie字段
 */
function getCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return unescape(c.substring(nameEQ.length, c.length));
    }
  }
  return false;
}


/**
 * @description 设置cookie
 * @class setCookie
 * @param  {name, string} cookie名称, cookie字段
 */
function setCookie(name, string) {
  var exdate = new Date();
  var expiredays = 365 * 86400000;
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = name + '=' + escape(string) + ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString());
}

/**
 * @description 删除cookie
 * @param name
 * @param path
 * @param domain
 */
function removeCookie(name, path = '/', domain = ''){
  let value = getCookie(name);
  if (value) {
    document.cookie = `${name}= ;path=${path};domain=${domain};expires=Fri,02-Jan-1970 00:00:00 GMT`;
  }
};


/**
 * @description 修改时间格式
 * @class yyyy-mm-dd 改成 yyyymmdd
 * @param  {val} yyyy-mm-dd时间
 */
function replaceTime(val) {
  var result = val.replace("-", "").replace("-", "");
  return result
}

/**
 * @description 修改时间格式
 * @class yyyymmdd 改成 yyyy-mm-dd
 * @param  {val} yyyymmdd时间
 */
function sliceTime(val) {
  var result = '';
  if(!val) return result
  if (val.indexOf("-") > 0) {
    result = val
  } else {
    result = val.slice(0, 4) + '-' + val.slice(4, 6) + '-' + val.slice(6, 8);  // 修改时间格式
  }
  return result
}

/**
 * @description 判断微信浏览器
 * @returns {boolean}
 */
function isWeiXin(){
  var ua = window.navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
    return true;
  }else{
    return false;
  }
}

/**
 * @description 当浏览器退出或关闭调用
 * @param callBack
 */
function closeWindow(callBack) {
  document.addEventListener('visibilitychange',()=>{
    if (document.visibilityState == 'hidden') {
      callBack&&callBack();
    }
  })
}

/**
 * @description 判断指定元素数据类型
 * @param el
 * @param type
 * @returns {boolean}
 */
function isType(el,type) {
  let str = Object.prototype.toString.call(el);
      if(str.indexOf(type) > -1){
        return true
      }else {
        return false
      }

}

/**
 * @description 判断是否是ie6、7、8
 * @returns {boolean}
 */
function isIe() {
  if (/MSIE (?:6|7|8)/.test(window.navigator.userAgent)) {
    return true
  }else {
    return false
  }
}

//导出公共方法
export{
  getQueryString,
  urlJump,
  setStore,
  getStore,
  removeStore,
  toTime,
  myFormatTime,
  myFormat,
  getTimestamp,
  standardTime,
  getWeek,
  getDate,
  getTimes,
  deepCopy,
  getCookie,
  setCookie,
  removeCookie,
  isWeiXin,
  closeWindow,
  replaceTime,
  sliceTime,
  isType,
  isIe,
  getStringTime,
  getTimestamps
};