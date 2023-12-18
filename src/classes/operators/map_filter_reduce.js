import { map, reduce, filter, from } from "rxjs";

const values = [1, 2, 3, 4, 5, 6, 7, 8];

const map$ = from(values).pipe(
  map((value) => 10 * value),
  map((value) => value / 10)
);
const reduce$ = from(values).pipe(reduce((acc, value) => acc + value, 10));

const filter$ = from(values).pipe(filter((value) => value > 4));

console.log("Map\n");
map$.subscribe(console.log);
console.log("\nReduce\n");
reduce$.subscribe(console.log);
console.log("\nFilter\n");
filter$.subscribe(console.log);
