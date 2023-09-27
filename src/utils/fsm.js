class FSMminini {
  constructor() {
    this.state = "init";
  }

  change_state(new_state) {
    console.log(`change_state ${this.state} -> ${new_state}`);

    if (new_state in this.transitions) {
      this.dispatch("leave");
      this.state = new_state;
      this.dispatch("init");
    }
  }

  dispatch(action_name) {
    const actions = this.transitions[this.state];
    if (action_name in actions) {
      const action = actions[action_name];
      action.call(this.payload);
    } else {
      console.warn(`no such action ${action_name} in state ${this.state}`);
    }
  }

  transitions = {
    init: {
      init() {},
      leave() {},
    },
  };
}

export default FSMminini;
