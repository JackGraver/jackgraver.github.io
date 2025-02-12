import { motion } from 'framer-motion'
import React from 'react'

type Language = {
    language: string,
    proficiency: number
}

type LanguagesProps = {
    list: Language[],
}


export default function Languages({ list }: LanguagesProps) {
    return (
        <div>
            <p>Languages</p>
            <div className="flex flex-row flex-wrap">
                {list.map((l,) => (
                    <div key={l.language} className="flex flex-col mx-1 pr-3 mb-2 text-center">
                        <p>{l.language}</p>
                        <div className='flex flex-row'>
                            {Array.from({ length: 5 }, (_, i) => (
                                <motion.div
                                    key={i}
                                    className={`mr-1 w-10 h-1 ${i <= l.proficiency ? 'bg-green-400' : 'bg-gray-400'}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 * i, duration: 0.3 }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}