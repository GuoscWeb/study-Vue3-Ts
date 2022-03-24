const formatDecimal = (num, decimal) => {
  num = num.toString()
  let index = num.indexOf('.')
  if (index != -1) {
    num = num.substring(0, decimal + index + 1)
  } else {
    num = num.substring(0)
  }
  return num
}


// CommonJS 的导出
module.exports = {
  formatDecimal
}