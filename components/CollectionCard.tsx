import { Collection } from '@prisma/client'
import React from 'react'

interface Props {
 collection: Collection   
}

export default function CollectionCard({collection}: Props) {
  return (
    <div>
      {collection.name}
    </div>
  )
}
