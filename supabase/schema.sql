-- Tabla de Ejercicios
CREATE TABLE exercises (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  muscle_group TEXT NOT NULL,
  type TEXT CHECK (type IN ('compound', 'isolation')),
  equipment TEXT[] NOT NULL,
  difficulty TEXT CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
  video_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Rutinas Guardadas
CREATE TABLE routines (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  name TEXT NOT NULL,
  goal TEXT NOT NULL,
  level TEXT NOT NULL,
  days_per_week INTEGER NOT NULL,
  config JSONB NOT NULL,
  routine_days JSONB NOT NULL, -- Almacenamos la estructura completa generada
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE routines ENABLE ROW LEVEL SECURITY;

-- Política: Cualquiera puede leer ejercicios
CREATE POLICY "Public exercises access" ON exercises FOR SELECT USING (true);

-- Política: Los usuarios solo pueden ver sus propias rutinas
CREATE POLICY "Users can manage their own routines" ON routines
  FOR ALL USING (auth.uid() = user_id);
