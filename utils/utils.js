/**
 * @function shallowCopy 浅拷贝
 * @param {Object} target -合并的目标对象
 * @param {Object} source  -合并的源对象
 */
export const shallowCopy = (target, source) => {
  return Object.assign(target, source)
}

/**
 * @function deepCopy 深拷贝
 * @param {Object} source -合并的源对象
 */
export const deepCopy = (source) => {
  return JSON.parse(JSON.stringify(source))
}