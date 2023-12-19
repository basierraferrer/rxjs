import {
  auditTime,
  debounceTime,
  fromEvent,
  sampleTime,
  throttleTime,
} from "rxjs";

const onClick$ = fromEvent(document, "click").pipe(
  //retrasa el print del event
  //debounceTime(1000),
  //auditTime(1000),
  //throttleTime(4000),
  sampleTime(4000)
);

onClick$.subscribe(console.log);
