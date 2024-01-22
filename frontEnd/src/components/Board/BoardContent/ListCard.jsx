import React from 'react'
import CardItem from './CardItem'
import mapOrder from '~/utils/mapOrder'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

function ListCard({ cards, cardOrderIds }) {
  const orderedCards = mapOrder(cards, cardOrderIds, '_id')

  return (
    <>
      <SortableContext items={cards && cards?.map(c => c._id)} strategy={verticalListSortingStrategy}>
        {orderedCards && orderedCards?.map((card) => <CardItem key={card._id} card={card} />)}
      </SortableContext>
    </>
  )
}

export default ListCard
