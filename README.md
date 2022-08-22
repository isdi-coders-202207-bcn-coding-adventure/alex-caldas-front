CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

- Es una función que retorna otra función solo cuando sus dependencias han sido alteradas. Se usa, por ejemplo, en casos en que queremos evitar un loop infinitio de renderización ya que la función dentro de la función depende de si misma.
