export const parseToBrl = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const reduceDescription = (description: string) => {
  if (description.length > 128) {
    return description.slice(0, 121) + '...'
  }
  return description
}
