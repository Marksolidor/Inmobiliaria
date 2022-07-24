const propiedadesJSON = [
    {
      name: 'Casa de campo',
      description: 'Un lugar ideal para descansar de la ciudad',
      image: 'assets/img/1.jpg',
      rooms: 2,
      meters: 170,
    },
    {
      name: 'Casa de playa',
      description: 'Despierta tus días oyendo el oceano',
      image: 'assets/img/2.jpg',
      rooms: 2,
      meters: 130,
    },
    {
      name: 'Casa en el centro',
      description: 'Ten cerca de ti todo lo que necesitas',
      image: 'assets/img/3.jpg',
      rooms: 1,
      meters: 80,
    },
    {
      name: 'Casa rodante',
      description: 'Conviertete en un nómada del mundo sin salir de tu casa',
      image: 'assets/img/4.jpg',
      rooms: 1,
      meters: 6,
    },
    {
      name: 'Departamento',
      description: 'Desde las alturas todo se ve mejor',
      image: 'assets/img/5.jpg',
      rooms: 3,
      meters: 200,
    },
    {
      name: 'Mansión',
      description: 'Vive una vida lujosa en la mansión de tus sueños ',
      image: 'assets/img/6.jpg',
      rooms: 5,
      meters: 500,
    },
  ]

 //Cards creation
 const dataLoad = function (image, name, rooms, meters, description) {
    template += `<div class="house"><div class="img" style=" background-image: url('${image}');"></div>
    <section>
    <h5>${name}</h5>
    <div class="d-flex justify-content-between">
    <p>Cuartos: ${rooms}</p>
    <p>Metros: ${meters}</p>
    </div>
    <p class="my-3">${description}</p>
    <button class="btn btn-info">Ver más</button>
    </section>
    </div>`
  } 