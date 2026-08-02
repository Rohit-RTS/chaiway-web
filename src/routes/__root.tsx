import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { Preloader } from "@/components/site/Preloader";
import { RouteLoadingBar } from "@/components/site/RouteLoadingBar";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl sm:text-7xl font-bold text-chai-orange">404</h1>
        <h2 className="mt-4 text-xl sm:text-2xl font-semibold">Page Not Found</h2>
        <p className="mt-2 text-sm text-chai-muted">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-chai-orange to-chai-gold px-6 py-3 text-sm font-bold text-[#1a0e00]">Go Back Home</Link>
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
        <h1 className="text-xl sm:text-2xl font-semibold">Something Went Wrong</h1>
        <p className="mt-2 text-sm text-chai-muted">We encountered an unexpected error. Please try again.</p>
        <div className="mt-6 flex gap-3 justify-center">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-chai-orange px-5 py-2.5 text-sm font-bold text-[#1a0e00]">Try Again</button>
          <a href="/" className="rounded-full border border-chai-orange/40 px-5 py-2.5 text-sm text-chai-cream">Go Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=5.0" },
      { name: "theme-color", content: "#080604" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { title: "Chaiway Café Franchise | Low Investment Tea Café Business in India" },
      { name: "description", content: "Start your own Chaiway Café franchise with low investment, zero royalty charges, POS-enabled operations, recipe training support, and a mass-market tea café menu loved across India." },
      { name: "keywords", content: "Chaiway franchise, tea cafe franchise India, chai franchise, low investment cafe franchise, no royalty franchise, tea business opportunity, cafe franchise Maharashtra, chai cafe franchise under 10 lakh, affordable cafe franchise, food franchise India, kullad chai franchise, cafe business in India" },
      { name: "author", content: "Foodlok Foods & Beverages Pvt. Ltd." },
      { name: "publisher", content: "Foodlok Foods & Beverages Pvt. Ltd." },
      { property: "og:site_name", content: "Chaiway Café Franchise" },
      { property: "og:title", content: "Chaiway Café Franchise | Low Investment Tea Café Business in India" },
      { property: "og:description", content: "Start your own Chaiway Café franchise with low investment, zero royalty charges, POS-enabled operations, recipe training support, and a mass-market tea café menu." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: "https://www.chaiwaychai.com/assets/logo.jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Chaiway Café — India's Affordable Tea Café Franchise" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@chaiwaychai" },
      { name: "twitter:title", content: "Chaiway Café Franchise | Low Investment Tea Café Business in India" },
      { name: "twitter:description", content: "Start your own Chaiway Café franchise with low investment, zero royalty charges, POS-enabled operations, recipe training support, and a mass-market tea café menu." },
      { name: "twitter:image", content: "https://www.chaiwaychai.com/assets/logo.jpeg" },
      { name: "twitter:image:alt", content: "Chaiway Café — India's Affordable Tea Café Franchise" },
    ],
    links: [
      { rel: "preload", href: "/assets/logo.jpeg", as: "image" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Poppins:wght@600;700;800;900&family=Caveat:wght@700&display=swap" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: "https://www.chaiwaychai.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://www.chaiwaychai.com/#organization",
              name: "Chaiway Café",
              legalName: "Foodlok Foods & Beverages Pvt. Ltd.",
              url: "https://www.chaiwaychai.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.chaiwaychai.com/assets/logo.jpeg",
                width: 512,
                height: 512,
              },
              image: "https://www.chaiwaychai.com/assets/logo.jpeg",
              email: "info@chaiwaychai.com",
              telephone: "+919673836999",
              founder: { "@type": "Person", name: "Aba Patil Londhe" },
              foundingDate: "2018",
              foundingLocation: {
                "@type": "Place",
                name: "Nanded, Maharashtra, India",
              },
              areaServed: "IN",
              numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 100 },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Opp. Bharat Petrol Pump, Malegaon Road",
                addressLocality: "Nanded",
                addressRegion: "Maharashtra",
                postalCode: "431605",
                addressCountry: "IN",
              },
              sameAs: [
                "https://wa.me/919673836999",
                "https://www.instagram.com/chaiway.india",
                "https://www.facebook.com/chaiwaycafe",
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://www.chaiwaychai.com/#website",
              url: "https://www.chaiwaychai.com",
              name: "Chaiway Café Franchise",
              publisher: { "@id": "https://www.chaiwaychai.com/#organization" },
              inLanguage: "en-IN",
            },
          ],
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
    <html lang="en" className="dark scroll-smooth">
      <head><HeadContent /></head>
      <body className="bg-[#080604] text-[#fff7e8] font-sans antialiased overflow-x-hidden selection:bg-chai-orange selection:text-chai-black">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// Scroll to top on route change
function ScrollToTop() {
  const { location } = useRouterState();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      prevPath.current = location.pathname;
    }
  }, [location.pathname]);

  return null;
}

// Optimized high-performance page transition wrapper (no CPU-thrashing blur filter)
const pageVariants = {
  initial: { opacity: 0, y: 8, scale: 0.995 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -6, scale: 0.995 },
};

const pageTransition = {
  duration: 0.25,
  ease: [0.22, 1, 0.36, 1] as const,
};

function AnimatedOutlet() {
  const { location } = useRouterState();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        style={{ willChange: "opacity, transform" }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <RouteLoadingBar />
      <ScrollToTop />
      {/* Global animated ambient background — fixed, behind everything */}
      <AnimatedBackground />
      <Header />
      <main className="pb-16 sm:pb-0 relative z-10 min-h-screen">
        <AnimatedOutlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </QueryClientProvider>
  );
}

