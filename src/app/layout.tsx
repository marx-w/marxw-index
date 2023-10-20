import type { Metadata } from 'next';
import './globals.css';
import React from "react";
export const metadata: Metadata = {
  title: 'Marx Wang -- Software Engineer',
  description: 'Personal website of Marx Wang',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
