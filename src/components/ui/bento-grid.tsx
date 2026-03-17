import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "relative row-span-1 glass-card p-6 flex flex-col justify-between overflow-hidden group/bento rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(var(--primary),0.2)] hover:border-primary/30",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 w-full h-full min-h-[6rem]">
                {header}
            </div>

            <div className="relative z-10 mt-6 group-hover/bento:-translate-y-1 transition-transform duration-300">
                {icon}
                <div className="font-sans font-bold text-foreground mb-2 mt-3 text-lg">
                    {title}
                </div>
                <div className="font-sans font-normal text-muted-foreground text-sm leading-relaxed">
                    {description}
                </div>
            </div>
        </div>
    );
};
