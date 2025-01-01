import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const satellites = [
  { id: "SAT001", name: "EarthObserver-1", orbit: "LEO", status: "Active", lastContact: "2023-07-10 14:30 UTC" },
  { id: "SAT002", name: "OceanSentry-A", orbit: "GEO", status: "Active", lastContact: "2023-07-10 14:45 UTC" },
  { id: "SAT003", name: "CoastalGuard-1", orbit: "MEO", status: "Maintenance", lastContact: "2023-07-09 22:15 UTC" },
  { id: "SAT004", name: "DeepBlue-2", orbit: "LEO", status: "Active", lastContact: "2023-07-10 14:20 UTC" },
  { id: "SAT005", name: "ArcticWatch-B", orbit: "Polar", status: "Active", lastContact: "2023-07-10 13:55 UTC" },
];

// Map statuses to Badge variants
const badgeVariant: Record<
  string,
  "default" | "secondary" | "destructive" | "outline"
> = {
  Active: "default",
  Maintenance: "secondary",
  Inactive: "destructive",
};

export function SatelliteList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Satellite ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Orbit</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Contact</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {satellites.map((satellite) => (
          <TableRow key={satellite.id}>
            <TableCell className="font-medium">{satellite.id}</TableCell>
            <TableCell>{satellite.name}</TableCell>
            <TableCell>{satellite.orbit}</TableCell>
            <TableCell>
              <Badge
                variant={badgeVariant[satellite.status] || "default"}
              >
                {satellite.status}
              </Badge>
            </TableCell>
            <TableCell>{satellite.lastContact}</TableCell>
          </TableRow>
        ))}
      </TableBody>x
    </Table>
  );
}
