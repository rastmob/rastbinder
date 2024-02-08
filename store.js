class Store {
    constructor(initialState) {
      this.state = initialState;
      this.listeners = [];
    }
  
    subscribe(listener) {
      this.listeners.push(listener);
    }
  
    setState(newState) {
      this.state = { ...this.state, ...newState };
      this.listeners.forEach((listener) => listener(this.state));
    }
  
    getState() {
      return this.state;
    }
  }
  
  export default Store;