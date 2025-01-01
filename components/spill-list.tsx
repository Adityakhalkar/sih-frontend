import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const spills = [
  { id: "S001", location: "Gulf of Mexico", date: "2023-06-15", size: "Large", status: "Active" },
  { id: "S002", location: "North Sea", date: "2023-06-20", size: "Medium", status: "Contained" },
  { id: "S003", location: "South China Sea", date: "2023-06-25", size: "Small", status: "Cleaned" },
  { id: "S004", location: "Mediterranean Sea", date: "2023-06-30", size: "Large", status: "Active" },
  { id: "S005", location: "Persian Gulf", date: "2023-07-05", size: "Medium", status: "Contained" },
];

// Map statuses to valid Badge variants
const badgeVariant: Record<
  string,
  "default" | "secondary" | "destructive" | "outline"
> = {
  Active: "destructive",
  Contained: "secondary",
  Cleaned: "default",
};

export function SpillList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Spill ID</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {spills.map((spill) => (
          <TableRow key={spill.id}>
            <TableCell className="font-medium">{spill.id}</TableCell>
            <TableCell>{spill.location}</TableCell>
            <TableCell>{spill.date}</TableCell>
            <TableCell>{spill.size}</TableCell>
            <TableCell>
              <Badge
                variant={badgeVariant[spill.status] || "default"}
              >
                {spill.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
