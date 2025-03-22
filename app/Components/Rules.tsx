"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { ShineBorder } from "../../components/magicui/shine-border";
const rule=[
    'Maximum 4 per Team',
    'Abstract must be feasbile',
    'All the objectives given in abstract should be showcased during Project Demo'
]
export function Rules() {
  return (
    <Card className="relative overflow-hidden bg-transparent my-5 text-white w-[90%] max-w-2xl p-6 border border-gray-700 rounded-xl backdrop-blur-md shadow-lg shadow-purple-500/30">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />

      {/* Header */}
      <CardContent className="relative z-10 space-y-2">
        <h1 className="text-3xl font-bold">
          Rules for the Project Demo
        </h1>

        {/* Description */}
        <ol className="list-decimal text-lg" >
          {
            rule.map((item,index)=>{
              return <li key={index} className="text-gray-300">{item}</li>
            })
          }
        </ol>
      </CardContent>
      <CardFooter className="relative z-10 flex justify-between items-center border-t border-gray-700 pt-4">
        <span className="text-sm text-gray-400">📅 Abstract Submission Starts from: 24th March</span>
        <span className="text-sm text-gray-400">⏳ Deadline: 27th March</span>
      </CardFooter>
    </Card>
  );
}
