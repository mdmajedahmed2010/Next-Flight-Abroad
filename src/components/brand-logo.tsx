import { cn } from "@/lib/utils";
import { company } from "@/lib/site-data";

/**
 * NEXT FLIGHT ABROAD — Official Brand Logo Component.
 * Displays the verified logo badge (/logo.jpg) with modern aerodynamic styling,
 * brand colors (Deep Navy #0B132B, Cobalt Blue #2563EB, Crimson Red #E11D48, Metallic Gold #F59E0B),
 * and official English motto "Fly Towards Your Global Future ✈️".
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
          "relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-2xl bg-white border border-blue-400/40 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md p-1",
        )}
        style={{ width: size, height: size }}
      >
        <img
          src="/logo.jpg"
          alt={`${company.name} Official Logo`}
          width={size}
          height={size}
          className="h-full w-full object-contain rounded-xl"
          loading="eager"
        />
      </div>

      {withText && (
        <div className={cn("flex flex-col text-left min-w-0 leading-tight", textClassName)}>
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={cn(
                "font-display font-black text-base sm:text-lg md:text-xl tracking-tight uppercase",
                variant === "dark" ? "text-white" : "text-[#0B132B]",
              )}
            >
              NEXT<span className="text-rose-500"> FLIGHT</span>
            </span>
            <span
              className={cn(
                "font-display font-black text-[0.62rem] sm:text-[0.68rem] px-1.5 py-0.5 rounded-md tracking-widest uppercase",
                variant === "dark"
                  ? "bg-rose-500/20 text-rose-300 border border-rose-400/30"
                  : "bg-blue-50 text-blue-700 border border-blue-200 font-bold",
              )}
            >
              ABROAD
            </span>
          </div>
          <span
            className={cn(
              "font-medium text-[0.66rem] sm:text-[0.72rem] tracking-tight truncate max-w-[200px] xs:max-w-[250px] sm:max-w-none mt-0.5",
              variant === "dark" ? "text-blue-400" : "text-blue-600",
            )}
          >
            {company.tagline} ✈️
          </span>
          <span
            className={cn(
              "text-[0.52rem] sm:text-[0.58rem] tracking-wide font-medium truncate uppercase text-slate-400",
            )}
          >
            {subtitle || "Study Abroad · IELTS · Spoken English · Kids English"}
          </span>
        </div>
      )}
    </div>
  );
}
