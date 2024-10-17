let queue = []
let question
let name

do{if(queue <= 0){
            question = prompt(`Fila de espera:

            Opções:
            1 - Novo paciente
            2 - Consultar paciente
            3 - Sair
            `)
            
            if(question = 1){
                name = prompt('Qual o nome do paciente?')
                queue += name
            }
    } else {
        for(i=0;i<queue.length;i++){
            prompt(
                `Fila de espera:
                ${i}° ${queue[i]}`
            )

        }
        question = prompt(`Opções:
            1 - Novo paciente
            2 - Consultar paciente
            3 - Sair`)
    }
}while(question != 3)
