import SideNavigation from "../_components/SideNavigation"
export default function Layout({children}){
    return(
        <div className="grid grid-cols-12">
            <div className="col-span-2"><SideNavigation/></div>
            <div className="col-span-10 p-1">{children}</div>
        </div>
    )
}