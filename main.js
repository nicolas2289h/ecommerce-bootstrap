(()=>{
const collectionBtns = document.querySelector('.collection-btns')
const btns = collectionBtns.children
const collectionList = document.querySelector('.collection-list')
const list = collectionList.children

function filtrarImagen(lista, categoria){
    for (let j = 0; j < lista.length; j++) {
        if(!lista[j].classList.contains(categoria)){
            lista[j].style.transform = 'scale(0)';
            setTimeout(() => {
                lista[j].classList.add('ocultar-img')
            }, 350);
        }
    }
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',()=>{
        let btnActivo = document.querySelector('.btn-activo')
        btnActivo.classList.remove('btn-activo')
        
        // reset de propiedades
        for (let j = 0; j < list.length; j++) {
            list[j].style.transform = 'scale(1)'
            list[j].classList.remove('ocultar-img')
        }

        //filtrado de imagenes
        if(btns[i].classList.contains('btn-todo')){
            btns[i].classList.add('btn-activo')
    
        }else if(btns[i].classList.contains('btn-vendido')){
            btns[i].classList.add('btn-activo')
            filtrarImagen(list, 'vendido')

        }else if(btns[i].classList.contains('btn-recomendado')){
            btns[i].classList.add('btn-activo')
            filtrarImagen(list, 'recomendado')

        }else if(btns[i].classList.contains('btn-nuevo')){
            btns[i].classList.add('btn-activo')
            filtrarImagen(list, 'nuevo')
        }
    })
}
})()



// agrandar imagen al clickear
// const collection = document.querySelector('.collection')
// const collectionImg = document.querySelectorAll('.collection-img')
// const addedCollection = document.querySelector('.added-collection')
// const closeBtn = document.querySelector('.close')
// const addedImg = document.querySelector('.added-img')

// collectionImg.forEach(item=>{
//   item.addEventListener('click',()=>{
//     addedCollection.classList.add('show-collection')
//     let img = item.querySelector('img').src
//     addedImg.src = img
//   })
// })

// closeBtn.addEventListener('click',()=>{
//   addedCollection.classList.remove('show-collection')
// })