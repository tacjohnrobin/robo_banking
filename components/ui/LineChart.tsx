"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import DateSelect from "./DateSelect";

const chartData = [
  { day: "Jan-11", Income: 10000, Expenditure: 19000 },
  { day: "Jan-12", Income: 15000, Expenditure: 7000 },
  { day: "Jan-13", Income: 7000, Expenditure: 14000 },
  { day: "Jan-14", Income: 28000, Expenditure: 5000 },
  { day: "Jan-15", Income: 15000, Expenditure: 23000 },
  { day: "Jan-16 ", Income: 28000, Expenditure: 14000 },
  { day: "Jan-17 ", Income: 25000, Expenditure: 17000 },
  { day: "Jan-18 ", Income: 22000, Expenditure: 14000 },
];

const chartConfig = {
  Income: {
    label: "Income",
    color: "#E26822",
  },
  Expenses: {
    label: "Expenses",
    color: "CBDAF4",
  },
} satisfies ChartConfig;

export function Expenditure() {
//  {
//  labelKey,
//  nameKey: string,
//  indicator,
//}: LineChartprops
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="w-full flex justify-between items-center">
          <div>
            <CardTitle className="font-manrope-bold text-20">
              Money Flow
            </CardTitle>
            <CardDescription> </CardDescription>
          </div>
          <div>
            <DateSelect />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full max-h-[250px]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} />

            <XAxis
              dataKey="day"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 6)}
            />

            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
            <Line
              dataKey="Income"
              type="monotone"
              stroke="#E26822"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="Expenditure"
              type="monotone"
              stroke="#CBDAF4"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none pt-2">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
