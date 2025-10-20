import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ComingSoon() {
    const [text, setText] = useState("");
    const message = " ⭐ Sitio en construcción ⭐ ";

    // Efecto máquina de escribir
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(message.slice(0, i + 1));
            i++;
            if (i === message.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // Configuración de partículas
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
            {/* Partículas de fondo */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: { color: "transparent" },
                    fpsLimit: 60,
                    particles: {
                        color: { value: "#facc15" },
                        links: { enable: false },
                        move: { enable: true, speed: 1 },
                        size: { value: 2 },
                        opacity: { value: 0.5 },
                    },
                }}
                className="absolute top-0 left-0 w-full h-full"
            />

            {/* Título animado */}
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-bold text-center z-10"
            >
                {text}
            </motion.h1>

            {/* Loader */}
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="mt-8 w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full z-10"
            ></motion.div>

            {/* Mensaje adicional */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="mt-6 text-sm text-gray-400 z-10"
            >
                © {new Date().getFullYear()} Ringvonbante. Todos los derechos reservados.
            </motion.p>
        </div>
    );
}
