//alert( null || 2 || undefined ); // 2
//alert( alert(1) || 2 || alert(3) ); // 1 and 2
//alert( 1 && null && 2 ); // null
//alert( alert(1) && alert(2) ); // 1 and undefined
//alert( null || 2 && 3 || 4 ); // 3
if (14<=age<=90){

}
if (!(age >= 14 && age <= 90)){

}
if (age < 14 || age > 90){

}
if (-1 || 0) alert( 'first' );// Выполнится.
// Результат -1 || 0 = -1, в логическом контексте true
if (-1 && 0) alert( 'second' );// Не выполнится
// -1 && 0 = 0,  в логическом контексте false
if (null || -1 && 1) alert( 'third' );// Выполнится
// оператор && имеет больший приоритет, чем ||
// так что -1 && 1 выполнится раньше
// вычисления: null || -1 && 1  ->  null || 1  ->  1