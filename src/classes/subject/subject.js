import { Observable, Subject } from "rxjs";

/**
 * Un Subject es un tipo de Observable que nos permite enviar los mismos valores
 * de una fuente a todos los observadores además también nos permite insertar
 * valores desde afuera del observable.
 */

const numbers$ = new Observable((subcriber) => {
  subcriber.next(Math.round(Math.random() * 100));
});

const numbersSubject$ = new Subject();

const observer1 = {
  next: (value) => console.log(value),
};
const observer2 = {
  next: (value) => console.log(value),
};

numbersSubject$.subscribe(observer1);
numbersSubject$.subscribe(observer2);
numbers$.subscribe(numbersSubject$);
