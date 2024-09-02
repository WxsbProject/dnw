import { createRoot } from 'react-dom/client'


const root: HTMLElement = document.getElementById('root')!

const render = () => {
  createRoot(root).render(
    <div>wx</div>
  )
}

render()
