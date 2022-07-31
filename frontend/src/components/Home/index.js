import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import { Player } from '@lottiefiles/react-lottie-player';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="w-fit flex justify-center m-auto my-36 rotate-45">
            <div className="mr-2">
                <motion.div
                    whileHover={{
                        borderRadius: ['0%', '100%', '0%'],
                        scale: [1, 1.25, 1.2]
                    }}
                    className="w-72 h-72 flex relative justify-center items-center bg-slate-500/20 hover:bg-sky-500/30 ease-in duration-200 shadow-xl cursor-pointer mb-2 border-t border-l border-sky-400"
                    onClick={() => navigate('/wave')}
                >
                    <Player
                        autoplay
                        loop
                        src="https://assets10.lottiefiles.com/private_files/lf30_ikcobyoq.json"
                        className="w-60 h-60 -rotate-45"
                    />
                </motion.div>
                <motion.div
                    whileHover={{
                        borderRadius: ['0%', '100%', '0%'],
                        scale: [1, 1.25, 1.2]
                    }}
                    className="w-72 h-72 flex relative justify-center items-center bg-slate-500/20 hover:bg-sky-500/30 ease-in duration-200 shadow-xl cursor-pointer mb-2 border-l border-b border-sky-400"
                >
                    <div className="w-44 h-44 flex justify-center items-center bg-slate-500/20 rounded-full -rotate-45">
                        <h1 className="text-3xl font-black">Wave</h1>
                    </div>
                </motion.div>
            </div>
            <div>
                <motion.div
                    whileHover={{
                        borderRadius: ['0%', '100%', '0%'],
                        scale: [1, 1.25, 1.2]
                    }}
                    className="w-72 h-72 flex relative justify-center items-center bg-slate-500/20 hover:bg-sky-500/30 ease-in duration-200 shadow-xl cursor-pointer mb-2 border-t border-r border-sky-400"
                >
                    <div className="w-44 h-44 flex justify-center items-center bg-slate-500/20 rounded-full -rotate-45">
                        <h1 className="text-3xl font-black">Wave</h1>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{
                        borderRadius: ['0%', '100%', '0%'],
                        scale: [1, 1.25, 1.2]
                    }}
                    className="w-72 h-72 flex relative justify-center items-center bg-slate-500/20 hover:bg-sky-500/30 ease-in duration-200 shadow-xl cursor-pointer mb-2 border-r border-b border-sky-400"
                >
                    <div className="w-44 h-44 flex justify-center items-center bg-slate-500/20 rounded-full -rotate-45">
                        <h1 className="text-3xl font-black">Wave</h1>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Home