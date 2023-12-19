import {
  of,
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
} from "rxjs";

const repeatedNumber$ = of(
  { k: 1 },
  { k: 2 },
  { k: 3 },
  { k: 3 },
  { k: 4 },
  { k: 3 },
  { k: 2 },
  { k: 1 },
  { k: 2 },
  { k: 2 },
  { k: 2 },
  { k: 3 }
).pipe(
  //just emit differents values
  //distinct(),
  //just emit if the current value is different the previus one
  //distinctUntilChanged()
  //just emit if the current object is different the previus one
  distinctUntilKeyChanged("k")
);

repeatedNumber$.subscribe(console.log);
