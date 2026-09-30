import { cn } from "@/lib/utils";
import { company } from "@/lib/site-data";

/**
 * MILESTONE BEANIBAZAR (MICU) — Official Brand Logo Component.
 * Displays the verified logo badge (/loogo.jpg) with the green/cyan geometric 'm',
 * official brand name "MILESTONE", and verified slogan "GET READY FOR THE WORLD".
 */
export function BrandLogo({
  className,
  size = 48,
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
          "relative inline-flex items-center justify-center shrink-0 overflow-hidden rounded-full bg-slate-900 border-2 border-amber-400 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg p-0.5",
        )}
        style={{ width: size, height: size }}
      >
        <img
          src="/loogo.jpg"
          alt={`${company.name} Official Logo`}
          width={size}
          height={size}
          className="h-full w-full object-cover rounded-full"
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
                "font-display font-black text-lg sm:text-xl md:text-2xl tracking-tight text-[#0098da]",
              )}
            >
              MILESTONE
            </span>
            <span
              className={cn(
                "font-display font-black text-xs sm:text-sm px-1.5 py-0.5 rounded-md tracking-wider uppercase",
                variant === "dark" ? "bg-amber-400/20 text-amber-300 border border-amber-400/30" : "bg-slate-900 text-white",
              )}
            >
              MICU
            </span>
          </div>
          <span
            className={cn(
              "font-display font-bold text-[0.62rem] sm:text-[0.68rem] tracking-[0.1em] uppercase truncate max-w-[200px] xs:max-w-[250px] sm:max-w-none mt-0.5",
              variant === "dark" ? "text-amber-400" : "text-emerald-600 font-extrabold",
            )}
          >
            {company.tagline || "GET READY FOR THE WORLD"}
          </span>
          <span
            className={cn(
              "text-[0.52rem] sm:text-[0.58rem] tracking-[0.05em] font-medium truncate",
              variant === "dark" ? "text-slate-400" : "text-slate-500",
            )}
          >
            {subtitle || "Beanibazar, Sylhet · IELTS & Study Abroad"}
          </span>
        </div>
      )}
    </div>
  );
}
