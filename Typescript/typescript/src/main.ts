import './style.css'
import { setupCounter } from './counter.ts'
import "./example.ts"
import "./generics.ts"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="../tasks.html" target="_blank">hello
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
