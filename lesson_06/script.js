/*
    Странно скопировалось с codePen, возможно специально были поставлены такие кавычки, 
    ответы ниже будут с исправлением кавычек на: ""
*/


//1
Boolean(Number("10")) + 1;
/*
    '10' - тип данных 'string'
    с помощью функции Number() мы ее преобразовываем в тип данных 'number'
    далее с помощи функции Boolean() мы преобразовываем ее в тип данных 'boolean'
    так как у нас число больше чем 0, в булевом типе будет считаться как 'true'
    получается следующее выражение: true + 1, где true будет уже равна 1
    ОТВЕТ: 2 ('number')
*/


//2
"sub " + Number(false);
/*
    'sub ' - строка, тип данных 'string'
    Number(false) - преобразование булевого false в число 0, тип данных 'number'
    когда мы используем оператор '+' и один из операндов является строкой, происходит конкатанация строк
    ОТВЕТ: 'sub 0' ('string')
*/


//3
16 * "      91    ";
/*
    16 - число, тип данных 'number'
    "      91    " - строка, тип данных 'string'
    выражения использующие математические операторы, кроме "+", в которых один из операндов есть строка
    будет происходить преобразование строки в число, опуская при этом пробелы
    ОТВЕТ: 1456 ('number')
*/ 


//4
true - 70;
/*
    true - булевый тип данных 'boolean'
    выражения использующие математические операторы, в которых один из операндов есть true или false
    будет происходить преобразование булевого типа данных в number
    ОТВЕТ: -69 ('number')
*/ 