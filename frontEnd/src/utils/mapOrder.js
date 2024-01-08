const mapOrder = (array, order, key) => {
  if (!array || !order || !key) return array

  return array.toSorted((a, b) => {
    return order.indexOf(a[key]) > order.indexOf(b[key]) ? 1 : -1
  })
}

export default mapOrder
