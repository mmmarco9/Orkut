import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = '6480bfefbacc4e9a940257a5f045c4';
        const client = new SiteClient(TOKEN);
        
        
        const registroCriado = await client.items.create({
            itemType: "836335", 
            ...request.body,
         
        })
    
        console.log(registroCriado);
    
        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}