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
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 py-6 px-4 sticky top-0 z-50 backdrop-blur-md bg-white/80">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-2 rounded-xl text-white">
                            <Dumbbell size={24} />
                        </div>
                        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Routine<span className="text-blue-600">Pro</span></h1>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">
                            <Layout size={18} /> Generador
                        </a>
                        <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:cursor-not-allowed">
                            <History size={18} /> Historial
                        </a>
                    </nav>

                    <button className="bg-blue-600/10 text-blue-600 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-all">
                        Iniciar Sesión
                    </button>
                </div>
            </header>

            <main className="flex-grow">
                {!routine ? (
                    <div className="py-20 px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">
                                Entrena con <span className="text-blue-600">Inteligencia</span>
                            </h2>
                            <p className="text-gray-500 text-xl max-w-2xl mx-auto">
                                Algoritmos de entrenamiento basados en ciencia para maximizar tus resultados en el gimnasio.
                            </p>
                        </div>

                        <FormConfig onGenerate={handleGenerate} loading={loading} />

                        {error && (
                            <div className="max-w-md mx-auto mt-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-center font-medium">
                                {error}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="pb-20">
                        <div className="bg-white border-b border-gray-100 mb-8 py-4 px-4">
                            <div className="max-w-7xl mx-auto flex justify-between items-center">
                                <button
                                    onClick={() => setRoutine(null)}
                                    className="text-sm font-bold text-gray-500 hover:text-blue-600 flex items-center gap-2"
                                >
                                    ← Crear nueva rutina
                                </button>
                                <div className="flex gap-4">
                                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200">
                                        PDF / Imprimir
                                    </button>
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 shadow-lg shadow-blue-500/20">
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
            <footer className="bg-white border-t border-gray-100 py-12 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 RoutinePro AI. Diseñado para atletas, por atletas.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default App
