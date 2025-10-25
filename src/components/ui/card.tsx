import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn(
      "relative rounded-2xl p-6 bg-[hsl(240,15%,9%)] text-card-foreground overflow-hidden",
      "shadow-[0px_-16px_24px_0px_rgba(255,255,255,0.25)_inset]",
      "before:absolute before:inset-0 before:-z-10 before:rounded-2xl",
      "before:bg-gradient-to-br before:from-[hsl(240,15%,9%)] before:via-[hsl(240,15%,9%)] before:to-[hsl(240,15%,9%)]",
      "after:absolute after:inset-[-1px] after:-z-20 after:rounded-2xl",
      "after:bg-gradient-to-b after:from-white/40 after:to-white/10",
      "hover:shadow-[0_0_40px_hsl(263,70%,60%/0.3)] transition-shadow duration-300",
      className
    )} 
    style={{
      backgroundImage: `
        radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
        radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
        radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
        radial-gradient(at 0% 64%, hsl(263, 70%, 30%) 0px, transparent 85%),
        radial-gradient(at 41% 94%, hsl(263, 70%, 45%) 0px, transparent 85%),
        radial-gradient(at 100% 99%, hsl(263, 70%, 20%) 0px, transparent 85%)
      `
    }}
    {...props} 
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
