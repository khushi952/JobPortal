import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "khgujgbmwgfiyesgf";
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex item-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum eum
          nam amet quasi, quidem dolorum ea debitis! Magnam, impedit. Ratione!
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4 ">
        <Badge className={'text-blue-700 font-bold bg-white border border-grey-100'} varient='ghost'>12 Positions</Badge>
        <Badge className={'text-[#F83002] font-bold bg-white border border-grey-100'} varient='ghost'>Part Time</Badge>
        <Badge className={'text-[#7209b7] font-bold bg-white border border-grey-100'} varient='ghost'>24LPA</Badge>
      
      
      </div>
      <div className="flex items-center gap-4 mt-4">
      <Button onClick={() => navigate(`/description/${jobId}`)} variant="outline">Details</Button>

        <Button className="bg-[#722F37]">Save for later</Button>
      </div>
    </div> 
  );
};

export default Job;
