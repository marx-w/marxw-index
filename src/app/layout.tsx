import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css'
export const metadata: Metadata = {
  title: 'Marx Wang -- Software Engineer',
  description: 'Personal website of Marx Wang',
}
const Iansui = localFont({
  src: [
    {
      path: './fonts/Iansui/Iansui-Regular.ttf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './fonts/Iansui/Iansui-Regular.ttf',
      weight: 'normal',
      style: 'italic',
    }
  ],
  variable: '--font-iansui',
});
const FiraCode = localFont({
  src: [
    {
      path: './fonts/FiraCode/FiraCodeNerdFontMono-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/FiraCode/FiraCodeNerdFontMono-Light.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fonts/FiraCode/FiraCodeNerdFontMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/FiraCode/FiraCodeNerdFontMono-Regular.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/FiraCode/FiraCodeNerdFontMono-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/FiraCode/FiraCodeNerdFontMono-Medium.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/FiraCode/FiraCodeNerdFontMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/FiraCode/FiraCodeNerdFontMono-Bold.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-firacode',
});
const GenYoMin = localFont({
  src: [
    {
      path: './fonts/GenYoMin/ttf/GenYoMinTW-L.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinTW-L.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinJP-L.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinJP-L.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinTW-R.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinTW-R.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinJP-R.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinJP-R.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinTW-M.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinTW-M.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinJP-M.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinJP-M.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinTW-B.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinTW-B.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinJP-B.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/GenYoMin/ttf/GenYoMinJP-B.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-genyomin',
});
const ChenYuLuoYan = localFont({
  src: [
    {
      path: './fonts/ChenYuLuoYan/ChenYuLuoYan-Thin-Monospaced.ttf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './fonts/ChenYuLuoYan/ChenYuLuoYan-Thin-Monospaced.ttf',
      weight: 'normal',
      style: 'italic',
    },
  ],
  variable: '--font-chenyuluoyan',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${Iansui.variable} ${FiraCode.variable} ${GenYoMin.variable} ${ChenYuLuoYan.variable}`}>
      <body>{children}</body>
    </html>
  )
}
