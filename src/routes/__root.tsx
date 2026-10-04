import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RegisterModalProvider } from "@/components/register-modal";
import { ChatWidget } from "@/components/chat-widget";
import { MobileDock } from "@/components/mobile-dock";
import { company } from "@/lib/site-data";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary text-xs py-2 px-5">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please try refreshing or head back to the home page.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary text-xs py-2 px-5 cursor-pointer"
          >
            Try again
          </button>
          <a href="/" className="btn-secondary text-xs py-2 px-5">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: company.legalName },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: company.name },
      {
        property: "og:title",
        content: "Next Flight Abroad | Gateway to Global Education & Language Academy",
      },
      {
        property: "og:description",
        content:
          "Next Flight Abroad: Official Study Abroad Admissions (South Korea, Greece, Malta, UK, USA, Canada, Australia) with 'No Visa, No Payment' contract guarantee, plus premier IELTS & Language Academy. Head Office: Khilgaon, Dhaka.",
      },
      { property: "og:image", content: "/banner.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Next Flight Abroad — Gateway to Global Education",
      },
      {
        name: "twitter:description",
        content:
          "Next Flight Abroad Khilgaon, Dhaka: Complete Study Abroad advisory, 'No Visa, No Payment' contract guarantee, IELTS Band 7.5+, Spoken English, and Kids Academy.",
      },
      { name: "twitter:image", content: "/banner.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo.jpg", type: "image/jpeg" },
      { rel: "apple-touch-icon", href: "/logo.jpg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: company.legalName,
          alternateName: "Next Flight Abroad (@nextflightabroad)",
          slogan: company.slogan,
          description:
            "Next Flight Abroad is an authorized overseas higher education consultancy and premier language academy headquartered at 338/14, Block-C, Khilgaon, Taltola, Dhaka-1219, Bangladesh (Beside Ansar Head Office). Specializing in university admissions for South Korea (Kyungsung University), Greece (100% Risk-Free), Malta, UK, USA, Canada, Australia, contract-backed 'No Visa, No Payment' facility, and comprehensive IELTS, Spoken English & Kids English programs.",
          foundingDate: "Verified Consultancy",
          areaServed: ["Dhaka", "Chittagong", "Sylhet", "Bangladesh", "Worldwide"],
          email: company.email,
          telephone: company.phones,
          openingHours: "Sa-Th 09:30-19:30",
          sameAs: [company.social.facebook, company.social.youtube],
          hasMap: company.mapsUrl,
          geo: {
            "@type": "GeoCoordinates",
            latitude: company.geo.lat,
            longitude: company.geo.lng,
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: company.address.full,
            addressLocality: company.address.city,
            postalCode: company.address.postalCode,
            addressCountry: "BD",
          },
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen w-full overflow-x-hidden bg-background font-sans antialiased text-foreground selection:bg-blue-600 selection:text-white">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <RegisterModalProvider>
        <div className="flex min-h-screen w-full flex-col bg-background overflow-x-hidden">
          <SiteHeader />
          <main className="flex-1 w-full overflow-x-hidden">
            <Outlet />
          </main>
          <SiteFooter />
          <ChatWidget />
          <MobileDock />
        </div>
      </RegisterModalProvider>
    </QueryClientProvider>
  );
}
