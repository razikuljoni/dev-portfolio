"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { cn } from "@/src/lib/utils";

type AvatarProps = React.ComponentPropsWithRef<typeof AvatarPrimitive.Root>;

type AvatarImageProps = React.ComponentPropsWithRef<typeof AvatarPrimitive.Image>;

type AvatarFallbackProps = React.ComponentPropsWithRef<typeof AvatarPrimitive.Fallback>;

function Avatar({ className, ...props }: AvatarProps) {
    return (
        <AvatarPrimitive.Root
            className={cn("relative flex size-10 shrink-0 overflow-hidden rounded-full", className)}
            {...props}
        />
    );
}

Avatar.displayName = AvatarPrimitive.Root.displayName;

function AvatarImage({ className, ...props }: AvatarImageProps) {
    return (
        <AvatarPrimitive.Image className={cn("aspect-square size-full", className)} {...props} />
    );
}

AvatarImage.displayName = AvatarPrimitive.Image.displayName;

function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
    return (
        <AvatarPrimitive.Fallback
            className={cn(
                "flex size-full items-center justify-center rounded-full bg-muted",
                className,
            )}
            {...props}
        />
    );
}

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
