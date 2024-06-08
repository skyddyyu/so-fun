import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "soFun——构建快乐，发现趣味",
  description: "一个工具网站，用于创建有用好玩的实用工具。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zhCN">
      <body>{children}</body>
    </html>
  );
}
