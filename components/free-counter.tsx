"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MAX_FREE_COUNTS } from "@/constants";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface FreeCounterProps {
  apiLimitCount: number;
}
const FreeCounter = ({ apiLimitCount = 0 }: FreeCounterProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className="px-3 !mb-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6 ">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              className="h-3 "
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button className="w-full" variant="premium">
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;