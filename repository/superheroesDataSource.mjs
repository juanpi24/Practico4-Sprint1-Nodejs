export default class SuperheroesDataSource{
    //Metodo abstracto para obtener los superheroes
    obtenerTodos(){
        throw new Error('Este método debe ser implementado por la subclase.')
    }
}