const formulario = document.querySelector('#formulario');
const inputFormulario = document.querySelector('#inputFormulario');


const formularioCliente = data => {
    formulario.addEventListener('keyup', e =>{
        e.preventDefault();
        const letraCliente = inputFormulario.value.toLowerCase();
        const formularioFiltrado = data.filter(item => {
            const textoApi = item.name.toLowerCase();
            if (textoApi.indexOf(letraCliente) !== -1) {
                return item;
            }
        })
        console.log(formularioFiltrado);
    });
};
