import React from 'react';
import { technologies, languages } from "@/public/data/About.json"
import { motion } from "framer-motion"

export default function About() {
    const languagesDelay = 0.2 * technologies.frameworks.length;
    const conceptsDelaey = 0.2 * technologies.languages.length + languagesDelay;
    const otherDelay = 0.2 * technologies.concepts.length + conceptsDelaey;

    return (
        <div>
            <h1 className="text-6xl pb-6">Skills</h1>
            <div className="flex flex-row flex-wrap">
                {technologies.frameworks.map((f, index) => (
                    <motion.div
                        key={f}
                        className="rounded-md border-2 border-zinc-400 min-w-28 text-center mx-1 px-3 mb-2 hover:shimmer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.3 }}
                    >
                        {f}
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-row flex-wrap pt-3">
                {technologies.languages.map((l, index) => (
                    <motion.div
                        key={l}
                        className="rounded-md border-2 border-zinc-400 min-w-28 text-center mx-1 px-3 mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index * 0.2) + languagesDelay, duration: 0.3 }}
                    >
                        {l}
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-row flex-wrap pt-3">
                {technologies.concepts.map((c, index) => (
                    <motion.div
                        key={c}
                        className="rounded-md border-2 border-zinc-400 min-w-28 text-center mx-1 px-3 mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index * 0.2) + conceptsDelaey, duration: 0.3 }}
                    >
                        {c}
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-row flex-wrap pt-3">
                {technologies.other.map((o, index) => (
                    <motion.div
                        key={o}
                        className="rounded-md border-2 border-zinc-400 min-w-28 text-center mx-1 px-3 mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index * 0.2) + otherDelay, duration: 0.3 }}
                    >
                        {o}
                    </motion.div>
                ))}
            </div>

            <div className="flex flex-row flex-wrap">
                {languages.map((l) => (
                    <div key={l} className="rounded-md border-2 border-zinc-400 mx-1 px-3 mb-2">
                        {l}
                    </div>
                ))}
            </div>

        </div >
    )
}