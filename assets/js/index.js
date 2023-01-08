taskList = [];


const actualizarConteo = () => {
    let conteo = 0;
    let conteoRealizadas = 0;
    for (task of taskList) {
        conteo = conteo + 1
        if (task.state == true) {
            conteoRealizadas = conteoRealizadas + 1
        }
    }
    total = document.querySelector('#total')
    realizadas = document.querySelector('#realizadas')
    total.innerHTML = conteo
    realizadas.innerHTML = conteoRealizadas
}

const agregarTarea = () => {
    nombre = document.querySelector('#nombre').value
    const newtask = {
        id: taskList.length + 1,
        name: nombre,
        state: false
    }
    taskList.push(newtask)
    dibujarTabla()
}

const eliminarTarea = (id) => {
    index = taskList.findIndex(task => task.id == id)
    taskList.splice(index, 1)
    dibujarTabla()
}

const cambiarEstado = (id) => {
    index = taskList.findIndex(task => task.id == id)
    if (taskList[index].state == false){
        taskList[index].state = true}
    dibujarTabla()
}

const dibujarTabla = () => {
    tareas.innerHTML = `
        <thead>
            <th> ID </th>
            <th> Tarea </th>
            <th> Estado </th>
        </thead>
        `
    for (task of taskList) {
        tareas = document.querySelector('#tareas')
        if (task.state == false) {
            estado = "no_realizado"
        } else {
            estado = "realizado"
        }
        tareas.innerHTML += `
        <tr>
        <td>${task.id}</td>
        <td>${task.name}</td>
        <td>${estado}<td>
        <td><button onclick="cambiarEstado(${task.id})" class="${estado}">cambiar estado</button></td>
        <td><button onclick="eliminarTarea(${task.id})">eliminar</button></td>
        </tr>
        `
    }
    actualizarConteo()
}



btnAgregar = document.querySelector('#agregar')
btnAgregar.addEventListener('click', agregarTarea)