import { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="h-full grid grid-rows-[60px_auto] bg-gradient-to-r from-gray-700 via-gray-900 to-black ">
      <header className="text-3xl font-['Pacifico'] pl-7 pt-4 bg-gradient-to-r from-red-600 via-red-800 to-red-400 inline-block text-transparent bg-clip-text tracking-wider">
        Flixify
      </header>
      <div className="grid grid-cols-[minmax(400px,_auto)_800px] grid-rows-[2fr_2fr] h-full">
        {children}
      </div>
    </main>
  )
}

export default Layout
