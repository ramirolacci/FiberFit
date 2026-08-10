import React from 'react';

interface BodyDiagramProps {
    highlightedMuscle: string;
    showFront?: boolean;
    showBack?: boolean;
}

export const BodyDiagram: React.FC<BodyDiagramProps> = ({
    highlightedMuscle,
    showFront = true,
    showBack = true
}) => {
    const isAbs = highlightedMuscle === 'abdominales';
    const isBiceps = highlightedMuscle === 'biceps';
    const isQuads = highlightedMuscle === 'quadriceps';
    const isChest = highlightedMuscle === 'pecho';
    const isShoulders = highlightedMuscle === 'hombros';
    const isBack = highlightedMuscle === 'espalda';
    const isHamstrings = highlightedMuscle === 'femorales';
    const isGlutes = highlightedMuscle === 'gluteos';
    const isTriceps = highlightedMuscle === 'triceps';

    const isCalves = highlightedMuscle === 'gemelos' || highlightedMuscle === 'pantorrillas';

    const getHighlightColor = (active: boolean) => (active ? '#ef4444' : '#18181b');
    const getStrokeColor = (active: boolean) => (active ? '#f87171' : '#3f3f46');

    return (
        <div className="flex items-center justify-center gap-6 md:gap-12 py-4">
            {/* FRONT VIEW */}
            {showFront && (
                <div className="flex flex-col items-center">
                    <span className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wider">Frente</span>
                    <svg
                        viewBox="0 0 160 320"
                        className="w-36 h-72 md:w-44 md:h-88 drop-shadow-md transition-all duration-300"
                    >
                        <g strokeWidth="1.5" fillRule="evenodd">
                            {/* Head */}
                            <ellipse cx="80" cy="30" rx="14" ry="18" fill="#18181b" stroke="#3f3f46" />
                            <rect x="75" y="47" width="10" height="12" rx="2" fill="#18181b" stroke="#3f3f46" />

                            {/* Shoulders / Deltoids */}
                            <path
                                d="M 48,60 C 44,65 42,78 45,86 C 50,86 54,75 58,68 Z"
                                fill={getHighlightColor(isShoulders)}
                                stroke={getStrokeColor(isShoulders)}
                            />
                            <path
                                d="M 112,60 C 116,65 118,78 115,86 C 110,86 106,75 102,68 Z"
                                fill={getHighlightColor(isShoulders)}
                                stroke={getStrokeColor(isShoulders)}
                            />

                            {/* Biceps */}
                            <path
                                d="M 44,88 C 40,95 40,110 46,120 C 50,115 52,100 48,88 Z"
                                fill={getHighlightColor(isBiceps)}
                                stroke={getStrokeColor(isBiceps)}
                            />
                            <path
                                d="M 116,88 C 120,95 120,110 114,120 C 110,115 108,100 112,88 Z"
                                fill={getHighlightColor(isBiceps)}
                                stroke={getStrokeColor(isBiceps)}
                            />

                            {/* Forearms */}
                            <path d="M 46,122 C 40,135 38,155 42,170 C 47,165 49,145 48,124 Z" fill="#18181b" stroke="#3f3f46" />
                            <path d="M 114,122 C 120,135 122,155 118,170 C 113,165 111,145 112,124 Z" fill="#18181b" stroke="#3f3f46" />

                            {/* Chest */}
                            <path
                                d="M 58,62 C 65,60 78,60 80,62 C 82,60 95,60 102,62 C 105,75 100,88 80,90 C 60,88 55,75 58,62 Z"
                                fill={getHighlightColor(isChest)}
                                stroke={getStrokeColor(isChest)}
                            />

                            {/* Abdominals / Core */}
                            <g>
                                <path
                                    d="M 62,94 C 70,92 78,92 80,94 C 82,92 90,92 98,94 C 96,110 96,130 94,150 C 88,158 72,158 66,150 C 64,130 64,110 62,94 Z"
                                    fill={getHighlightColor(isAbs)}
                                    stroke={getStrokeColor(isAbs)}
                                />
                                {/* Ab Lines */}
                                <line x1="80" y1="94" x2="80" y2="152" stroke={isAbs ? "#fee2e2" : "#52525b"} strokeWidth="1.5" />
                                <line x1="65" y1="112" x2="95" y2="112" stroke={isAbs ? "#fee2e2" : "#52525b"} strokeWidth="1" />
                                <line x1="66" y1="130" x2="94" y2="130" stroke={isAbs ? "#fee2e2" : "#52525b"} strokeWidth="1" />
                            </g>

                            {/* Quads / Legs */}
                            <path
                                d="M 64,158 C 60,180 58,210 62,235 C 70,238 76,230 78,160 Z"
                                fill={getHighlightColor(isQuads)}
                                stroke={getStrokeColor(isQuads)}
                            />
                            <path
                                d="M 96,158 C 100,180 102,210 98,235 C 90,238 84,230 82,160 Z"
                                fill={getHighlightColor(isQuads)}
                                stroke={getStrokeColor(isQuads)}
                            />

                            {/* Calves */}
                            <path
                                d="M 62,240 C 58,260 58,290 64,305 C 70,305 72,280 76,242 Z"
                                fill={getHighlightColor(isCalves)}
                                stroke={getStrokeColor(isCalves)}
                            />
                            <path
                                d="M 98,240 C 102,260 102,290 96,305 C 90,305 88,280 84,242 Z"
                                fill={getHighlightColor(isCalves)}
                                stroke={getStrokeColor(isCalves)}
                            />
                        </g>
                    </svg>
                </div>
            )}

            {/* BACK VIEW */}
            {showBack && (
                <div className="flex flex-col items-center">
                    <span className="text-xs text-gray-400 font-semibold mb-2 uppercase tracking-wider">Espalda</span>
                    <svg
                        viewBox="0 0 160 320"
                        className="w-36 h-72 md:w-44 md:h-88 drop-shadow-md transition-all duration-300"
                    >
                        <g strokeWidth="1.5" fillRule="evenodd">
                            {/* Head & Neck */}
                            <ellipse cx="80" cy="30" rx="14" ry="18" fill="#18181b" stroke="#3f3f46" />
                            <rect x="75" y="47" width="10" height="12" rx="2" fill="#18181b" stroke="#3f3f46" />

                            {/* Shoulders */}
                            <path
                                d="M 48,60 C 44,65 42,78 45,86 C 50,86 54,75 58,68 Z"
                                fill={getHighlightColor(isShoulders)}
                                stroke={getStrokeColor(isShoulders)}
                            />
                            <path
                                d="M 112,60 C 116,65 118,78 115,86 C 110,86 106,75 102,68 Z"
                                fill={getHighlightColor(isShoulders)}
                                stroke={getStrokeColor(isShoulders)}
                            />

                            {/* Triceps */}
                            <path
                                d="M 44,88 C 40,95 40,110 46,120 C 50,115 52,100 48,88 Z"
                                fill={getHighlightColor(isTriceps)}
                                stroke={getStrokeColor(isTriceps)}
                            />
                            <path
                                d="M 116,88 C 120,95 120,110 114,120 C 110,115 108,100 112,88 Z"
                                fill={getHighlightColor(isTriceps)}
                                stroke={getStrokeColor(isTriceps)}
                            />

                            {/* Forearms */}
                            <path d="M 46,122 C 40,135 38,155 42,170 C 47,165 49,145 48,124 Z" fill="#18181b" stroke="#3f3f46" />
                            <path d="M 114,122 C 120,135 122,155 118,170 C 113,165 111,145 112,124 Z" fill="#18181b" stroke="#3f3f46" />

                            {/* Upper & Middle Back / Latissimus */}
                            <path
                                d="M 58,62 C 68,60 92,60 102,62 C 106,90 98,135 80,140 C 62,135 54,90 58,62 Z"
                                fill={getHighlightColor(isBack)}
                                stroke={getStrokeColor(isBack)}
                            />

                            {/* Glutes */}
                            <path
                                d="M 62,144 C 70,142 78,142 80,146 C 82,142 90,142 98,144 C 100,165 92,185 80,185 C 68,185 60,165 62,144 Z"
                                fill={getHighlightColor(isGlutes)}
                                stroke={getStrokeColor(isGlutes)}
                            />

                            {/* Hamstrings / Femorales */}
                            <path
                                d="M 64,188 C 60,205 58,225 62,235 C 70,238 76,230 78,188 Z"
                                fill={getHighlightColor(isHamstrings)}
                                stroke={getStrokeColor(isHamstrings)}
                            />
                            <path
                                d="M 96,188 C 100,205 102,225 98,235 C 90,238 84,230 82,188 Z"
                                fill={getHighlightColor(isHamstrings)}
                                stroke={getStrokeColor(isHamstrings)}
                            />

                            {/* Calves */}
                            <path
                                d="M 62,240 C 58,260 58,290 64,305 C 70,305 72,280 76,242 Z"
                                fill={getHighlightColor(isCalves)}
                                stroke={getStrokeColor(isCalves)}
                            />
                            <path
                                d="M 98,240 C 102,260 102,290 96,305 C 90,305 88,280 84,242 Z"
                                fill={getHighlightColor(isCalves)}
                                stroke={getStrokeColor(isCalves)}
                            />
                        </g>
                    </svg>
                </div>
            )}
        </div>
    );
};
