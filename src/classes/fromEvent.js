import { fromEvent } from "rxjs";

const onKeyDown$ = fromEvent(document, "keydown");

const observadorKeyDown = {
  next: (event) => console.log(event.key),
};
console.log("Class 3: fromEvent");
onKeyDown$.subscribe(observadorKeyDown);
