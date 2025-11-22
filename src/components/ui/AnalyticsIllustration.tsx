import { LineChartIllustration } from "../../../public/images/LineChartIllustration"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../Table"

const projects = [
  {
    name: "NexusFlow Dashboard",
    value: "7 weeks",
    expected: "10 weeks",
    budget: "$182k",
    velocity: "+31%",
    quality: "+18%",
    satisfaction: "98%",
    bgColor: "bg-orange-500",
    changeType: "positive",
  },
  {
    name: "Aether Mobile App",
    value: "5 weeks",
    expected: "8 weeks",
    budget: "$98k",
    velocity: "+42%",
    quality: "+22%",
    satisfaction: "100%",
    bgColor: "bg-emerald-500",
    changeType: "positive",
  },
  {
    name: "Legacy Bank Portal",
    value: "12 weeks",
    expected: "10 weeks",
    budget: "$248k",
    velocity: "–18%",
    quality: "+4%",
    satisfaction: "89%",
    bgColor: "bg-blue-500",
    changeType: "mixed",
  },
]

export default function ProjectPerformance() {
  return (
    <div className="h-150 shrink-0 overflow-hidden mask-[radial-gradient(white_30%,transparent_90%)] perspective-[4000px] perspective-origin-center">
      <div className="-translate-y-10 -translate-z-10 rotate-x-10 rotate-y-20 -rotate-z-10 transform-3d">
        {/* Heading */}
        <h3 className="text-sm text-gray-500">Project Delivery Performance</h3>
        <p className="mt-1 text-3xl font-semibold text-gray-900">
          93% faster than industry average
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-emerald-700">+37% velocity</span>{" "}
          <span className="font-normal text-gray-500">Last 6 months</span>
        </p>

        {/* Chart */}
        <LineChartIllustration className="mt-8 w-full min-w-200 shrink-0" />

        {/* Table */}
        <TableRoot className="mt-6 min-w-200">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Project</TableHeaderCell>
                <TableHeaderCell className="text-right">Delivered</TableHeaderCell>
                <TableHeaderCell className="text-right">Expected</TableHeaderCell>
                <TableHeaderCell className="text-right">Budget</TableHeaderCell>
                <TableHeaderCell className="text-right">Velocity</TableHeaderCell>
                <TableHeaderCell className="text-right">Quality</TableHeaderCell>
                <TableHeaderCell className="text-right">Client NPS</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((p) => (
                <TableRow key={p.name}>
                  <TableCell className="font-medium text-gray-900">
                    <div className="flex space-x-3">
                      <span
                        className={p.bgColor + " w-1 shrink-0 rounded"}
                        aria-hidden="true"
                      />
                      <span>{p.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{p.value}</TableCell>
                  <TableCell className="text-right">{p.expected}</TableCell>
                  <TableCell className="text-right">{p.budget}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        p.changeType === "positive" ? "text-emerald-700" : "text-red-700"
                      }
                    >
                      {p.velocity}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="text-emerald-700">{p.quality}</span>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {p.satisfaction}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableRoot>
      </div>
    </div>
  )
}