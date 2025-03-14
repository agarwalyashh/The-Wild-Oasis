import SideNavigation from "../_components/SideNavigation"
export default function Layout({children}){
    return(
        <div className="grid grid-cols-12">
            <div className="md:col-span-2 col-span-3"><SideNavigation/></div>
            <div className="md:col-span-10 col-span-9 py-2 px-4">{children}</div>
        </div>
    )
}