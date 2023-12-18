import { interval, timer } from "rxjs";

console.log("Class 5: Operators", "\n");

console.log("Interval", "\n");
const sequenceNumbers$ = interval(2000);
sequenceNumbers$.subscribe(console.log);

console.log("timer", "\n");
const deleayedNumbers$ = timer(2000);
deleayedNumbers$.subscribe(console.log);
