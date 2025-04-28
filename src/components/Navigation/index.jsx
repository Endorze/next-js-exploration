"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navigation = () => {

    const path = usePathname();

    const pages = [
        {
            name: "home",
            link: "/"
        },
        {
            name: "alliances",
            link: "/alliances"
        },
        {
            name: "evilheroes",
            link: "/evilheroes"
        },
        {
            name: "spiderman",
            link: "/spiderman"
        },
        {
            name: "batman",
            link: "/batman"
        },
    ]

    return (
        <nav>
            {pages.map((item, index) => <Link className={`navItem ${item.link === path ? "active" : ""}`} key={index} href={item.link}>{item.name}</Link>)}
        </nav>
    )
}

export default Navigation;