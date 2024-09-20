import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const vessels = [
  { id: "V001", name: "Oceanic Explorer", type: "Oil Tanker", location: "Gulf of Mexico", status: "Active" },
  { id: "V002", name: "Northern Star", type: "Cargo Ship", location: "North Sea", status: "Docked" },
  { id: "V003", name: "Pacific Voyager", type: "Container Ship", location: "South China Sea", status: "Active" },
  { id: "V004", name: "Mediterranean Trader", type: "Oil Tanker", location: "Mediterranean Sea", status: "Active" },
  { id: "V005", name: "Arabian Nights", type: "LNG Carrier", location: "Persian Gulf", status: "Maintenance" },
];

export function VesselList() {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-4 rounded-md shadow-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="dark:bg-gray-800">Vessel ID</TableHead>
            <TableHead className="dark:bg-gray-800">Name</TableHead>
            <TableHead className="dark:bg-gray-800">Type</TableHead>
            <TableHead className="dark:bg-gray-800">Location</TableHead>
            <TableHead className="dark:bg-gray-800">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vessels.map((vessel) => (
            <TableRow key={vessel.id} className="dark:hover:bg-gray-700 hover:bg-gray-100">
              <TableCell className="font-medium">{vessel.id}</TableCell>
              <TableCell>{vessel.name}</TableCell>
              <TableCell>{vessel.type}</TableCell>
              <TableCell>{vessel.location}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    vessel.status === "Active"
                      ? "default"
                      : vessel.status === "Docked"
                      ? "secondary"
                      : "outline"
                  }
                  className={`${
                    vessel.status === "Active"
                      ? "bg-green-500 text-white dark:bg-green-600"
                      : vessel.status === "Docked"
                      ? "bg-blue-500 text-white dark:bg-blue-600"
                      : "bg-yellow-500 text-black dark:bg-yellow-600"
                  }`}
                >
                  {vessel.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
