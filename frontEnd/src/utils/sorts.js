const mapOrder = (originalArray, orderArray, key) => {
  if (!originalArray || !orderArray || !key) return []

  return originalArray.toSorted((a, b) => {
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key])
  })
}

export default mapOrder
