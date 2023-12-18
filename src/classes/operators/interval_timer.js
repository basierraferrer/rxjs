import { interval, timer } from "rxjs";

const sequenceNumbers$ = interval(2000);
const deleayedNumbers$ = timer(2000);

deleayedNumbers$.subscribe(console.log);
