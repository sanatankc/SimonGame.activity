class Sound {
  constructor() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    this.oscillator = this.audioCtx.createOscillator()
    this.gainNode = this.audioCtx.createGain()
    this.oscillator.type = 'sine'
    this.oscillator.connect(this.gainNode)
    this.gainNode.connect(this.audioCtx.destination)
    this.oscillator.start(0)
    this.oscillator.frequency.setValueAtTime(440, this.audioCtx.currentTime)
    this.gainNode.gain.setTargetAtTime(0, this.audioCtx.currentTime, 0.00001)
  }

  play(freq) {
    this.oscillator.frequency.setTargetAtTime(freq, this.audioCtx.currentTime, 0.2)
    this.gainNode.gain.setTargetAtTime(0.5, this.audioCtx.currentTime, 0.00001)
  }

  pause() {
    this.gainNode.gain.setTargetAtTime(0, this.audioCtx.currentTime, 0.00001)
  }
}

export default Sound