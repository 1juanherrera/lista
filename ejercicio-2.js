//Me parecio un poco mejor hacer un objeto de todos los datos

const fechaBd = new Date("2002, 4, 5");
const fechaLibro = new Date("1997, 6, 26")

const misDatos = {
    nombre: "Juan",
    edad: 20,
    isDev: true,
    cumpleaños: fechaBd,
    libroFav: {
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J. K Rowling",
        fecha: fechaLibro,
        url: "https://g.co/kgs/MGXixE",
    }
}