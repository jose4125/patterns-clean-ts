(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const fs = [
        { id: 1, f: false },
        { id: 2, f: false },
        { id: 3, f: true },
        { id: 4, f: false },
        { id: 5, f: false },
        { id: 7, f: true },
    ];

    // good
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ];

    // Archivos marcados para borrar - files to delete
    const arhivos = fs.map( f => f.f );

    // good
    const arhivos = filesToEvaluate.map( file => file.flagged );


    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea

    // día de hoy - today
    const ddmmyyyy = new Date();

    // good
    const today = new Date()

    // días transcurridos - elapsed time in days
    const d: number = 23;

    // good
    const elapsedTimeInDays = 23

    // número de archivos en un directorio - number of files in directory
    const dir = 33;

    // good
    const totalFilesInDirectory = 33

    // primer nombre - first name
    const nombre = 'Fernando';

    // good
    const firstName = 'fernando'

    // primer apellido - last name
    const apellido = 'Herrera';

    // good
    const lastName = 'herrera'

    // días desde la última modificación - days since modification
    const dsm = 12;

    // good
    const daysSinceLastModification = 12

    // cantidad máxima de clases por estudiante - max classes per student
    const max = 6;

    // good
    const maxClasesPerStudent = 6


})();
