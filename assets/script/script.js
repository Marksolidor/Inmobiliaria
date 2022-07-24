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

  //veriables declarations
  const html = document.querySelector('.houses') 
  const buttonSearch = document.querySelector('.search') 
  const rooms = document.querySelector('.rooms')
  const metersMin = document.querySelector('.min-meters')
  const metersMax = document.querySelector('.max-meters') 
  const total = document.querySelector('.py-3') 
  let template = '' 
  let numReg = 0 
  

  //Reusable function
  const setview = function (click, rommsSearch, MeterMinSearch, MeterMaxSearch) {
    /***********************Valida que los datos ingresados no estén vacíos***************************************/
    if (
      click === 'Search' &&
      (rooms.value === '' || metersMin.value === '' || metersMax.value === '')
    ) {
      alert('Debes ingresar todos los parámetros de búsqueda')
      return
  
      /***********************Valida que el mínimo de metros no sea mayor que el maximo de metros ingresados*******/
    } else if (metersMin.value > metersMax.value) {
      alert('El mínimo de metros no puede ser mayor a máximo de metros')
      return
    } else {
      /*************Resetea los parámetros necesario para desplegar la información de la nueva búsqueda*************/
      template = ''
      html.innerHTML = ''
      numReg = 0
      /*************comienza el bucle con un if para filtra la información que se mostrara en el HTML****************/
      for (let prop of propiedadesJSON) {
        if (
          prop.rooms >= rommsSearch &&
          prop.meters >= MeterMinSearch &&
          prop.meters <= MeterMaxSearch
        ) {
          /*************Se comienza a recopilar la información en las variables por cada ciclo del bucle************/
          numReg = numReg + 1
          dataLoad(prop.image, prop.name, prop.rooms, prop.meters, prop.description)
        }
      }
      /****************Se Pasa la información recopilada en el bucle (fuera de este) al HTML******************/
      html.innerHTML = template
      total.innerHTML = `Total: ${numReg}`
    }
  }
  /*************Se llama a la función setview para realizar la búsqueda desde el botón********************/
  buttonSearch.addEventListener('click', () => {
    setview('Search', rooms.value, metersMin.value, metersMax.value)
  })
  /****Se llama a la función setview para realizar al momento de cargar la pagina con toda la data********/
  setview('noSearch', -Infinity, -Infinity, Infinity)