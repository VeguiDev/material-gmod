import {createRoot} from 'react-dom/client'
import { GameState } from './api/GameState'
import { App } from './components/App'

const gameState = GameState.getInstace();

const container = document.getElementById('root') as HTMLElement

let root = createRoot(container)

root.render(<App />)