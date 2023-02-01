

import React, { useEffect, useState } from "react"
import { getGames } from "../../managers/GameManager.js"

export const UpdateGame = (props) => {
    const [ games, setGames ] = useState([])

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <article className="games">
            {
                    <section key={`game--${game.id}`} className="game">
                        <textarea className="game__title"></textarea>
                        <textarea className="game__players"></textarea>
                        <textarea className="game__skillLevel"></textarea>
                    </section>
                
            }
        </article>
    )
}