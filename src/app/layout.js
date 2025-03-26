import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Fitora',
  description:
    'Fitora is your ultimate fitness destination, offering personalized training plans, group workouts, and state-of-the-art equipment. Achieve your fitness goals with expert trainers and a supportive community. Join Fitora today and get fit!',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/assets/favicon.png' type='image/png' />
        <meta
          name='Fitora'
          content='Fitora is your ultimate fitness destination, offering personalized training plans, group workouts, and state-of-the-art equipment. Achieve your fitness goals with expert trainers and a supportive community. Join Fitora today and get fit!'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
