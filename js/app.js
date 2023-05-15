const banderas = document.querySelector('#banderas');

document.addEventListener('DOMContentLoaded', e => {
    fetchData()
});

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        banderillas(data)
        formularioCliente(data)
    } catch (error) {
        console.log(error);
    }
}

const banderillas = data => {
    let elementos = '';
    
    data.forEach(item => {
        elementos += /* html */`
        <article class="card"> 
            <img src="${item.flags.svg} " alt="" class="img-fluid">
            <div class="card-content">
                <h3>${item.name.common}</h3>
                <p>
                    <b>Population: </b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital: </b>
                    ${item.capital}
                </p>
                <p>
                    <b>Regionn: : </b>
                    ${item.region}
                </p>
            </div>
        </article>
        `;
    });
    banderas.innerHTML = elementos
}