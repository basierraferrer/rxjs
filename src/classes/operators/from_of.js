import { from, of, asyncScheduler } from "rxjs";

// FROM
console.log("FROM", "\n");
const fruitsFrom$ = from(
  ["banana", "tangerine", "pear", "apple"],
  asyncScheduler
);

fruitsFrom$.subscribe(console.log);

console.log("OF", "\n");
const fruitsOf$ = of("banana", "tangerine", "pear", "apple");
fruitsOf$.subscribe(console.log);
