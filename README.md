CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

- Es una función que retorna otra función solo cuando sus dependencias han sido alteradas. Se usa cuando queremos tener la misma instancia de una función entre renders. Un caso concreto seria cuando hayga una funcion dentro de un array de dependencias.
