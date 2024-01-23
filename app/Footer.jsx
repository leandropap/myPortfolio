import { IconBrandLinkedin, IconBrandGithub, IconMail } from "@tabler/icons-react"

export default function Footer() {
    const date = new Date()

    return (
        <footer className="flex items-center">
            <p className="pr-2"> © {date.getFullYear()} Leandro Pappalardo </p>
            <div className="flex justify-center">
                <a href="mailto:leandropap@gmail.com?Subjecto=Contacto%20desarrollador" target="_blank" rel="noopener noreferrer">
                    <IconMail size="36" stroke="1" />
                </a>
                <a href="https://www.linkedin.com/in/leandro-pappalardo/" target="_blank" rel="noopener noreferrer">
                    <IconBrandLinkedin size="36" stroke="1" />
                </a>
                <a href="https://github.com/leandropap" target="_blank" rel="noopener noreferrer">
                    <IconBrandGithub size="36" stroke="1" />
                </a>
            </div>
        </footer>
    )
}