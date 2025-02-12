import React from 'react'
import { motion } from "framer-motion"

type AboutListProps = {
    list: string[],
    delay: number
}


export default function AboutList({ list, delay }: AboutListProps) {
    return (
        <div className='flex flex-row flex-wrap mb-8'>
            {list.map((l, index) => (
                <motion.div
                    key={l}
                    className="rounded-md border-2 border-zinc-400 min-w-28 text-center mx-1 px-3 mb-2 hover:shimmer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index * 0.2) + delay, duration: 0.3 }}
                >
                    {l}
                </motion.div>
            ))}
        </div>
    )
}