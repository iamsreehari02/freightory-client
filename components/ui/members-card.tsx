"use client";

import { Card, CardContent } from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import TextH6 from "@/components/typography/TextH6";
import { cn } from "@/lib/utils";
import Image from "next/image";
import TextP from "../typography/TextP";
import InlineDetail from "./inline-detail";
import { Button } from "./button";

type MembersCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  company?: string;
  location: string;
  address: string;
  phone: string;
  website: string;
  dotColor?: string;
  showDot?: boolean;
  roleBG?: string;
  roleFontColor?: string;
};

export default function MembersCard({
  name,
  role,
  avatarUrl,
  location,
  address,
  phone,
  website,
  dotColor,
  showDot = false,
  roleBG,
  roleFontColor,
}: MembersCardProps) {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-4 items-center">
            <Image
              src={avatarUrl}
              alt={name}
              className="w-16 h-16 rounded-full object-cover"
              width={64}
              height={64}
            />
            <Badge
              className="my-0"
              bgColor={roleBG}
              textColor={roleFontColor}
              dotColor={dotColor}
              showDot={showDot}
            >
              {role}
            </Badge>
          </div>

          <div className="text-right text-sm text-muted-foreground">
            {location}
          </div>
        </div>

        <TextH6>{name}</TextH6>

        <div className="text-sm text-muted-foreground space-y-2 mt-3">
          <TextP className="text-black text-lg font-medium">
            Address: <InlineDetail>{address}</InlineDetail>
          </TextP>
          <TextP className="text-black text-lg font-medium">
            Phone: <InlineDetail>{phone}</InlineDetail>
          </TextP>

          <TextP className="text-black text-lg font-medium">
            Website:{" "}
            <InlineDetail>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {website}
              </a>
            </InlineDetail>
          </TextP>
        </div>

        <Button variant="outline" className="mt-6 w-full">
          View Profile
        </Button>
      </CardContent>
    </Card>
  );
}
