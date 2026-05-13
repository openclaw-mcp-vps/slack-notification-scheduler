import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Notification Scheduler – Schedule Messages for Optimal Response",
  description: "Analyze team activity patterns and schedule Slack notifications when recipients are most likely to respond quickly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="99a85de8-1dc4-4c34-828f-ba327b421ceb"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
