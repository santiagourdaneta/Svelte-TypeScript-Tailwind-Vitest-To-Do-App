# ✅ Svelte To-Do App: Rendimiento, Tipado y Pruebas (Svelte-TS-Tailwind-Vitest)

Este proyecto es una aplicación de lista de tareas (To-Do) que sirve como una demostración de un *stack* de desarrollo frontend de alto rendimiento y robustez. Combina la eficiencia del compilador de **Svelte** con la seguridad de tipos de **TypeScript**, el desarrollo rápido con **Tailwind CSS**, y una cobertura de pruebas completa con **Vitest** y **Playwright**.

## 🧠 Características Principales

* **Gestión de Tareas:** Crear, marcar como completadas y eliminar tareas.
* **Persistencia Local:** Las tareas se almacenan y recuperan mediante el navegador (`localStorage`).
* **Filtros Dinámicos:** Permite filtrar tareas por estado (Todas, Completadas, Pendientes).
* **Animaciones Suaves:** Utiliza las transiciones nativas de Svelte (`svelte/transition`) para una experiencia de usuario fluida.
* **Diseño Moderno y Responsivo:** Estilizado rápidamente con clases de utilidad de Tailwind CSS.

## 🛠️ Stack Tecnológico

| Componente | Herramienta | Propósito |
| :--- | :--- | :--- |
| **Framework** | **Svelte** | Compilador a JavaScript vanilla para alto rendimiento. |
| **Lenguaje** | **TypeScript** | Añade seguridad y robustez al código base. |
| **Estilos** | **Tailwind CSS** | Framework CSS *utility-first* para estilos rápidos y personalizables. |
| **Unit Testing** | **Vitest** | Framework de pruebas ultrarrápido compatible con Vite. |
| **E2E Testing** | **Playwright** | Herramienta para pruebas de extremo a extremo. |
| **Build Tool** | **Vite** | Empaquetador y servidor de desarrollo rápido. |

## 🚀 Instalación y Ejecución

Asegúrate de tener Node.js instalado.

### 1. Clonar el repositorio

```bash
git clone [https://github.com/santiagourdaneta/Svelte-TypeScript-Tailwind-Vitest-To-Do-App.git](https://github.com/santiagourdaneta/Svelte-TypeScript-Tailwind-Vitest-To-Do-App.git)
cd Svelte-TypeScript-Tailwind-Vitest-To-Do-App

2. Instalación de dependencias

npm install

3. Scripts de Desarrollo

npm run dev Inicia el servidor de desarrollo de Vite.
npm run build Compila la aplicación para producción en la carpeta /dist.
npm run preview Sirve la versión compilada para pruebas.
npm run test Ejecuta todas las pruebas unitarias y de integración con Vitest.
npm run test e2e Ejecuta las pruebas de extremo a extremo con Playwright.

🧪 Estrategia de Testing

El proyecto está configurado para manejar dos niveles de prueba:

Pruebas Unitarias/Integración (Vitest): Se enfocan en la lógica central de los stores (estado) y las interacciones aisladas de los componentes.

Pruebas E2E (Playwright): Simulan el comportamiento de un usuario final en el navegador (ej. "Crear una tarea y verificar que persiste").

