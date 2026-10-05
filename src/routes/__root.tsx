import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Button } from "@/components/ui/button";

function NotFoundComponent() { return <main className="status-page"><p>404 / NOT FOUND</p><h1>OFF THE MAP.</h1><Link to="/">RETURN HOME ↗</Link></main>; }
function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter(); useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <main className="status-page"><p>ERROR / SOMETHING SHIFTED</p><h1>THIS PAGE<br />DIDN'T LOAD.</h1><Button onClick={() => { router.invalidate(); reset(); }}>TRY AGAIN</Button><Link to="/">RETURN HOME ↗</Link></main>;
}
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "author", content: "Priyanshu" }, { property: "og:type", content: "website" }, { property: "og:site_name", content: "Priyanshu Portfolio" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "stylesheet", href: appCss }, { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }, { rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap" }], scripts: [{ src: "https://cdn.botpress.cloud/webchat/v5.0/inject.js" }, { src: "https://files.bpcontent.cloud/2026/10/04/06/20261004060916-KTRNYZCY.js", defer: true }] }),
  shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) { return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>; }
