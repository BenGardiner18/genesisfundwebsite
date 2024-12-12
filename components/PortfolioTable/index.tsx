'use client'

import { useState, useEffect } from 'react'
import TableView from './TableView'
import GalleryView from './GalleryView'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import StartupDialog from './StartupDialog'
export type Startup = {
  name: string
  sector: string
  status: string
  founders: string
  university: string
  description: string
  linkedin: string
  website: string
}

export default function PortfolioView() {
  const [data, setData] = useState<Startup[]>([])
  const [filter, setFilter] = useState<string>('')
  const [isTableView, setIsTableView] = useState(true)
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const portfolioSheetUrl = process.env.NEXT_PUBLIC_PORTFOLIO_SHEET_URL

  if (!portfolioSheetUrl) {
    throw new Error('NEXT_PUBLIC_PORTFOLIO_SHEET_URL is not set')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(portfolioSheetUrl)
        const csvText = await response.text()
        const rows = csvText.split('\n').slice(1) // Remove header row
        const parsedData = rows.map((row) => {
          const [name, sector, status, founders, university, description, linkedin, website] = row
            .split(',')
            .map((cell) => cell.replace(/^"|"$/g, '')) // Remove quotes
          return { name, sector, status, founders, university, description, linkedin, website }
        })
        setData(parsedData)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredData = data.filter(startup => 
    Object.values(startup).some(value => 
      value.toLowerCase().includes(filter.toLowerCase())
    )
  )

  return (
    <div className="p-4 mx-auto w-3/4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio Companies</h1>
        <div className="flex items-center space-x-2">
          <Switch
            id="view-toggle"
            checked={isTableView}
            onCheckedChange={setIsTableView}
          />
          <Label htmlFor="view-toggle">
            {isTableView ? 'Table View' : 'Gallery View'}
          </Label>
        </div>
      </div>
      
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter companies..."
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          className="max-w-sm"
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          {isTableView ? (
            <TableView 
              data={filteredData} 
              onStartupSelect={setSelectedStartup} 
            />
          ) : (
            <GalleryView 
              data={filteredData} 
              onStartupSelect={setSelectedStartup} 
            />
          )}
        </>
      )}

      {selectedStartup && (
        <StartupDialog
          startup={selectedStartup}
          onClose={() => setSelectedStartup(null)}
        />
      )}
    </div>
  )
}
