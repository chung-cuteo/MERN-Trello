import React from 'react'
import CardItem from './CardItem'
import mapOrder from '~/utils/mapOrder'

function ListCard({ cards, cardOrderIds }) {
  const orderedCards = mapOrder(cards, cardOrderIds, '_id')
  return <>{orderedCards?.length > 0 && orderedCards?.map((card) => <CardItem key={card._id} card={card} />)}</>
}

export default ListCard
