import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import React from "react";
const filterDate = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Indore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Fronted Developer", "Backend Developer", "Fullstack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-30k", "32-50k", "1lakh to 4lakh"],
  },
  {
    filterType: "Work mode",
    array: ["Part-time", "Full-Time", "Hybrid", "Work from home"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3"/>
      <RadioGroup>
        {
          filterDate.map((Date, index) => (
            <div>
              <h1 className="font-bold text-lg">
                {Date.filterType}
              </h1>
              {
                Date.array.map((item, index) => {
                  return (
                    <div className="flex items-center space-x-2 my-2">
                      <RadioGroupItem value = {item}/>
                      <Label>{item}</Label>
                      </div>
                  )
                })
              }

            </div>
          ))
        }
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
