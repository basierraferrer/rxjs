import { fromEvent } from "rxjs";

const onKeyDown$ = fromEvent(document, "keydown");

const observadorKeyDown = {
  next: (event) => console.log(event.key),
};

onKeyDown$.subscribe(observadorKeyDown);
