const products = [
    {
      id: '1',
      name: 'BIG HOOPS AMBER ORO',
      price: 13800,
      category: 'aros',
      img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/568/691/products/gallery-gang1761-c9f3904ec1e3c1ae4a16649092960629-1024-1024.jpg',
      stock: 25,
      description: 'HOOPS HUECAS DE PLATA 925 BAÑADAS EN ORO 18K CON CIERRE MARIPOSA.'
    },
    {
        id: '2',
        name: 'HOOPS PAULETTE ORO',
        price: 8400,
        category: 'aros',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/568/691/products/hoops-paulette-ok11-02e14b59cc6082b90516649404133830-1024-1024.jpg',
        stock: 30,
        description: 'HOOPS DE PERLAS NATURALES DE PLATA 925 BAÑADAS EN ORO 18K, CON TERMINACION DE CUENTA ESFERICA Y CIERRE MARIPOSA.'
      },

  ]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id))
        })
    }, 500)
}

export const getProductByCategory = (categoryId) => { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.category === categoryId))
        })
    }, 500)
}