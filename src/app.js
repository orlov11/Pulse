import './styles.css'
import { GameLuck } from './modules/game-module'

const game = new GameLuck('game', 'Проверьте вашу удачу(мини игра)')

document.body.addEventListener('contextmenu', e => {
	e.preventDefault()
	game.trigger()
})
