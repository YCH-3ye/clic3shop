
const util = {
  /* eslint-disable */
  //格式化当时间
  getTime (format = 'YYYY-MM-DD', time) {
    let d = ''
    if (time) {
      d = new Date(time);
    } else {
      d = new Date();
    }
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();
    if (format === 'YYYY-MM-DD') {
      return `${year}-${month}-${day}`
    } else if (format === 'YYYY-MM-DD hh:mm:ss') {
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`
    } else if (format === 'hh-mm') {
      return `${hour}:${minute}`
    } else if (format === 'YYYY-MM') {
      return `${year}-${month}`
    }
  }
}

export default util;

