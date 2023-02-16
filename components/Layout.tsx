import { FC, ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="h-full">
      <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black grid grid-cols-[minmax(400px,_auto)_800px] grid-rows-[3fr_2fr] h-full">
        {children}
      </div>
    </main>
  )
}

export default Layout
