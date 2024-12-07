export function ValidarExpresion($event, expresion) {
    var valorArray = $event.target.value.split("");
    valorArray.splice($event.target.selectionStart, 0, $event.key);
    var valor = valorArray.join("");
    var test = expresion.test(valor);
    if (!test) {
        $event.preventDefault();
    }
}