import { cn } from "@/lib/utils";
import { company } from "@/lib/site-data";

/**
 * ABROAD BLUEPRINT — Official Brand Logo Component.
 * Displays the verified logo badge (/assets/abroad-blueprint-logo.jpg) with the royal blue 'A',
 * golden amber 'B' with graduation cap, official brand name "Abroad Blueprint",
 * and verified slogan "Start Here, Go Anywhere! 🌍".
 */
export function BrandLogo({
  className,
  size = 46,
  withText = true,
  textClassName,
  subtitle,
  variant = "light",
}: {
  className?: string;
  size?: number;
  withText?: boolean;
  textClassName?: string;
  subtitle?: string;
  variant?: "light" | "dark";
}) {
  return (
    <div className={cn("inline-flex items-center gap-2.5 sm:gap-3 select-none group", className)}>
      <div
        className={cn(
          "relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-2xl bg-white border-2 border-amber-400/80 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg p-0.5",
        )}
        style={{ width: size, height: size }}
      >
        <img
          src="/assets/abroad-blueprint-logo.jpg"
          alt={`${company.name} Official Logo`}
          width={size}
          height={size}
          className="h-full w-full object-contain rounded-xl"
          onError={(e) => {
            e.currentTarget.src = "/logo.jpg";
          }}
        />
      </div>

      {withText && (
        <div className={cn("flex flex-col text-left min-w-0 leading-tight", textClassName)}>
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={cn(
                "font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight",
                variant === "dark" ? "text-white" : "text-[#0052cc]",
              )}
            >
              Abroad <span className="text-[#f59e0b]">Blueprint</span>
            </span>
            <span
              className={cn(
                "font-display font-black text-[0.62rem] sm:text-[0.68rem] px-1.5 py-0.5 rounded-md tracking-wider uppercase",
                variant === "dark"
                  ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                  : "bg-blue-50 text-[#0052cc] border border-blue-200",
              )}
            >
              UK & BD
            </span>
          </div>
          <span
            className={cn(
              "font-display font-extrabold text-[0.62rem] sm:text-[0.68rem] tracking-[0.08em] uppercase truncate max-w-[200px] xs:max-w-[250px] sm:max-w-none mt-0.5",
              variant === "dark" ? "text-amber-400" : "text-amber-600",
            )}
          >
            {company.tagline || "Start Here, Go Anywhere! 🌍"}
          </span>
          <span
            className={cn(
              "text-[0.52rem] sm:text-[0.58rem] tracking-[0.03em] font-semibold truncate",
              variant === "dark" ? "text-slate-400" : "text-slate-500",
            )}
          >
            {subtitle || "British Council Certified · Chittagong & UK"}
          </span>
        </div>
      )}
    </div>
  );
}
