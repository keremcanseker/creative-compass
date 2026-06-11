import {
  TrendingUp,
  Search,
  PenTool,
  Code2,
  Workflow,
  BarChart3,
  Cpu,
  Layers,
  LineChart,
  ArrowRight,
  ArrowUpRight,
  Check,
  Star,
  Sparkles,
  Compass,
  type LucideProps,
} from "lucide-react";

const registry = {
  TrendingUp,
  Search,
  PenTool,
  Code2,
  Workflow,
  BarChart3,
  Cpu,
  Layers,
  LineChart,
  ArrowRight,
  ArrowUpRight,
  Check,
  Star,
  Sparkles,
  Compass,
} as const;

export type IconName = keyof typeof registry;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = registry[name];
  return <Cmp {...props} />;
}
