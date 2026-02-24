import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import FormConfig from './components/FormConfig'
import RoutineView from './components/RoutineView'
import { apiService } from './services/apiService'
import { Routine, GOAL_MAP, LEVEL_MAP, TYPE_MAP, MUSCLE_GROUP_MAP } from './types/routine'
import { Dumbbell, History, Layout, Trash2, Calendar, CheckCircle2, X } from 'lucide-react'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

// Helper mappings for Spanish display (Removed redundant local maps as they are now imported from types)

interface SavedRoutine extends Routine {
    id: string;
    savedAt: string;
}

const NavLinks = ({ view, setView, setRoutine, isMobile = false }: { view: string, setView: (v: 'generator' | 'history') => void, setRoutine: (r: any) => void, isMobile?: boolean }) => (
    <nav className={`${isMobile ? 'flex md:hidden justify-center gap-6 mt-6 pb-2' : 'header-nav hidden md:flex items-center gap-8'}`}>
        <button
            onClick={() => { setView('generator'); setRoutine(null); }}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${view === 'generator' ? 'text-green-500' : 'text-gray-300 hover:text-green-500'}`}
        >
            <Layout size={18} /> Generador
        </button>
        <button
            onClick={() => { setView('history'); setRoutine(null); }}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${view === 'history' ? 'text-green-500' : 'text-gray-300 hover:text-green-500'}`}
        >
            <History size={18} /> Historial
        </button>
    </nav>
);

