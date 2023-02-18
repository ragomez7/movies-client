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
      <div className="grid lg:grid-cols-[minmax(500px,_auto)_700px] sm:grid-cols-[365px_auto] sm1:grid-cols-[480px_auto] md:grid-cols-[480px_auto] md2:grid-cols-[700px_auto] sm2:grid-rows-[55fr_45fr] sm:grid-rows-[65fr_35fr] h-full">
        {children}
      </div>
    </main>
  )
}

export default Layout
