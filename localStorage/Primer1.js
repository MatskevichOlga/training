'use strict';
/*getItem(key) - получить значение элемента хранилища по key;
setItem(key,value) - установить для key указанное значение value (если в хранилище уже есть данные с этим ключом, то они будут переписаны);
removeItem(key) - удалить элемент по key;
clear() - удалить все элементы;
key(index) - получить элемент по его индексу (в основном используется для перебора);
length - свойство, с помощью которого можно получить количество элементов в хранилище;*/
localStorage.setItem('bgColor', 'green');
var bgColor=localStorage.getItem('bgColor');
localStorage.removeItem('bgColor');