function App() {
    const [routine, setRoutine] = useState<Routine | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [view, setView] = useState<'generator' | 'history'>('generator')
    const [history, setHistory] = useState<SavedRoutine[]>([])
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState('')
    const [toastType, setToastType] = useState<'success' | 'delete'>('success')

    const headerRef = useRef<HTMLElement>(null)
    const logoRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const navRef = useRef<HTMLDivElement>(null)
    const loginBtnRef = useRef<HTMLButtonElement>(null)
    const heroRef = useRef<HTMLDivElement>(null)
    const footerRef = useRef<HTMLElement>(null)
    const routineBarRef = useRef<HTMLDivElement>(null)
    const errorRef = useRef<HTMLDivElement>(null)
    const historyRef = useRef<HTMLDivElement>(null)

    // Load history from localStorage
    useEffect(() => {
        const savedHistory = localStorage.getItem('routine_pro_history')
        if (savedHistory) {
            setHistory(JSON.parse(savedHistory))
        }
    }, [])

    // Scroll to top when routine is generated or view changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [routine, view])

    // Header entrance animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()
            if (headerRef.current) {
                tl.fromTo(headerRef.current,
                    { y: -80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
                )
            }

            if (logoRef.current) {
                tl.fromTo(logoRef.current,
                    { scale: 0, rotation: -180 },
                    { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(1.7)' },
                    '-=0.3'
                )
            }

            if (titleRef.current) {
                tl.fromTo(titleRef.current,
                    { x: -30, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
                    '-=0.3'
                )
            }

            // Fixed selector to be more specific and check for existence
            const navButtons = navRef.current?.querySelectorAll('button');
            if (navButtons && navButtons.length > 0) {
                tl.fromTo(navButtons,
                    { y: -20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', stagger: 0.1 },
                    '-=0.2'
                )
            }

            if (loginBtnRef.current) {
                tl.fromTo(loginBtnRef.current,
                    { scale: 0.8, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' },
                    '-=0.2'
                )
            }

            // Footer entrance
            if (footerRef.current) {
                gsap.fromTo(footerRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 1, delay: 1.2, ease: 'power2.out' }
                )
            }
        }, headerRef) // Scope to header
        return () => ctx.revert()
    }, [])

    // Hero or History section animation
    useEffect(() => {
        const target = view === 'generator' ? heroRef.current : historyRef.current;
        if (target) {
            const ctx = gsap.context(() => {
                const tl = gsap.timeline();
                tl.fromTo(target,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
                );

                if (view === 'generator') {
                    const accent = target.querySelector('.hero-accent');
                    if (accent) {
                        gsap.to(accent, {
                            textShadow: '0 0 20px rgba(34, 197, 94, 0.6), 0 0 40px rgba(34, 197, 94, 0.3)',
                            duration: 2,
                            repeat: -1,
                            yoyo: true,
                            ease: 'sine.inOut'
                        });
                    }
                }
            }, target);
            return () => ctx.revert();
        }
    }, [view, routine === null])

    // Error shake animation
    useEffect(() => {
        if (error && errorRef.current) {
            const ctx = gsap.context(() => {
                gsap.fromTo(errorRef.current,
                    { x: -10, opacity: 0, scale: 0.95 },
                    { x: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' }
                )
            }, errorRef)
            return () => ctx.revert()
        }
    }, [error])

    // Routine bar entrance
    useEffect(() => {
        if (routine && routineBarRef.current) {
            const ctx = gsap.context(() => {
                gsap.fromTo(routineBarRef.current,
                    { y: -30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
                )
            }, routineBarRef)
            return () => ctx.revert()
        }
    }, [routine])

    // Toast animation
    const toastRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (showToast) {
            const ctx = gsap.context(() => {
                gsap.fromTo('.success-toast',
                    { y: 50, opacity: 0, scale: 0.9 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }
                );
            }, toastRef);

            const timeout = setTimeout(() => {
                ctx.add(() => {
                    gsap.to('.success-toast', {
                        y: 20,
                        opacity: 0,
                        scale: 0.95,
                        duration: 0.4,
                        ease: 'power2.in',
                        onComplete: () => setShowToast(false)
                    });
                });
            }, 1500);

            return () => {
                clearTimeout(timeout);
                ctx.revert();
            };
        }
    }, [showToast])

    const handlePrintAndDownloadPDF = async () => {
        if (!routine) return;

        // 1. Open Print Tab (Existing Logic)
        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(`
                <html>
                    <head>
                        <title>${routine.name}</title>
                        <style>
                            body { font-family: sans-serif; padding: 20px; background: white; color: black; }
                            .day-card { border: 1px solid #ddd; margin-bottom: 20px; page-break-inside: avoid; padding: 15px; border-radius: 10px; }
                            h2, h3 { margin-top: 0; color: #059669; }
                            table { width: 100%; border-collapse: collapse; margin-top: 10px; }
                            th, td { border-bottom: 1px solid #eee; padding: 8px; text-align: left; }
                            th { font-size: 0.8em; color: #666; text-transform: uppercase; }
                            .exercise-row p { margin: 2px 0; }
                        </style>
                    </head>
                    <body>
                        <h2>${routine.name}</h2>
                        <p>Objetivo: ${GOAL_MAP[routine.goal] || routine.goal} | Nivel: ${LEVEL_MAP[routine.level] || routine.level}</p>
                        <div class="days-container">
                            ${routine.routineDays.map(day => `
                                <div class="day-card">
                                    <h3>${day.dayName} - ${day.focus}</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Ejercicio</th>
                                                <th>S×R</th>
                                                <th>Desc.</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${day.exercises.map((ex, i) => {
                const isSuperset = !!ex.supersetId;
                const nextIsSameSuperset = isSuperset && day.exercises[i + 1]?.supersetId === ex.supersetId;
                return `
                                                <tr class="exercise-row ${isSuperset ? 'superset-row' : ''}">
                                                    <td style="${isSuperset ? 'border-left: 3px solid #059669; padding-left: 10px;' : ''}">
                                                        ${isSuperset && (i === 0 || day.exercises[i - 1].supersetId !== ex.supersetId) ? `<div style="font-size: 0.6em; color: #059669; font-weight: bold; margin-bottom: 2px;">EJERCICIO COMBINADO</div>` : ''}
                                                        <p><strong>${ex.name}</strong></p>
                                                        <p style="font-size: 0.8em; color: #666;">${TYPE_MAP[ex.type] || ex.type} • ${MUSCLE_GROUP_MAP[ex.muscle_group.toLowerCase()] || ex.muscle_group}</p>
                                                    </td>
                                                    <td>${ex.sets} × ${ex.reps}</td>
                                                    <td>${ex.rest === '0s' ? 'Sigue →' : ex.rest}</td>
                                                </tr>
                                                `;
            }).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            `).join('')}
                        </div>
                        <script>window.print();</script>
                    </body>
                </html>
            `);
            printWindow.document.close();
        }

        // 2. Trigger Actual PDF Download (Using jsPDF + html2canvas on the printable window content is hard, 
        // let's render the current view instead or use a more direct jsPDF approach)
        const doc = new jsPDF('p', 'mm', 'a4');
        let yPos = 20;

        doc.setFontSize(22);
        doc.setTextColor(5, 150, 105);
        doc.text(routine.name, 20, yPos);
        yPos += 10;

        doc.setFontSize(12);
        doc.setTextColor(100, 100, 100);
        doc.text(`Objetivo: ${GOAL_MAP[routine.goal] || routine.goal} | Nivel: ${LEVEL_MAP[routine.level] || routine.level}`, 20, yPos);
        yPos += 15;

        routine.routineDays.forEach((day, index) => {
            if (yPos > 250) {
                doc.addPage();
                yPos = 20;
            }

            doc.setFontSize(16);
            doc.setTextColor(0, 0, 0);
            doc.text(`${day.dayName} - ${day.focus}`, 20, yPos);
            yPos += 10;

            doc.setFontSize(10);
            doc.setTextColor(150, 150, 150);
            doc.text("Ejercicio", 20, yPos);
            doc.text("S×R", 140, yPos, { align: 'center' });
            doc.text("Desc.", 180, yPos, { align: 'right' });
            yPos += 5;
            doc.line(20, yPos, 190, yPos);
            yPos += 7;

            day.exercises.forEach((ex, i) => {
                if (yPos > 270) {
                    doc.addPage();
                    yPos = 20;
                }

                const isSuperset = !!ex.supersetId;
                const prevIsSameSuperset = isSuperset && day.exercises[i - 1]?.supersetId === ex.supersetId;

                if (isSuperset) {
                    doc.setDrawColor(5, 150, 105);
                    doc.setLineWidth(1);
                    doc.line(18, yPos - 4, 18, yPos + 6);

                    if (!prevIsSameSuperset) {
                        doc.setFontSize(7);
                        doc.setTextColor(5, 150, 105);
                        doc.text('EJERCICIO COMBINADO', 20, yPos - 5);
                    }
                }

                doc.setFontSize(11);
                doc.setTextColor(0, 0, 0);
                doc.text(ex.name, 20, yPos);

                doc.setFontSize(11);
                doc.text(`${ex.sets} x ${ex.reps}`, 140, yPos, { align: 'center' });
                doc.text(ex.rest === '0s' ? 'Sigue' : ex.rest, 180, yPos, { align: 'right' });

                yPos += 5;
                doc.setFontSize(8);
                doc.setTextColor(120, 120, 120);
                doc.text(`${TYPE_MAP[ex.type] || ex.type} • ${MUSCLE_GROUP_MAP[ex.muscle_group.toLowerCase()] || ex.muscle_group}`, 20, yPos);

                yPos += 8;
            });
            yPos += 10;
        });

        doc.save(`${routine.name.replace(/\s+/g, '_')}.pdf`);
    };

    const handleSaveRoutine = () => {
        if (!routine) return;

        const newSavedRoutine: SavedRoutine = {
            ...routine,
            id: crypto.randomUUID(),
            savedAt: new Date().toLocaleString('es-AR')
        };

        const updatedHistory = [newSavedRoutine, ...history];
        setHistory(updatedHistory);
        localStorage.setItem('routine_pro_history', JSON.stringify(updatedHistory));

        // Show success toast
        setToastType('success');
        setToastMessage(`¡Rutina "${routine.name}" guardada con éxito!`);
        setShowToast(true);

        // Visual feedback on button
        const btnCtx = gsap.context(() => {
            gsap.to('.save-btn', {
                scale: 1.05,
                backgroundColor: '#047857',
                duration: 0.2,
                yoyo: true,
                repeat: 1
            });
        });
        setTimeout(() => btnCtx.revert(), 500);
    };

    const deleteFromHistory = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const routineToDelete = history.find(item => item.id === id);
        const updatedHistory = history.filter(item => item.id !== id);
        setHistory(updatedHistory);
        localStorage.setItem('routine_pro_history', JSON.stringify(updatedHistory));

        // Show delete toast
        setToastType('delete');
        setToastMessage(`Rutina "${routineToDelete?.name || ''}" eliminada del historial`);
        setShowToast(true);
    };

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
            {/* Decorative triangle from top-right corner */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div
                    className="absolute top-0 right-0 w-full h-full opacity-20"
                    style={{ clipPath: 'polygon(100% 0, 100% 55%, 45% 0)', background: 'linear-gradient(135deg, #064e3b, #065f46)' }}
                />
                <div
                    className="absolute top-0 right-0 w-full h-full opacity-15"
                    style={{ clipPath: 'polygon(100% 0, 100% 45%, 55% 0)', background: 'linear-gradient(135deg, #059669, #047857)' }}
                />
                <div
                    className="absolute top-0 right-0 w-full h-full opacity-10"
                    style={{ clipPath: 'polygon(100% 0, 100% 35%, 65% 0)', background: 'linear-gradient(135deg, #34d399, #10b981)' }}
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <header ref={headerRef} className="bg-gray-950 border-b border-green-900/30 py-6 px-4 sticky top-0 z-50 backdrop-blur-md bg-gray-950/80">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div ref={logoRef} className="header-logo bg-green-600 p-2 rounded-xl text-white cursor-pointer" onClick={() => { setView('generator'); setRoutine(null); }}>
                            <Dumbbell size={24} />
                        </div>
                        <h1 ref={titleRef} className="header-title text-xl font-bold text-white tracking-tight">Routine<span className="text-green-500">Pro</span></h1>
                    </div>

                    <div ref={navRef}>
                        <NavLinks view={view} setView={setView} setRoutine={setRoutine} />
                    </div>

                    <button ref={loginBtnRef} className="header-btn bg-green-600/10 text-green-500 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-green-600 hover:text-white transition-all border border-green-600/20 hover:scale-105 active:scale-95">
                        Iniciar Sesión
                    </button>
                </div>
            </header>

            <main className="flex-grow relative z-10">
                {view === 'generator' ? (
                    !routine ? (
                        <div ref={heroRef} className="py-10 px-4">
                            <div className="text-center mb-10">
                                <h2 className="hero-title text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
                                    Entrena con <span className="hero-accent text-green-500">Inteligencia</span>
                                </h2>
                                <p className="hero-subtitle text-gray-500 text-xl max-w-2xl mx-auto">
                                    Algoritmos de entrenamiento basados en ciencia para maximizar tus resultados en el gimnasio.
                                </p>
                                <NavLinks view={view} setView={setView} setRoutine={setRoutine} isMobile={true} />
                            </div>
                            <FormConfig onGenerate={handleGenerate} loading={loading} />
                            {error && (
                                <div ref={errorRef} className="max-w-md mx-auto mt-8 p-4 bg-red-950/50 border border-red-900/50 text-red-400 rounded-2xl text-center font-medium">
                                    {error}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="pb-10">
                            <div ref={routineBarRef} className="max-w-7xl mx-auto py-8 px-4 flex justify-between items-center">
                                <button
                                    onClick={() => setRoutine(null)}
                                    className="text-sm font-bold text-gray-400 hover:text-green-500 flex items-center gap-2 transition-colors hover:-translate-x-1 transform duration-200"
                                >
                                    ← Crear nueva rutina
                                </button>
                                <div className="flex gap-4">
                                    <button
                                        onClick={handlePrintAndDownloadPDF}
                                        className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-700 border border-gray-700 hover:scale-105 active:scale-95 transition-all"
                                    >
                                        PDF
                                    </button>
                                    <button
                                        onClick={handleSaveRoutine}
                                        className="save-btn bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 shadow-lg shadow-green-500/20 hover:scale-105 active:scale-95 transition-all"
                                    >
                                        Guardar Rutina
                                    </button>
                                </div>
                            </div>
                            <NavLinks view={view} setView={setView} setRoutine={setRoutine} isMobile={true} />
                            <RoutineView routine={routine} />
                        </div>
                    )
                ) : (
                    <div ref={historyRef} className="max-w-5xl mx-auto py-12 px-4">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-black text-white tracking-tight">Tu Historial</h2>
                            <span className="text-gray-500 text-sm font-medium">{history.length} rutinas guardadas</span>
                        </div>
                        <NavLinks view={view} setView={setView} setRoutine={setRoutine} isMobile={true} />

                        {history.length === 0 ? (
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-16 text-center shadow-2xl shadow-black/50">
                                <div className="bg-green-500/5 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-green-500/10">
                                    <History size={40} className="text-green-500/40" />
                                </div>
                                <p className="text-gray-400 text-xl font-medium mb-8">Aún no tienes rutinas guardadas.</p>
                                <button
                                    onClick={() => setView('generator')}
                                    className="text-green-500 font-bold hover:text-green-400 transition-all hover:scale-105 active:scale-95"
                                >
                                    ¡Empieza a generar una ahora!
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {history.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 border border-white/10 hover:border-green-500/50 transition-all cursor-pointer group relative shadow-xl shadow-black/40 hover:shadow-green-500/10"
                                        onClick={() => { setRoutine(item); setView('generator'); }}
                                    >
                                        <button
                                            onClick={(e) => deleteFromHistory(item.id, e)}
                                            className="absolute top-6 right-6 text-gray-500 hover:text-red-500 transition-colors p-2 bg-white/5 rounded-xl hover:bg-red-500/10 group-hover:opacity-100 opacity-60"
                                        >
                                            <Trash2 size={18} />
                                        </button>

                                        <div className="flex items-center gap-3 text-green-500 mb-4 bg-green-500/10 w-fit px-3 py-1 rounded-full border border-green-500/20">
                                            <Calendar size={14} />
                                            <span className="text-[10px] uppercase font-bold tracking-wider">{item.savedAt}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{item.name}</h3>

                                        <div className="flex gap-2">
                                            <span className="bg-white/5 text-gray-400 text-[10px] uppercase font-bold px-3 py-1.5 rounded-lg border border-white/10 group-hover:border-green-500/20 transition-colors">{GOAL_MAP[item.goal] || item.goal}</span>
                                            <span className="bg-white/5 text-gray-400 text-[10px] uppercase font-bold px-3 py-1.5 rounded-lg border border-white/10 group-hover:border-green-500/20 transition-colors">{LEVEL_MAP[item.level] || item.level}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer ref={footerRef} className="bg-gray-950 border-t border-green-900/30 py-4 px-4 relative z-10">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-gray-600 text-sm">
                        © 2026 RoutinePro | Desarrollado por <a href="https://waveframe.com.ar/" target="_blank" rel="noopener noreferrer" className="text-green-700 underline hover:text-green-500 transition-colors">WaveFrame Studio</a>.
                    </p>
                </div>
            </footer>

            {showToast && (
                <div ref={toastRef} className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md">
                    <div className={`success-toast bg-gray-900/80 backdrop-blur-xl border ${toastType === 'success' ? 'border-green-500/30 shadow-green-500/10' : 'border-red-500/30 shadow-red-500/10'} rounded-2xl p-4 shadow-2xl flex items-center justify-between gap-4`}>
                        <div className="flex items-center gap-3">
                            <div className={`${toastType === 'success' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'} p-2 rounded-xl`}>
                                {toastType === 'success' ? <CheckCircle2 size={24} /> : <Trash2 size={24} />}
                            </div>
                            <div>
                                <p className="text-white font-bold text-sm">{toastType === 'success' ? 'Éxito' : 'Eliminado'}</p>
                                <p className="text-gray-400 text-xs">{toastMessage}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                // Direct state change for manual close to avoid selector conflicts
                                setShowToast(false);
                            }}
                            className="text-gray-500 hover:text-white transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
