"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = ({links}) => {

    const path = usePathname();

    return (
        <nav>
            {links.map((item, index) => <Link className={`navItem ${item.link === path ? "active" : ""}`} key={index} href={item.link}>{item.name}</Link>)}
        </nav>
    )
}

export default Navigation;