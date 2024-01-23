import Image from "next/image"

export default function Intro() {
    const srcPic = 'https://i.ibb.co/47vbRgH/1661299590138.jpg'

    return (
        <section className="flex-col my-5">
            <div className="flex justify-center">
                <Image loader={() => srcPic} src={srcPic} width={200} height={200} className=" rounded-full border-slate-500 border-2 flex justify-center" />
            </div>
            <p className=" flex justify-center my-1 text-xl">Hi! I'm Leandro.</p>
            <p className="flex justify-center text-center">
                I'm a fullstack web developer based in Argentina. I specialize in building (and occasionally designing)
                exceptional websites, applications, and everything in between.
            </p>
        </section>
    )
}