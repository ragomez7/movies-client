import React, { FC } from 'react';

interface SectionTitleProps {
    title: string;
    size: "small" | "medium" | "large";
}
const SectionTitle: FC<SectionTitleProps> = ({ title, size }) => {
    const fontSize = size === "small" ? "lg" : size === "medium" ? "xl" : "2xl"  
    return (
        <p className={`text-${fontSize} font-bold pl-4 pb-3 text-white`}>
            {title}
        </p>
    )
}

export default SectionTitle;