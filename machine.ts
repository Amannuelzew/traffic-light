import { setup } from "xstate";

export const machine = setup({
  types: {
    context: {} as { count: number },
  },
  actions: {},
}).createMachine({
  context: {
    count: 60,
  },
  id: "taffic light",
  initial: "red",
  states: {
    red: {},
    yellow: {},
    green: {},
  },
});
