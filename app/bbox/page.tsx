"use client"

import { useState, useRef } from 'react'
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'
import type { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import L from 'leaflet'

type Coordinate = [number, number];

export default function Component() {
  const [coordinates, setCoordinates] = useState<Coordinate[]>([])
  const featureGroupRef = useRef<L.FeatureGroup>(null)

  const handleCreated = (e: any) => {
    const { layer } = e
    if (layer instanceof L.Polygon) {
      const latLngs = layer.getLatLngs()[0] as L.LatLng[]
      const coords = latLngs.map(latLng => [latLng.lat, latLng.lng] as Coordinate)
      setCoordinates(coords)
    }
  }

  const handleEdited = () => {
    if (featureGroupRef.current) {
      featureGroupRef.current.eachLayer((layer) => {
        if (layer instanceof L.Polygon) {
          const latLngs = layer.getLatLngs()[0] as L.LatLng[]
          const coords = latLngs.map(latLng => [latLng.lat, latLng.lng] as Coordinate)
          setCoordinates(coords)
        }
      })
    }
  }

  const handleDeleted = () => {
    setCoordinates([])
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-2xl font-bold">Polygon Coordinate Finder</h1>
      <div className="w-full max-w-3xl h-[400px] border border-gray-300 rounded-lg overflow-hidden">
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <FeatureGroup ref={featureGroupRef}>
            <EditControl
              position="topright"
              onCreated={handleCreated}
              onEdited={handleEdited}
              onDeleted={handleDeleted}
              draw={{
                rectangle: false,
                circle: false,
                circlemarker: false,
                marker: false,
                polyline: false,
              }}
            />
          </FeatureGroup>
        </MapContainer>
      </div>
      {coordinates.length > 0 && (
        <div className="text-center w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-2">Polygon Coordinates:</h2>
          <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
              {JSON.stringify(coordinates, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}