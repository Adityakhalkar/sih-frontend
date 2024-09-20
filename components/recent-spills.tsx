import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Badge } from "@/components/ui/badge"
  
  const recentSpills = [
    {
      id: "SPILL-1234",
      location: "Gulf of Mexico",
      date: "2023-06-15",
      status: "Reported",
      severity: "High",
    },
    {
      id: "SPILL-1235",
      location: "North Sea",
      date: "2023-06-14",
      status: "Cleaning",
      severity: "Medium",
    },
    {
      id: "SPILL-1236",
      location: "South China Sea",
      date: "2023-06-13",
      status: "Resolved",
      severity: "Low",
    },
    {
      id: "SPILL-1237",
      location: "Mediterranean Sea",
      date: "2023-06-12",
      status: "Detected",
      severity: "High",
    },
    {
      id: "SPILL-1238",
      location: "Persian Gulf",
      date: "2023-06-11",
      status: "Reported",
      severity: "Medium",
    },
  ]
  
  export function RecentSpills() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Spill ID</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Severity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentSpills.map((spill) => (
            <TableRow key={spill.id}>
              <TableCell className="font-medium">{spill.id}</TableCell>
              <TableCell>{spill.location}</TableCell>
              <TableCell>{spill.date}</TableCell>
              <TableCell>{spill.status}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    spill.severity === "High"
                      ? "destructive"
                      : spill.severity === "Medium"
                      ? "default"
                      : "secondary"
                  }
                >
                  {spill.severity}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }