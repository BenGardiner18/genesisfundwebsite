import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import type { Startup } from '..'

interface StartupDialogProps {
  startup: Startup
  onClose: () => void
}

export default function StartupDialog({ startup, onClose }: StartupDialogProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">{startup.name}</DialogTitle>
        </DialogHeader>
        
        <Card className="border-none">
          <CardHeader>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-700">Sector</h4>
                <p>{startup.sector}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Status</h4>
                <p>{startup.status}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Founders</h4>
                <p>{startup.founders}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">University</h4>
                <p>{startup.university}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700">Description</h4>
                <CardDescription className="mt-1">
                  {startup.description}
                </CardDescription>
              </div>
              <div className="flex gap-4 mt-4">
                {startup.linkedin && (
                  <a 
                    href={startup.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    LinkedIn
                  </a>
                )}
                {startup.website && (
                  <a
                    href={startup.website}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}