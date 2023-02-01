import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { getGames } from "../../managers/GameManager.js"

export const GameList = (props) => {
    const navigate = useNavigate()
    const [ games, setGames ] = useState([])

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <article className="games">
            {
                games.map(game => {
                    return <section onClick={() => navigate(`/editgame/${game.id}` game=game)} key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.name} by {game.maker}</div>
                        <div className="game__players">{game.number_of_players} players needed</div>
                        <div className="game__skillLevel">Skill level is {game.skill_level}/10</div>
                    </section>
                })
            }
        </article>
    )
}