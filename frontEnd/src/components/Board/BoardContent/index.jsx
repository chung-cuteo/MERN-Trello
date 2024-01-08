import { useState } from 'react'
import Box from '@mui/material/Box'
import Column from './Column'
import mapOrder from '~/utils/mapOrder'
import { DndContext, PointerSensor, useSensor, MouseSensor, TouchSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, horizontalListSortingStrategy, arrayMove } from '@dnd-kit/sortable'
import { useEffect, useMemo } from 'react'

function index({ board }) {
  const { columns, columnOrderIds } = board
  const [orderedColumns, setOrderedColumns] = useState([])

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

  const hanleDragEnd = (event) => {
    const { active, over } = event
    if (!over) return
    if (active.id === over.id) return

    const oldIndex = orderedColumns.findIndex(({ _id }) => _id === active.id) // vi tri cu
    const newIndex = orderedColumns.findIndex(({ _id }) => _id === over.id) // vi tri moi
    const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
    // const dndOrderedColumnIds = dndOrderedColumns.map(({ _id }) => _id)

    setOrderedColumns(dndOrderedColumns)
  }

  useEffect(() => {
    setOrderedColumns(mapOrder(columns, columnOrderIds, '_id'))
  }, [board])

  return (
    <DndContext onDragEnd={hanleDragEnd} sensors={sensors}>
      <SortableContext items={columnsIDArray} strategy={horizontalListSortingStrategy}>
        <Box
          sx={{
            width: '100%',
            height: (theme) => theme.appCustom.boardContentHeight,
            display: 'flex',
            padding: 2,
            gap: 2,
          }}
        >
          {orderedColumns?.length > 0 && orderedColumns.map((column) => <Column key={column._id} column={column} />)}
        </Box>
      </SortableContext>
    </DndContext>
  )
}

export default index
