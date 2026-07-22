import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-chai-orange">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-chai-muted">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-5 py-2.5 text-sm font-bold text-[#1a0e00]">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-chai-muted">Something went wrong on our end.</p>
        <div className="mt-6 flex gap-2 justify-center">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-chai-orange px-5 py-2 text-sm font-bold text-[#1a0e00]">Try again</button>
          <a href="/" className="rounded-full border border-chai-orange/40 px-5 py-2 text-sm">Go home</a>
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
      { title: "Chaiway Café Franchise | Low Investment Tea Café Business in India" },
      { name: "description", content: "Start your own Chaiway Café franchise with low investment, no royalty charges, POS-enabled operations, training support, and a mass-market tea café menu." },
      { name: "keywords", content: "Chaiway franchise, tea cafe franchise India, chai franchise, low investment cafe franchise, no royalty franchise, tea business opportunity, cafe franchise Maharashtra, chai cafe franchise under 10 lakh, affordable cafe franchise, food franchise India" },
      { name: "author", content: "Foodlok Foods & Beverages Pvt. Ltd." },
      { property: "og:title", content: "Chaiway Café Franchise | Low Investment Tea Café Business in India" },
      { property: "og:description", content: "Start your own Chaiway Café franchise with low investment, no royalty charges, POS-enabled operations, training support, and a mass-market tea café menu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Chaiway Café Franchise | Low Investment Tea Café Business in India" },
      { name: "twitter:description", content: "Start your own Chaiway Café franchise with low investment, no royalty charges, POS-enabled operations, training support, and a mass-market tea café menu." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d9aa7920-f270-4cf8-b7ad-1337b00b9478/id-preview-20b46a4f--9b2ccea2-e51c-4a71-86ff-9782de526f15.lovable.app-1781425288119.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d9aa7920-f270-4cf8-b7ad-1337b00b9478/id-preview-20b46a4f--9b2ccea2-e51c-4a71-86ff-9782de526f15.lovable.app-1781425288119.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Poppins:wght@600;700;800;900&family=Caveat:wght@700&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Chaiway Café",
        legalName: "Foodlok Foods & Beverages Pvt. Ltd.",
        url: "https://www.chaiwaychai.com",
        email: "info@chaiwaychai.com",
        telephone: "+919673836999",
        address: { "@type": "PostalAddress", streetAddress: "Opp. Bharat Petrol Pump, Malegaon Road", addressLocality: "Nanded", postalCode: "431605", addressCountry: "IN" },
      })},
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="pb-16 sm:pb-0">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </QueryClientProvider>
  );
}
