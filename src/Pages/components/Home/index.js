import React from 'react'

import { View } from './components/View'

export function Home({ activities }) {
  return <View cards={activities} />
}