import React from 'react'

interface SectionTitleProps {
  title: string
  size: 'small' | 'medium' | 'large'
}
const SectionTitle = ({ title, size }: SectionTitleProps) => {
  const fontSize = size === 'small' ? 'lg' : size === 'medium' ? 'xl' : '2xl'
  return (
    <p
      className={`text-${fontSize} font-bold xs:pl-0 xs:pb-1 sm:pb-2 mt-2 text-white text-shadow-title`}
    >
      {title}
    </p>
  )
}

export default SectionTitle
