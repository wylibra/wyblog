/**
 * localeString 千分符方法
 * formatToNumber 数据类型转换
 */
export function localeString(value) {
  const REGEXP = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g
  const RET = value.replace(REGEXP, '$1,')
  return RET
};
export function formatToNumber(value) {
  return +value
};
