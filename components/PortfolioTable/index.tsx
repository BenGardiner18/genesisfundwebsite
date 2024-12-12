'use client'

import { useState, useEffect } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
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
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-2xl font-bold mb-4">Portfolio Companies</h1>
        {data.length > 0 && (
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
        )}
      </div>
      
      {data.length > 0 && (
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter companies..."
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            className="max-w-sm"
          />
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <>
          {data.length === 0 ? (
            <div className="rounded-lg border border-gray-200 shadow-sm p-8 bg-white">
              <div className="text-center">
                <div className="mb-4">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-xl font-semibold text-gray-900">We haven&apos;t invested in any student startups yet.</p>
                <p className="mt-2 text-gray-600">We&apos;re actively looking for opportunities and fundraising.</p>
              </div>
              <div className="mt-8 space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
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
