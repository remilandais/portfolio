import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import SplitText from "gsap/SplitText"
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin"
import * as React from "react"

interface HeroProps {
    className?: string
}


gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrambleTextPlugin)

export const Hero: React.FC<HeroProps> = ({ className }) => {

    useGSAP(() => {
        gsap.from(".split", {
            duration: 1,
            y: 100,
            autoAlpha: 0,
            stagger: 0.05
        });
        gsap.to("#hero-text", { duration: 2, scrambleText: "I'm ReMi" });//or customize things:

    });
    return (
        <div className="split text-white text-8xl  ">
            <h1 className="font-monotalic">HELLO WorLd</h1>
            <h2 id="hero-text"></h2>
        </div>
    )
}
