import { FC, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}
const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className="grid grid-cols-[minmax(800px,_auto)_800px] grid-rows-[3fr_2fr] h-full">
            {children}
        </div>
    )
};

export default Layout;