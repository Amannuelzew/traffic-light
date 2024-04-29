import "./styles.css";
import { machine } from "./machine";
import { createActor, __unsafe_getAllOwnEventDescriptors } from "xstate";

const actor = createActor(machine);
(window as any).actor = actor;
actor.subscribe((state) => {
  // Machine State value
  document.querySelector<HTMLPreElement>(
    "#state"
  ).outerHTML = `<code id="state">${state.value}</code>`;

  // Machine context
  document.querySelector("#count").innerHTML = JSON.stringify(
    state.context.count
  );
});
actor.start();
