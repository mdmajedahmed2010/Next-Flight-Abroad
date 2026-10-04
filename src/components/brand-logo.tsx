import { cn } from "@/lib/utils";
import { company } from "@/lib/site-data";

/**
 * NEXTFLIGHT BD — Official Brand Logo Component.
 * Displays the verified logo badge (/assets/nextflight-logo.jpg) with modern aerodynamic styling,
 * brand colors (Deep Navy #0F2B48, Flight Blue #0099E5, Sunset Orange #F97316),
 * and verified tagline "আপনার ভ্রমণের সাথী ✈️".
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
          "relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-2xl bg-white border border-sky-400/40 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md p-1",
        )}
        style={{ width: size, height: size }}
      >
        <img
          src="/assets/nextflight-logo.jpg"
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
                "font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight lowercase",
                variant === "dark" ? "text-white" : "text-[#0f2b48]",
              )}
            >
              next<span className="text-[#0099e5]">flight</span>
            </span>
            <span
              className={cn(
                "font-display font-black text-[0.62rem] sm:text-[0.68rem] px-1.5 py-0.5 rounded-md tracking-wider uppercase",
                variant === "dark"
                  ? "bg-sky-500/20 text-sky-300 border border-sky-400/30"
                  : "bg-sky-50 text-[#0f2b48] border border-sky-200 font-bold",
              )}
            >
              BD
            </span>
          </div>
          <span
            className={cn(
              "font-bangla font-semibold text-[0.68rem] sm:text-[0.74rem] tracking-[0.02em] truncate max-w-[200px] xs:max-w-[250px] sm:max-w-none mt-0.5",
              variant === "dark" ? "text-sky-300" : "text-[#0099e5]",
            )}
          >
            {company.taglineBangla || "আপনার ভ্রমণের সাথী ✈️"}
          </span>
          <span
            className={cn(
              "text-[0.52rem] sm:text-[0.58rem] tracking-[0.03em] font-medium truncate",
              variant === "dark" ? "text-slate-400" : "text-slate-500",
            )}
          >
            {subtitle || "Study Abroad · Work Permits · Air Ticketing · IELTS"}
          </span>
        </div>
      )}
    </div>
  );
}

