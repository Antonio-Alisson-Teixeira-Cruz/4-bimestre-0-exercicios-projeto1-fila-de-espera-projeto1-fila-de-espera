let queue = []
let question
do{if(queue <= 0){
            question = prompt(`Fila de espera:

            Opções:
            1 - Novo paciente
            2 - Consultar paciente
            3 - Sair
            `)
    } else {
        for(let i = 0; i < queue.length; i++){
            question = prompt(`Fila de espera:
            ${i + 1}
        Opções:
            1 - Novo paciente
            2 - Consultar paciente
            3 - Sair
            `)
        }
    }
}while(question != 3)
