import { useEffect, useState } from 'react'

const Cycle = ({ words }) => {
  const [i, si] = useState(0)
  const [vis, sv] = useState(true)
  useEffect(() => {
    const t = setInterval(() => {
      sv(false)
      setTimeout(() => { si(x => (x + 1) % words.length); sv(true) }, 350)
    }, 2600)
    return () => clearInterval(t)
  }, [words.length])
  return <span className={`cycle ${vis ? 'cy-in' : 'cy-out'}`}>{words[i]}</span>
}

export default Cycle
