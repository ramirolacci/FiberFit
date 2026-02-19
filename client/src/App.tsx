import { useState } from 'react'
import FormConfig from './components/FormConfig'
import RoutineView from './components/RoutineView'
import { apiService } from './services/apiService'
import { Routine } from './types/routine'
import { Dumbbell, History, Layout } from 'lucide-react'

function App() {
    const [routine, setRoutine] = useState<Routine | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

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
        <div className="min-h-screen bg-black flex flex-col">
            {/* Header */}
            <header className="bg-gray-950 border-b border-green-900/30 py-6 px-4 sticky top-0 z-50 backdrop-blur-md bg-gray-950/80">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-600 p-2 rounded-xl text-white">
                            <Dumbbell size={24} />
                        </div>
                        <h1 className="text-xl font-bold text-white tracking-tight">Routine<span className="text-green-500">Pro</span></h1>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-green-500 transition-colors">
                            <Layout size={18} /> Generador
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:cursor-not-allowed">
                            <History size={18} /> Historial
                        </a>
                    </nav>

                    <button className="bg-green-600/10 text-green-500 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-green-600 hover:text-white transition-all border border-green-600/20">
                        Iniciar Sesión
                    </button>
                </div>
            </header>

            <main className="flex-grow">
                {!routine ? (
                    <div className="py-20 px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
                                Entrena con <span className="text-green-500">Inteligencia</span>
                            </h2>
                            <p className="text-gray-500 text-xl max-w-2xl mx-auto">
                                Algoritmos de entrenamiento basados en ciencia para maximizar tus resultados en el gimnasio.
                            </p>
                        </div>

                        <FormConfig onGenerate={handleGenerate} loading={loading} />

                        {error && (
                            <div className="max-w-md mx-auto mt-8 p-4 bg-red-950/50 border border-red-900/50 text-red-400 rounded-2xl text-center font-medium">
                                {error}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="pb-20">
                        <div className="bg-gray-950 border-b border-green-900/30 mb-8 py-4 px-4">
                            <div className="max-w-7xl mx-auto flex justify-between items-center">
                                <button
                                    onClick={() => setRoutine(null)}
                                    className="text-sm font-bold text-gray-400 hover:text-green-500 flex items-center gap-2"
                                >
                                    ← Crear nueva rutina
                                </button>
                                <div className="flex gap-4">
                                    <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 border border-gray-700">
                                        PDF / Imprimir
                                    </button>
                                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 shadow-lg shadow-green-500/20">
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
            <footer className="bg-gray-950 border-t border-green-900/30 py-12 px-4">
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
