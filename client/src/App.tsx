import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import FormConfig from './components/FormConfig'
import RoutineView from './components/RoutineView'
import { apiService } from './services/apiService'
import { Routine } from './types/routine'
import { Dumbbell, History, Layout } from 'lucide-react'

function App() {
    const [routine, setRoutine] = useState<Routine | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const headerRef = useRef<HTMLElement>(null)
    const heroRef = useRef<HTMLDivElement>(null)
    const footerRef = useRef<HTMLElement>(null)
    const routineBarRef = useRef<HTMLDivElement>(null)
    const errorRef = useRef<HTMLDivElement>(null)

    // Header entrance animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()
            tl.fromTo(headerRef.current,
                { y: -80, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
            )
            tl.fromTo('.header-logo',
                { scale: 0, rotation: -180 },
                { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' },
                '-=0.3'
            )
            tl.fromTo('.header-title',
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
                '-=0.3'
            )
            tl.fromTo('.header-nav a',
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', stagger: 0.1 },
                '-=0.2'
            )
            tl.fromTo('.header-btn',
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' },
                '-=0.2'
            )

            // Footer
            gsap.fromTo(footerRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1, delay: 1.2, ease: 'power2.out' }
            )
        })
        return () => ctx.revert()
    }, [])

    // Hero section animation
    useEffect(() => {
        if (!routine && heroRef.current) {
            const ctx = gsap.context(() => {
                const tl = gsap.timeline({ delay: 0.4 })
                tl.fromTo('.hero-title',
                    { y: 60, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
                )
                tl.fromTo('.hero-subtitle',
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
                    '-=0.4'
                )
                // Floating glow pulse on the accent word
                gsap.to('.hero-accent', {
                    textShadow: '0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.3)',
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                })
            }, heroRef.current)
            return () => ctx.revert()
        }
    }, [routine])

    // Error shake animation
    useEffect(() => {
        if (error && errorRef.current) {
            gsap.fromTo(errorRef.current,
                { x: -10, opacity: 0, scale: 0.95 },
                { x: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' }
            )
        }
    }, [error])

    // Routine bar entrance
    useEffect(() => {
        if (routine && routineBarRef.current) {
            gsap.fromTo(routineBarRef.current,
                { y: -30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
            )
        }
    }, [routine])

    const handleGenerate = async (config: any) => {
        setLoading(true)
        setError(null)
        try {
            const data = await apiService.generateRoutine(config)
            setRoutine(data)
        } catch (err: any) {
            setError(err.message || 'Error al conectar con el servidor')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-black flex flex-col overflow-hidden">
            {/* Ambient background glow */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <header ref={headerRef} className="bg-gray-950 border-b border-green-900/30 py-6 px-4 sticky top-0 z-50 backdrop-blur-md bg-gray-950/80" style={{ opacity: 0 }}>
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="header-logo bg-green-600 p-2 rounded-xl text-white cursor-pointer">
                            <Dumbbell size={24} />
                        </div>
                        <h1 className="header-title text-xl font-bold text-white tracking-tight">Routine<span className="text-green-500">Pro</span></h1>
                    </div>

                    <nav className="header-nav hidden md:flex items-center gap-8">
                        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-green-500 transition-colors">
                            <Layout size={18} /> Generador
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:cursor-not-allowed">
                            <History size={18} /> Historial
                        </a>
                    </nav>

                    <button className="header-btn bg-green-600/10 text-green-500 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-green-600 hover:text-white transition-all border border-green-600/20 hover:scale-105 active:scale-95">
                        Iniciar Sesión
                    </button>
                </div>
            </header>

            <main className="flex-grow relative z-10">
                {!routine ? (
                    <div ref={heroRef} className="py-20 px-4">
                        <div className="text-center mb-16">
                            <h2 className="hero-title text-5xl font-black text-white mb-4 tracking-tight">
                                Entrena con <span className="hero-accent text-green-500">Inteligencia</span>
                            </h2>
                            <p className="hero-subtitle text-gray-500 text-xl max-w-2xl mx-auto">
                                Algoritmos de entrenamiento basados en ciencia para maximizar tus resultados en el gimnasio.
                            </p>
                        </div>

                        <FormConfig onGenerate={handleGenerate} loading={loading} />

                        {error && (
                            <div ref={errorRef} className="max-w-md mx-auto mt-8 p-4 bg-red-950/50 border border-red-900/50 text-red-400 rounded-2xl text-center font-medium">
                                {error}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="pb-20">
                        <div ref={routineBarRef} className="bg-gray-950 border-b border-green-900/30 mb-8 py-4 px-4">
                            <div className="max-w-7xl mx-auto flex justify-between items-center">
                                <button
                                    onClick={() => setRoutine(null)}
                                    className="text-sm font-bold text-gray-400 hover:text-green-500 flex items-center gap-2 transition-colors hover:-translate-x-1 transform duration-200"
                                >
                                    ← Crear nueva rutina
                                </button>
                                <div className="flex gap-4">
                                    <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 border border-gray-700 hover:scale-105 active:scale-95 transition-all">
                                        PDF / Imprimir
                                    </button>
                                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 shadow-lg shadow-green-500/20 hover:scale-105 active:scale-95 transition-all">
                                        Guardar Rutina
                                    </button>
                                </div>
                            </div>
                        </div>
                        <RoutineView routine={routine} />
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer ref={footerRef} className="bg-gray-950 border-t border-green-900/30 py-12 px-4 relative z-10" style={{ opacity: 0 }}>
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-gray-600 text-sm">
                        © 2024 RoutinePro AI. Diseñado para atletas, por atletas.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default App
