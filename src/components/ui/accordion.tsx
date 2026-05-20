"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import * as React from "react";

import { cn } from "@/src/lib/utils";

const Accordion = AccordionPrimitive.Root;

type AccordionItemProps = React.ComponentPropsWithRef<typeof AccordionPrimitive.Item>;

type AccordionTriggerProps = React.ComponentPropsWithRef<typeof AccordionPrimitive.Trigger>;

type AccordionContentProps = React.ComponentPropsWithRef<typeof AccordionPrimitive.Content>;

const AccordionItem = ({ className, ...props }: AccordionItemProps) => (
    <AccordionPrimitive.Item
        className={cn(
            "rounded-base overflow-x-hidden border-2 border-b border-border shadow-shadow",
            className,
        )}
        {...props}
    />
);

AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = ({ className, children, ...props }: AccordionTriggerProps) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            className={cn(
                "flex flex-1 items-center justify-between text-mtext border-border bg-main p-4 font-heading transition-all [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b-2",
                className,
            )}
            {...props}
        >
            {children}
            <ChevronDown className="size-5 shrink-0 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = ({ className, children, ...props }: AccordionContentProps) => (
    <AccordionPrimitive.Content
        className="overflow-hidden rounded-b-base bg-bw text-sm font-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn("p-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
