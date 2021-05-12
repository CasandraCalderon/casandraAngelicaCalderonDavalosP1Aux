declare var require: any
var car: string= '✔';
var i: number = 0;
interface camelCase {
    underscore_case: string;
    first_name: string;
    Some_Variable: string;
    calculate_AGE: string;
    delayed_departure: string;

}
const camelCase = {
    underscore_case: 'underscore_case',
    first_name: 'first_name',
    Some_Variable: 'Some_Variable',
    calculate_AGE: 'calculate_AGE',
    delayed_departure: 'delayed_departure',

}
let mayor : number = camelCase.underscore_case.length;
mayor = (mayor < camelCase.first_name.length)? camelCase.first_name.length : mayor;
mayor = (mayor < camelCase.Some_Variable.length) ? camelCase.Some_Variable.length : mayor;
mayor = (mayor < camelCase.calculate_AGE.length) ? camelCase.calculate_AGE.length : mayor; 
mayor= (mayor < camelCase.delayed_departure.length) ? camelCase.delayed_departure.length : mayor;

const _ = require ('lodash');
var esp : string = '';
var cont: number;
cont = mayor - camelCase.underscore_case.length;
while (cont  > 0){
    esp= esp + ' ';
    cont--;
}
console.log(_.camelCase ('underscore_case'), esp, car);
cont = mayor - camelCase.first_name.length;
esp = '';
while (cont  > 0){
    esp= esp + ' ';
    cont--;
}
console.log(_.camelCase ('first_name'), esp, car= car + '✔');
cont = mayor - camelCase.Some_Variable.length;
esp = '';
while (cont  > 0){
    esp= esp + ' ';
    cont--;
}
console.log(_.camelCase ('Some_Variable'), esp, car= car + '✔');
cont = mayor - camelCase.calculate_AGE.length;
esp = '';
while (cont  > 0){
    esp= esp + ' ';
    cont--;
}
console.log(_.camelCase ('calculate_AGE'), esp, car= car + '✔');
cont = mayor - camelCase.delayed_departure.length;
esp = '';
while (cont  > 0){
    esp= esp + ' ';
    cont--;
}
console.log(_.camelCase ('delayed_departure'), esp, car= car + '✔');
