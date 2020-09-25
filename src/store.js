export default class Store {
  constructor(val) {
    this.val = val
    this.subscribed = []
  }

  subscribe(sub) {
    this.subscribed.push(sub)
    sub(this.val)
    return () => {
      this.subscribed = this.subscribed.filter((s) => s !== sub)
    }
  }

  set(v) {
    this.val = v
    this.subscribed.forEach((f) => f(v))
  }
}
