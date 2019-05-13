import { Container } from 'unstated'

const normalStep = 0.5
const largeStep = 4
const pausePct = 80
const fullPct = 100

export default class ProgressBarCo extends Container {
  state = {
    pct: 0,
  }

  rafId

  async start() {
    await this.setState({ pct: 0 })
    this.rafId = setInterval(() => {
      this.setState(({ pct }) => {
        if (pct < pausePct) return { pct: pct + normalStep }
        clearInterval(this.rafId)
        return { pct }
      })
    }, 16)
  }

  complete() {
    clearInterval(this.rafId)
    this.rafId = setInterval(() => {
      if (this.state.pct) {
        this.setState(({ pct }) => {
          if (pct < fullPct) return { pct: pct + largeStep }
          clearInterval(this.rafId)
          return { pct: 0 }
        })
      }
    }, 16)
  }
}
