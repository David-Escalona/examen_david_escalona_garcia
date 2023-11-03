const boton = document.querySelector("#boton")
const botonMartes = document.querySelector("#botonMartes")
const botonBuscador = document.querySelector("#botonBuscador")

botonBuscador.addEventListener('click', Buscador)
boton.addEventListener('click', Menu)
botonMartes.addEventListener('click', MenuMartes)

function Menu(){

    const array1 = [
        {
            "PrimerPlato": "Sopa de lentejas",
            "SegundoPlato": "Ensalada César",
            "TercerPlato": "Risotto de champiñones",
        }]

    const array2 = [
        {
            "PrimerPlato1": "Lomo de cerdo a la parrilla con salsa de mostaza",
            "SegundoPlato1": "Salmón a la plancha con puré de patatas",
            "TercerPlato1": "Espaguetis a la bolognesa",
        }]
        
    const array3 = [
        {
            "PrimerPlato2": "Tarta de chocolate con helado de vainilla",
            "SegundoPlato2": "Fruta fresca de temporada",
            "TercerPlato2": "Tiramisú",
        }
    ]

    let platos1
    let platos2
    let platos3

    for(i=0;i<array1.length;i++){
        platos1 += `
        <p class="card-text"><strong>${array1[i].PrimerPlato}</strong></p>
        <p class="card-text"><strong>${array1[i].SegundoPlato}</strong></p>
        <p class="card-text"><strong>${array1[i].TercerPlato}</strong></p>
        `
    }

    for(i=0;i<array2.length;i++){
        platos2 += `
        <p class="card-text"><strong>${array2[i].PrimerPlato1}</strong></p>
        <p class="card-text"><strong>${array2[i].SegundoPlato1}</strong></p>
        <p class="card-text"><strong>${array2[i].TercerPlato1}</strong></p>
        `
    }

    for(i=0;i<array3.length;i++){
        platos3 += `
        <p class="card-text"><strong>${array3[i].PrimerPlato2}</strong></p>
        <p class="card-text"><strong>${array3[i].SegundoPlato2}</strong></p>
        <p class="card-text"><strong>${array3[i].TercerPlato2}</strong></p>
        `
    }

    console.log(platos1)
    console.log(platos2)
    console.log(platos3)

    document.querySelector("#PrimerPlato").innerHTML = platos1
    document.querySelector("#PrimerPlato1").innerHTML = platos2
    document.querySelector("#PrimerPlato2").innerHTML = platos3

    const date = new Date()
    console.log(date)

    if(date == Menu){
        document.querySelector("#PrimerPlato").innerHTML = platos1
        document.querySelector("#PrimerPlato1").innerHTML = platos2
        document.querySelector("#PrimerPlato2").innerHTML = platos3
    }else{
        alert("Hoy no es el dia para ver el menu")
        document.querySelector("#PrimerPlato").innerHTML = ""
        document.querySelector("#PrimerPlato1").innerHTML = ""
        document.querySelector("#PrimerPlato2").innerHTML = ""
    }

}

function MenuMartes(){

    const arrayMartes1 = [
        {
            "PrimerPlato": "Sopa de lentejas",
            "SegundoPlato": "Ensalada griega",
            "TercerPlato": "Paella de mariscos",
        }]

    const arrayMartes2 = [
        {
            "PrimerPlato1": "Pollo al curry con arroz basmati",
            "SegundoPlato1": "Bacalao a la vizcaína",
            "TercerPlato1": "Ratatouille",
        }]
        
    const arrayMartes3 = [
        {
            "PrimerPlato2": "Tarta de chocolate con helado de vainilla",
            "SegundoPlato2": "Fruta fresca de temporada",
            "TercerPlato2": "Tiramisú",
        }
    ]

    let platosMartes1
    let platosMartes2
    let platosMartes3

    for(a=0;a<arrayMartes1.length;a++){
        platosMartes1 += `
        <p class="card-text"><strong>${arrayMartes1[a].PrimerPlato}</strong></p>
        <p class="card-text"><strong>${arrayMartes1[a].SegundoPlato}</strong></p>
        <p class="card-text"><strong>${arrayMartes1[a].TercerPlato}</strong></p>
        `
    }

    for(a=0;a<arrayMartes2.length;a++){
        platosMartes2 += `
        <p class="card-text"><strong>${arrayMartes2[a].PrimerPlato1}</strong></p>
        <p class="card-text"><strong>${arrayMartes2[a].SegundoPlato1}</strong></p>
        <p class="card-text"><strong>${arrayMartes2[a].TercerPlato1}</strong></p>
        `
    }

    for(a=0;a<arrayMartes3.length;a++){
        platosMartes3 += `
        <p class="card-text"><strong>${arrayMartes3[a].PrimerPlato2}</strong></p>
        <p class="card-text"><strong>${arrayMartes3[a].SegundoPlato2}</strong></p>
        <p class="card-text"><strong>${arrayMartes3[a].TercerPlato2}</strong></p>
        `
    }

    console.log(platosMartes1)
    console.log(platosMartes2)
    console.log(platosMartes3)

    document.querySelector("#PrimerPlatoMartes").innerHTML = platosMartes1
    document.querySelector("#PrimerPlatoMartes1").innerHTML = platosMartes2
    document.querySelector("#PrimerPlatoMartes2").innerHTML = platosMartes3

    const date = new Date()
    console.log(date)

    if(date == MenuMartes){
        alert("Hoy no es el dia para ver el menu")
        document.querySelector("#PrimerPlato").innerHTML = ""
        document.querySelector("#PrimerPlato1").innerHTML = ""
        document.querySelector("#PrimerPlato2").innerHTML = ""
    }else{
        document.querySelector("#PrimerPlatoMartes").innerHTML = platosMartes1
        document.querySelector("#PrimerPlatoMartes1").innerHTML = platosMartes2
        document.querySelector("#PrimerPlatoMartes2").innerHTML = platosMartes3
    }
}

function Buscador(){
    
    const menu = [
        'Sopa de lentejas',
        'Ensalada César',
        'Risotto de champiñones',
    ]

    document.querySelector("#busqueda").innerHTML = menu
}

const apertura = document.querySelector("#botonApertura")
apertura.addEventListener('click',Fecha)

function Fecha(){

    const fechaAbrir = new Date(2023, 0, 1, 2, 3, 4, 567)

    document.querySelector("#abrir").innerHTML = fechaAbrir
}

const cierre = document.querySelector("#botonCierre")
cierre.addEventListener('click',Cerrar)

function Cerrar(){
    
    const fechaCerrar = new Date(2024, 0, 1, 2, 3, 4, 567)

    document.querySelector("#cerrar").innerHTML = fechaCerrar

}