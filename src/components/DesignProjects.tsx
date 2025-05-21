import React from 'react'
import CircularGallery from './items/CircularGallery'

export default function DesignProjects() {
  return (
    <div style={{ height: '300px' }}>
    <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
  </div>
  )
}
