import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
// import Nav from './Nav'
import './Animback.css'


const slides = [
  { id: 0, url: 'photo-1552332271-bf8afb3d4596?ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80' },
  { id: 1, url: 'photo-1569388037243-dfa034ecdbca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
  { id: 2, url: 'photo-1569878698890-41d806cfe9e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80' },
  { id: 3, url: 'photo-1566228015668-4c45dbc4e2f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' },
]

const Animback = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 6000), [])
  return transitions.map(({ item, props, key }) => (
    <div>
      {/* <Nav /> */}

      <animated.div
        key={key}
        class="bg"
        style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)` }}>
        <h1 className="titre">Leviosound</h1> </animated.div>
    </div>
  ))
}

render(<Animback />, document.getElementById('root'))
export default Animback