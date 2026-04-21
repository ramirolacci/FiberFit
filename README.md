<div align="center">
  <img src="./assets/banner.png" alt="RoutinePro Banner" width="100%" style="border-radius: 12px; margin-bottom: 20px;"/>
  
  <h1 style="font-size: 3rem; margin-top: 10px;">💪 Routine<span style="color: #22c55e;">Pro</span></h1>
  
  <p style="font-size: 1.2rem; margin: 15px 0;">
    <strong>El Generador de Rutinas de Entrenamiento Definitivo, Basado en Ciencia y Algoritmos Inteligentes.</strong>
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
  </p>

  <br/>
</div>

---

## 🚀 Sobre el Proyecto

**RoutinePro** es una aplicación moderna de generación de rutinas de ejercicio diseñada para maximizar tus resultados en el gimnasio. Mediante la configuración de variables clave (objetivo, frecuencia semanal, nivel de experiencia, equipamiento disponible y tiempo por sesión), el sistema genera rutinas de entrenamiento personalizadas, estructuradas e inteligentes.

Diseñado con un enfoque estético *premium*, **RoutinePro** incorpora interfaces fluidas guiadas por **GSAP**, vistas oscuras *(Dark Mode)* con acentos en tonos esmeralda, un panel de gestión eficiente y flujos de usuario extremadamente intuitivos. Además, toda tu progresión y el historial de rutinas quedan resguardados de forma escalable gracias al uso de **Supabase**.

---

## ✨ Características Principales

- **🧠 Algoritmo de Generación Inteligente**: Crea rutinas de manera dinámica analizando tu nivel, el equipamiento del que dispones y tus objetivos personales.
- **💾 Sistema de Guardado de Historial**: Almacena tus rutinas generadas de forma persistente y segura en bases de datos ágiles y modernas (Supabase).
- **📄 Exportación a PDF**: Imprime o descarga tu rutina de la semana en formato PDF, lista para llevarla al gimnasio y lograr una desconexión digital durante tu sesión.
- **🏃‍♂️ Animaciones Fluidas**: Efectos de interfaz envolventes, creados y potenciados en tiempo real por GSAP.
- **📱 Responsividad Total**: Experiencia de usuario adaptada a la perfección para brindarte la misma fluidez tanto en dispositivos móviles como en navegadores de escritorio.

---

## 📷 Vistas Previas del Proyecto

<table>
  <tr>
    <td align="center" width="50%">
      <img src="./assets/home-screenshot.png" alt="Vista Principal" width="100%" />
      <br/>
      <em>Pantalla Principal — Configuración de Parámetros</em>
    </td>
    <td align="center" width="50%">
      <img src="./assets/routine-screenshot.png" alt="Rutina Generada" width="100%" />
      <br/>
      <em>Rutina Generada — Vista Día por Día</em>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img src="./assets/history-screenshot.png" alt="Historial" width="100%" />
      <br/>
      <em>Historial — Rutinas Guardadas</em>
    </td>
    <td align="center" width="50%">
      <img src="./assets/routine2-screenshot.png" alt="Panel" width="100%" />
      <br/>
      <em>Panel — Estadísticas y Progreso</em>
    </td>
  </tr>
</table>

---

## 🛠️ Stack Tecnológico

El proyecto está diseñado bajo una arquitectura modular y escalable usando **TypeScript** en todo su ciclo de desarrollo:

### 🎨 Frontend (Client)
- **Core:** React 18
- **Build Tool:** Vite
- **Estándar Visual:** Tailwind CSS
- **Interacciones:** GSAP (GreenSock)
- **Íconos:** Lucide-React
- **Utilidades:** jspdf, html2canvas (para generación de PDF)

### ⚙️ Backend (Server)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Base de Datos & BaaS:** Supabase
- **Seguridad:** CORS, Dotenv

---

## 💻 Instalación y Configuración

Sigue estos sencillos pasos para montar el proyecto en un entorno local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/routine-pro.git
cd routine-pro
```

### 2. Configurar y encender el Backend (Servidor)
Abre una terminal y dirígete a la carpeta del backend.
```bash
cd server
npm install
```
Asegúrate de tener un archivo `.env` configurado, conteniendo, por ejemplo, las claves necesarias de **Supabase** si correspondiese su validación.
```bash
# Para iniciar el entorno de desarrollo (con ts-node-dev):
npm run dev
```
> [!NOTE]
> El servidor quedará escuchando en `http://localhost:3001` (por defecto).

### 3. Configurar y encender el Frontend (Cliente)
Abre **otra ventana de terminal**, vuelve a la raíz del repositorio y entra a la subcarpeta del cliente:
```bash
cd client
npm install
```
Asegúrate de poseer conectividad con el backend (por default en `localhost:3001`). Luego:
```bash
# Para iniciar Vite:
npm run dev
```
El servidor local del cliente te indicará una URL (normalmente `http://localhost:5173`) para poder interactuar en vivo con la plataforma.

---

## 📂 Arquitectura de Directorios

```text
Routine Generator/
├── client/                     # Código Fuente del Cliente (Frontend)
│   ├── src/
│   │   ├── components/         # Componentes React (FormConfig, RoutineView, ui/, etc.)
│   │   ├── services/           # Lógica de llamadas API al backend
│   │   ├── types/              # Interfaces y Tipos End-to-End
│   │   ├── App.tsx             # Enrutador y Root UI
│   │   └── main.tsx            # Entry Point de React Vite
│   ├── index.html              # Template Base
│   └── tailwind.config.js      # Core Engine Mode / Theming
│
└── server/                     # Código Fuente del Servidor (Backend)
    ├── src/
    │   ├── logic/              # Modelos Predictivos, Generación y Persistencia (Supabase)
    │   ├── types/              # Tipos compartidos
    │   └── index.ts            # Entrypoint y Routing de Express
    ├── package.json
    └── tsconfig.json
```

---

## 🔗 Contacto & Soporte

Diseñado, desarrollado y mantenido con excelencia por **[WaveFrame Studio](https://waveframe.com.ar/)**.

> ✨ Si esta plataforma impulsó tus entrenamientos y desarrollos, no olvides dejar una ⭐ a este repositorio. ¡A romper esas marcas!
