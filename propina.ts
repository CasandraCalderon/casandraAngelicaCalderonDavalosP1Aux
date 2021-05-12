interface calctip {
    propinas: number [];
    totales: number [];
}
const calctip = {
    propinas: new Array(),
    totales: new Array(),

}
function calcTip (...facturas : number []){
    var i : number = 0;
    while (i < facturas.length){
        let t =  (facturas [i] > 300) ? (facturas [i] * 20 / 100) : (facturas [i] >= 50) ? (facturas [i] * 15 / 100) : (facturas [i] * 20 / 100) ;
        var totales : number = facturas [i] + t;
        calctip.propinas.push (t);
        calctip.totales.push (totales);
        console.log ('La factura fue ', facturas [i], ', la propina fue ', calctip.propinas [i], ', el valor total ', calctip.totales [i]);
        console.log ();
        i++;
    }

}

calcTip (22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);



