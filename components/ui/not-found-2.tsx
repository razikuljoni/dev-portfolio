import { Button } from "@/components/ui/button";
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyTitle,
} from "@/components/ui/empty";
import { CompassIcon, HomeIcon } from "lucide-react";

export function NotFoundComp() {
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
            <Empty>
                <EmptyHeader>
                    <EmptyTitle className="mask-b-from-20% mask-b-to-80% font-extrabold text-9xl">
                        404
                    </EmptyTitle>
                    <EmptyDescription className="-mt-8 text-nowrap text-foreground/80">
                        The page you're looking for might have been <br />
                        moved or doesn't exist.
                    </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                    <div className="flex gap-2">
                        <Button render={<a href="#" />} nativeButton={false}>
                            <HomeIcon className="size-4 mr-2" data-icon="inline-start" />
                            Go Home
                        </Button>

                        <Button variant="outline" render={<a href="#" />} nativeButton={false}>
                            <CompassIcon className="size-4 mr-2" data-icon="inline-start" /> Explore
                        </Button>
                    </div>
                </EmptyContent>
            </Empty>
        </div>
    );
}
