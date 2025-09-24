export interface productos{
    idProductos: number
    nombre:string
    descripcion:string
    precio:number
    estado:'Disponible'|'No disponible'
    categoria:'calzado'|'vestidos'|'accsesorios'
    urlfotografia:string

}