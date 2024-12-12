import type { Startup } from '..'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

interface GalleryViewProps {
  data: Startup[]
  onStartupSelect: (startup: Startup) => void
}

export default function GalleryView({ data, onStartupSelect }: GalleryViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((startup) => (
        <Card 
          key={startup.name}
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => onStartupSelect(startup)}
        >
          <CardHeader>
            <CardTitle>{startup.name}</CardTitle>
            <div className="text-sm text-gray-500">{startup.sector}</div>
            <CardDescription className="mt-2 line-clamp-3">
              {startup.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  )
}
