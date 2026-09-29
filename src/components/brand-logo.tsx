import { cn } from "@/lib/utils";
import { company } from "@/lib/site-data";

/**
 * ONETECH EDUCATION — Official Brand Logo Component.
 * Displays the verified logo badge (/logo.jpg) with the circular red emblem,
 * official brand name "ONETECH EDUCATION", and the verified tagline "CONNECTING POSSIBILITIES".
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
          "relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-xl bg-white border border-slate-200/90 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:shadow-md p-0.5",
        )}
        style={{ width: size, height: size }}
      >
        <img
          src="/logo.jpg"
          alt={`${company.name} Official Logo`}
          width={size}
          height={size}
          className="h-full w-full object-contain rounded-lg"
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
                "font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight text-[#dc2626]",
              )}
            >
              ONETECH
            </span>
            <span
              className={cn(
                "font-display font-extrabold tracking-tight text-lg sm:text-xl md:text-2xl",
                variant === "dark" ? "text-white" : "text-[#0f172a]",
              )}
            >
              EDUCATION
            </span>
          </div>
          <span
            className={cn(
              "font-display font-bold text-[0.62rem] sm:text-[0.68rem] tracking-[0.08em] uppercase truncate max-w-[200px] xs:max-w-[250px] sm:max-w-none mt-0.5",
              variant === "dark" ? "text-red-400" : "text-[#dc2626]",
            )}
          >
            {company.tagline || "CONNECTING POSSIBILITIES"}
          </span>
          <span
            className={cn(
              "text-[0.52rem] sm:text-[0.58rem] tracking-[0.05em] font-semibold truncate",
              variant === "dark" ? "text-slate-400" : "text-slate-500",
            )}
          >
            {subtitle || "Mirpur-10, Dhaka · Japan Specialist"}
          </span>
        </div>
      )}
    </div>
  );
}
