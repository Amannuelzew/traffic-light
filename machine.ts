import { setup } from "xstate";

export const machine = setup({
  types: {
    context: {} as { count: number },
  },
  actions: {
    counter: function ({ context, event }, params) {
      // Add your action code here
      // ...
    },
  },
  schemas: {
    context: {
      count: {
        type: "number",
        description:
          'Generated automatically based on the key: "count" in initial context values',
      },
    },
  },
}).createMachine({
  context: {
    count: 60,
  },
  id: "Untitled",
  initial: "red",
  states: {
    red: {
      after: {
        "6000": {
          target: "yellow",
        },
      },
      entry: {
        type: "counter",
      },
    },
    yellow: {
      after: {
        "500": {
          target: "green",
        },
      },
    },
    green: {
      after: {
        "500": {
          target: "red",
        },
      },
    },
  },
});
