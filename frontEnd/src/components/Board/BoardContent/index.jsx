import { useState } from 'react'
import Column from './Column'
import CardItem from './CardItem'
import ListColumn from './ListColumn'
import mapOrder from '~/utils/mapOrder'
import { DndContext, PointerSensor, useSensor, MouseSensor, TouchSensor, useSensors, DragOverlay, defaultDropAnimationSideEffects, closestCorners } from '@dnd-kit/core'
import { SortableContext, horizontalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import { useEffect, useMemo } from 'react'
import { cloneDeep } from 'lodash'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'COLUMN',
  CARD: 'CARD',
}

function index({ board }) {
  const { columns, columnOrderIds } = board
  const [orderedColumns, setOrderedColumns] = useState([])
  const [activeDragItemID, setActiveDragItemID] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)


  const columnsIDArray = useMemo(() => {
    return columns?.map((column) => column._id)
  }, [columns])

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  })
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  })
  const sensors = useSensors(pointerSensor, mouseSensor, touchSensor)

  const findColumnByCardId = (cardId) => {
    return orderedColumns.find((column) => column?.cards?.some((card) => card._id === cardId))
  }

  const handleDragStart = ({ active }) => {
    setActiveDragItemID(active?.id)
    setActiveDragItemType(active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(active?.data?.current)
  }


  const handleDragOver = ({ active, over }) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return
    if (!active || !over) return

    const { id: activeDragCardID, data: { current: activeDragCardData } } = active
    const { id: overCardID } = over

    const activeColumn = findColumnByCardId(activeDragCardID)
    const overColumn = findColumnByCardId(overCardID)

    if (activeColumn._id !== overColumn._id) {
      setOrderedColumns((prevColumns) => {
        const overCardIndex = overColumn.cards.findIndex((card) => card._id === overCardID)

        let newCardIndex
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top >
          over.rect.top + over.rect.height;

        const modifier = isBelowOverItem ? 1 : 0;
        newCardIndex =
          overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1;

        const nextColumns = cloneDeep(prevColumns)
        const nextActiveColumn = nextColumns.find((column) => column._id === activeColumn._id)
        const nextOverColumn = nextColumns.find((column) => column._id === overColumn._id)

        if (nextActiveColumn) {
          nextActiveColumn.cards = nextActiveColumn.cards.filter((card) => card._id !== activeDragCardID)
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map((card) => card._id)
        }

        if (nextOverColumn) {
          nextOverColumn.cards = nextOverColumn.cards.filter((card) => card._id !== activeDragCardID)
          nextOverColumn.cards = nextColumns.toSpliced(newCardIndex, 0, activeDragCardData)
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map((card) => card._id)
        }

        return nextColumns
      })
    }
  }

  const hanleDragEnd = (event) => {
    const { active, over } = event
    if (!active || !over) return
    if (active.id === over.id) return

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      // logic update card
      return
    }

    const oldIndex = orderedColumns.findIndex(({ _id }) => _id === active.id) // vi tri cu
    const newIndex = orderedColumns.findIndex(({ _id }) => _id === over.id) // vi tri moi
    const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
    // const dndOrderedColumnIds = dndOrderedColumns.map(({ _id }) => _id) // api update

    setOrderedColumns(dndOrderedColumns)

    setActiveDragItemID(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }

  useEffect(() => {
    setOrderedColumns(mapOrder(columns, columnOrderIds, '_id'))
  }, [board])


  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5',
        },
      },
    }),
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={hanleDragEnd} sensors={sensors} collisionDetection={closestCorners}>
      <ListColumn columnsIDArray={columnsIDArray} orderedColumns={orderedColumns} />

      <DragOverlay dropAnimation={dropAnimation}>
        {(!activeDragItemType) && null}
        {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
          <Column column={activeDragItemData} />
        )}
        {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
          <CardItem card={activeDragItemData} />
        )}
      </DragOverlay>
    </DndContext>
  )
}

export default index
