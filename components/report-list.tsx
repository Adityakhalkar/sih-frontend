import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const reports = [
  { id: "R001", name: "Monthly Spill Summary", date: "2023-06-01", type: "Monthly" },
  { id: "R002", name: "Gulf of Mexico Incident Report", date: "2023-06-15", type: "Incident" },
  { id: "R003", name: "Q2 2023 Analysis", date: "2023-07-01", type: "Quarterly" },
  { id: "R004", name: "North Sea Cleanup Progress", date: "2023-07-10", type: "Progress" },
  { id: "R005", name: "Annual Environmental Impact", date: "2023-12-31", type: "Annual" },
];

export function ReportList() {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white p-4 rounded-md shadow-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="dark:bg-gray-800">Report ID</TableHead>
            <TableHead className="dark:bg-gray-800">Name</TableHead>
            <TableHead className="dark:bg-gray-800">Date</TableHead>
            <TableHead className="dark:bg-gray-800">Type</TableHead>
            <TableHead className="dark:bg-gray-800">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id} className="dark:hover:bg-gray-700 hover:bg-gray-100">
              <TableCell className="font-medium">{report.id}</TableCell>
              <TableCell>{report.name}</TableCell>
              <TableCell>{report.date}</TableCell>
              <TableCell>{report.type}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="dark:border-gray-600 dark:text-gray-300">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
