import {
  fromEvent,
  map,
  mergeWith,
  mergeAll,
  interval,
  from,
  mergeMap,
} from "rxjs";

// const onClick$ = fromEvent(document, "click").pipe(map((event) => event.type));

// const onMouseMove$ = fromEvent(document, "mousemove").pipe(
//   map((event) => event.type)
// );

// onClick$.subscribe(console.log);
// onMouseMove$.subscribe(console.log);

// Apply mergeWith
//onMouseMove$.pipe(mergeWith(onClick$)).subscribe(value=>{console.log(value)});

// MergeAll
// const onClick$ = fromEvent(document, "click");
// const ordenSuperior$ = onClick$.pipe(map(() => interval(1000)));
// const primerOrder$ = ordenSuperior$.pipe(mergeAll());

// primerOrder$.subscribe(console.log);

// MergeMap
const letters$ = from(["A", "B", "C"]);
const result$ = letters$.pipe(
  mergeMap((letter) => interval(1000).pipe(map((second) => letter + second)))
);

result$.subscribe(console.log);
