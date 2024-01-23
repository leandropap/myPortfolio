'use client'
import {
    IconBrandJavascript, IconBrandReact, IconBrandNodejs, IconBrandRedux,
    IconBrandHtml5, IconBrandNextjs, IconBrandTailwind, IconBrandCss3, IconBrandMysql
} from "@tabler/icons-react"
import Image from "next/image"

export default function Skills() {
    const srcJava = "https://static-00.iconduck.com/assets.00/java-icon-2048x2048-5rbtj9s0.png"
    const srcSeq = "https://static-00.iconduck.com/assets.00/sequelize-icon-1772x2048-12s4v93p.png"
    const srcSpring = "https://static-00.iconduck.com/assets.00/spring-boot-icon-512x511-pza8zvqu.png"
    const srcPost = "https://static-00.iconduck.com/assets.00/postgresql-icon-497x512-d3thd9m5.png"


    return (
        <section className="flex-row text-lg mb-16">
            <div className="flex justify-center text-2xl mb-4">
                <p>Skills</p>
            </div>
            <div className="flex justify-center mb-4">
                <div className="flex items-center border-4 border-black rounded-lg mx-2 px-2 ">
                    <IconBrandJavascript />
                    <p>Javascript</p>
                </div>
                <div className="flex items-center border-4 border-black rounded-lg mx-2 px-2">
                    <IconBrandReact />
                    <p>React</p>
                </div>
                <div className="flex items-center border-4 border-black rounded-lg mx-2 px-2">
                    <IconBrandNextjs />
                    <p>Next.js</p>
                </div>
                <div className="flex items-center border-4 border-black rounded-lg mx-2 px-2">
                    <IconBrandRedux />
                    <p>Redux</p>
                </div>
                <div className="flex items-center border-4 border-black rounded-lg mx-2 px-2">
                    <IconBrandNodejs />
                    <p>Node.js</p>
                </div>
                <div className="flex items-center border-4 border-black rounded-lg mx-2 px-2">
                    <IconBrandHtml5 />
                    <p>HTML</p>
                </div>
            </div>

            <div className="flex justify-center text-lg">
                <div className="flex items-center border-4 border-black rounded-lg mx-2 px-2">
                    <IconBrandCss3 />
                    <p>CSS</p>
                </div>
                <div className="flex items-center border-4 border-black rounded-lg mx-2 px-2">
                    <Image loader={() => srcJava} src={srcJava} width={20} height={20} />
                    <p className="pl-1">Java</p>
                </div>
                <div className="flex items-center border-4 border-black rounded-lg mx-2 px-2">
                    <Image loader={() => srcSpring} src={srcSpring} width={20} height={20} />
                    <p className="pl-1">Spring Boot</p>
                </div>
                <div className="flex items-center border-4 border-black rounded-lg mx-2 px-2">
                    <Image loader={() => srcSeq} src={srcSeq} width={20} height={20} />
                    <p className="pl-1">Sequelize</p>
                </div>
                <div className="flex items-center border-4 border-black rounded-lg mx-2 px-2">
                    <Image loader={() => srcPost} src={srcPost} width={20} height={20} />
                    <p className="pl-1">PostgreSQL</p>
                </div>
                <div className="flex items-center border-4 border-black rounded-lg mx-2 px-2">
                    <IconBrandMysql />
                    <p>MySQL</p>
                </div>
            </div>
        </section >
    )
}