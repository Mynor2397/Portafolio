var elementsGo = [
    {
        languaje: "GO",
        icon: "go.png",
        image: 'vpo.jpg',
        description: `
        Oficina Parroquial Virtual, Sistema de administración de partidas de bautismo,
        Angular, Go, Tailwind css.
        `,
        repository: '#',
        vista: '#'
    }
]

var elementsJS = [
    {
        languaje: "JS",
        icon: "js.png",
        image: 'TSE.png',
        description: `
        Sistema de administración de votos para el TSE, 
        como parte de las actividades universitarias, 
        construido con HTML, las librerias JQuery y Bootstrap
        `,
        repository: "https://github.com/Mynor2397/TSEOFICIAL",
        vista: "https://mynor2397.github.io/TSEOFICIAL/"
    },
    {
        languaje: "JS",
        icon: "js.png",
        image:"psicoapp.jpg",
        description: `
        Sistema de administración de casos psicológicos, con sistema de autenticación 
        y manejo del sistema por roles,asi como la integración con React
        `,
        repository: "#",
        vista: "http://www.psicoapp.online:8080/gridcasos"
    },
    {
        languaje: "JS",
        icon: "js.png",
        image:"docmapping.jpg",
        description: `
        Sistema de detección de contenido de documentos, con carga de imagenes,
        visualización de contenido y consulta entre rangos de fecha

        <li>AWS lambda
        <li>AWS Textract
        <li>AWS DynamoDB
        <li>AWS Simple Queue Service
        <li>AWS RDS for Mysql
        <li>AWS S3
        <li>AWS CloudFormation
        <li>AWS Amazon API Gateway
        `,
        repository: 'https://github.com/Mynor2397/Lambda_ProyectoFinalIS',
        vista: '#'
    }
    
    

    
]


function projectsGo() {
    var team = document.getElementById('team')
    let projects = ``
    elementsGo.forEach(element => {
        projects += `
        <div class="ed-item ed-container m-auto s-100 m-100 l-90 ">
        <div class="ed-item ed-container">
            <div class="p-6">
                <div class="shadow-lg px-2 flex items-center">
                    <div class="ed-item l-60 py-4 radius border-radius">
                        <img src="./public/images/projects/${element.image}" width="600" height="150" class="zoom" >
                    </div>
                    <div class="ed-item l-40 py-4">
                        <div class="text-right text-3x1">
                            <i class="fab fa-js-square text-yellow-400 pr-3 "></i>
                        </div>
                        <div class="text-gray-700 text-justify">
                            ${element.description}
                        </div>
                        <div class="pt-4 pb-2">
                            <span
                                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-2xl">
                                <i class="fab fa-github-square"><a href="${element.repository}" target="_blank">Repositorio</a></i></span>
                            <span
                                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-2xl">
                                <i class="fas fa-binoculars"><a href="${element.vista}" target="_blank">Vista previa</a></i></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

                `

    });

    team.innerHTML = projects
}

projectsGo()


function projectsJS() {
    var team = document.getElementById('team')
    let projects = ``
    elementsJS.forEach(element => {
        projects += `
        <div class="ed-item ed-container m-auto s-100 m-100 l-90 ">
        <div class="ed-item ed-container">
            <div class="p-6">
                <div class="shadow-lg px-2 flex items-center">
                    <div class="ed-item l-60 py-4 radius border-radius">
                        <img src="./public/images/projects/${element.image}" width="600" height="150" class="zoom" >
                    </div>
                    <div class="ed-item l-40 py-4">
                        <div class="text-right text-3x1">
                            <i class="fab fa-js-square text-yellow-400 pr-3 "></i>
                        </div>
                        <div class="text-gray-700 text-justify">
                            ${element.description}
                        </div>
                        <div class="pt-4 pb-2">
                            <span
                                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-2xl">
                                <i class="fab fa-github-square"><a href="${element.repository}" target="_blank">Repositorio</a></i></span>
                            <span
                                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 text-2xl">
                                <i class="fas fa-binoculars"><a href="${element.vista}" target="_blank">Vista previa</a></i></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

                `
    })



    team.innerHTML = projects
}
