<div align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/dumbbell.svg" alt="RoutinePro Logo" width="100"/>
  
  <h1>💪 Routine<span style="color: #22c55e;">Pro</span></h1>
  
  <p>
    <strong>El Generador de Rutinas de Entrenamiento Definitivo, Basado en Ciencia y Algoritmos Inteligentes.</strong>
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  </p>

</div>

---

## 🚀 Sobre el Proyecto

**RoutinePro** es una aplicación moderna de generación de rutinas de ejercicio diseñada para maximizar tus resultados en el gimnasio. Mediante la configuración de variables clave (objetivo, frecuencia semanal, nivel de experiencia, equipamiento disponible y tiempo por sesión), el sistema genera rutinas de entrenamiento estructuradas e inteligentes.

Diseñado con un enfoque estético *premium*, **RoutinePro** incorpora interfaces fluidas guiadas por **GSAP**, vistas oscuras *(Dark Mode)* con acentos en tonos esmeralda, y flujos de usuario extremadamente intuitivos.

## ✨ Características Principales

- **🧠 Algoritmo de Generación Inteligente**: Crea rutinas de manera dinámica analizando tu nivel y objetivos.
- **💾 Sistema de Guardado de Historial**: Almacena tus rutinas generadas de forma persistente.
- **📄 Exportación a PDF**: Imprime o descarga tu rutina de la semana en formato PDF para llevarla al gimnasio.
- **🏃‍♂️ Animaciones Fluidas**: Efectos de interfaz creados y potenciados por GSAP.
- **📱 Responsividad Total**: Experiencia adaptada perfectamente tanto para escritorio como para dispositivos móviles.

---

## 🛠️ Stack Tecnológico

El proyecto se divide en dos ecosistemas principales usando **TypeScript** End-To-End:

### Frontend (Client)
- **Framework:** React 18 
- **Build Tool:** Vite
- **Estilos:** Tailwind CSS
- **Animaciones:** GSAP 
- **Íconos:** Lucide-React
- **Utilidades PDF:** jspdf, html2canvas

### Backend (Server)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Seguridad y Control:** CORS, Dotenv

---

## ⚙️ Instalación y Configuración

Sigue estos pasos para levantar el entorno de desarrollo localmente:

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/routine-pro.git
cd routine-pro
```

### 2. Configurar y encender el Backend (Servidor)
Abre una terminal y colocate en la carpeta del backend:
```bash
cd server
npm install

# Para iniciar el entorno de desarrollo (con ts-node-dev):
npm run dev
```
> [!NOTE]
> El servidor quedará corriendo en `http://localhost:3001` (por defecto).

### 3. Configurar y encender el Frontend (Cliente)
Abre **otra ventana de terminal**, vuelve a la raíz y entra a la carpeta del cliente:
```bash
cd client
npm install

# Para iniciar Vite:
npm run dev
```

El servidor local del cliente te indicará una URL (normalmente `http://localhost:5173`) donde podrás previsualizar la aplicación.

---

## 📂 Estructura del Proyecto

```text
Routine Generator/
├── client/                     # Código del Frontend
│   ├── src/
│   │   ├── components/         # Componentes React (FormConfig, RoutineView, etc.)
│   │   ├── services/           # Peticiones API y comunicación con Backend
│   │   ├── types/              # Definiciones e Interfaces de TypeScript
│   │   ├── App.tsx             # Componente y enrutador principal
│   │   └── main.tsx            # Entry point de React + Vite
│   ├── index.html              # Template base HTML
│   └── tailwind.config.js      # Configuraciones del tema Tailwind
│
└── server/                     # Código del Backend
    ├── src/
    │   ├── logic/              # Lógica de generación de rutinas y Base de datos estática
    │   ├── types/              # Tipados de los Request y Rutinas
    │   └── index.ts            # Entrypoint de Express Server
```

---

## 🔗 Contacto & Soporte

Desarrollado y mantenido por **[WaveFrame Studio](https://waveframe.com.ar/)**.

> Dale una ⭐ a este repositorio si te resulta útil. ¡Disfruta de tu entrenamiento!
