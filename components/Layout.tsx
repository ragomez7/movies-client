import { FC, ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}
const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className="grid grid-cols-[minmax(300px,_auto)_300px_300px] h-full">
            {children}
        </div>
    )
};

export default Layout;