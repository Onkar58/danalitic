import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

interface StatCardsProps {
  totalQueries: number;
}

export function StatCards({ totalQueries }: StatCardsProps) {
  const stats = [
    {
      label: "Total Queries",
      value: totalQueries,
      icon: MessageSquare,
      color: "text-blue-600",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.label}
            className="p-6 border-border hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-tight">
                  {stat.value}
                </p>
              </div>
              <Icon className={`h-8 w-8 ${stat.color} opacity-80`} />
            </div>
          </Card>
        );
      })}
    </div>
  );
}
