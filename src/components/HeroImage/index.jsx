import Image from "next/image"

const HeroImage = ({imgUrl}) => {
    return (
        <Image src={imgUrl} alt="Image" height={1000} width={750} style = {{width: "100%", height: "auto"}} sizes="
        (max-width: 400px) 100vw,
        (max-width:1024px) 50vw,
        25vw
        "/>
    )
}

export default HeroImage;