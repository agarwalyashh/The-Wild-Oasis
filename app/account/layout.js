import SideNavigation from "../_components/SideNavigation"
export default function Layout({children}){
    return(
        <div className="grid sm:grid-cols-12 grid-cols-[0.35fr_0.65fr]">
            <div className="md:col-span-2 sm:col-span-3"><SideNavigation/></div>
            <div className="md:col-span-10 sm:col-span-9 py-2 px-4">{children}</div>
        </div>
    )
}