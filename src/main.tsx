import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
// TODO: Remove hide scrollbar
// const body = document.querySelector("body") as HTMLBodyElement
// body.addEventListener("wheel", (event) => {
//   window.scrollBy({ top: event.deltaY })
// })
