import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Supporto per hydration (prerendering con react-snap)
// Se il container ha già contenuto HTML, usa hydrateRoot per il prerendering
// Altrimenti usa createRoot per il rendering normale
const AppWithProviders = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

if (container.hasChildNodes()) {
  // Hydrate pre-rendered content (react-snap)
  hydrateRoot(container, AppWithProviders);
} else {
  // Normal client-side rendering
  createRoot(container).render(AppWithProviders);
}
