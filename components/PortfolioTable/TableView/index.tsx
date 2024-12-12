import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { Startup } from '..'

interface TableViewProps {
  data: Startup[]
  onStartupSelect: (startup: Startup) => void
}

const columns = [
  { accessorKey: 'name', header: 'Startup Name' },
  { accessorKey: 'sector', header: 'Sector' },
  { accessorKey: 'status', header: 'Status' },
  { accessorKey: 'founders', header: 'Founders' },
  { accessorKey: 'university', header: 'University' },
//   { accessorKey: 'description', header: 'Description' },
  { accessorKey: 'linkedin', header: 'LinkedIn' },
  { accessorKey: 'website', header: 'Website' },
]

export default function TableView({ data, onStartupSelect }: TableViewProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead 
                key={column.accessorKey}
                className="w-[16.67%]"
              >
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((startup) => (
            <TableRow 
              key={startup.name}
              className="cursor-pointer hover:bg-gray-50"
              onClick={() => onStartupSelect(startup)}
            >
              {columns.map((column) => (
                <TableCell 
                  key={column.accessorKey}
                  className="w-[16.67%]"
                >
                  {startup[column.accessorKey as keyof Startup]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
