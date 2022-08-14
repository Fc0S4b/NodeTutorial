// para ejecutar no-blocking performance IO (input output) independiente  javascript sea de un solo trato, ya sea descargando operaciones al kernel del sistema cuando sea posible
// javascript es síncrono, ejecuta todo línea a línea, solo continúa a la siguiente línea si la anterior fue resuelta
// javascript puede liberar carga hacia la pila de carga del navegador
// event loop actúa como una llave que libera solicitudes ya resueltas por el navegador y que van de vuelta al flujo de ejecución de javascript, que fueron inicialmente pasada por javascript al navegador para liberar carga de ejecución. Solo entra la solicitud resuelta de vuelta al flujo cuando javascript esté desocupado
// la pila del navegador es una api, que se encarga de database, file system, networks y otros
