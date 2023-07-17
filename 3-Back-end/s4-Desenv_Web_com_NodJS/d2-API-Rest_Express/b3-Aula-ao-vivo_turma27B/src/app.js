const express = require('express');
const fs = require('fs').promises; // fs é um módulo nativo do node.js que permite interagir com o sistema de arquivos do computador, o método promises permite que o fs trabalhe com promises
// Para guardar os novos objetos e nao perder as informacoes assim que o servidor for reninciado vamos criar um arquivo chamado activities.json e adicionar o array activities

const app = express();

app.use(express.json()); 

//CRIANDO AS CONSTANTES PARA GRAVAR OS DADOS NO ARQUIVO JSON
const readFile = async () => {
    try {
        const activities = await fs.readFile('src/activities.json', 'utf-8'); 
        return JSON.parse(activities); // o método JSON.parse() converte uma string JSON para um objeto JavaScript
        
    } catch (error) {
        console.error(`Arquivo nao pode ser lido: ${error}`)    
    }
};

const writeFile = async (activityArr) => {
    await fs.writeFile('src/activities.json', JSON.stringify(activityArr)); // o método JSON.stringify() converte um objeto JavaScript para uma string JSON
};

/* ********************************************************************************************************************** */

app.get('/activities', async(_req, res) => {
const activities = await readFile();
res.status(200).json( activities );

});

app.post('/activities', async(req, res) => {
    const activities = await readFile();
    const newActivity = { ...req.body }; 
    activities.push(newActivity);

    return res.status(201).json({ newActivity }); 
});


app.get('/activities/:id', async (req, res) => {
    const activities = await readFile();
    const activity = activities.find(({ id }) => id === Number(req.params.id));
    return res.status(200).json(activity);
}); 

app.put('/activities/:id', async(req, res) => { 
    const { id } = req.params;
    const { name, type } = req.body;
    let activities = await readFile();

    
    const updateActivity = activities.map((activity) => {
        if (activity.id === Number(id)) {
            activity.name = name;
            activity.type = type;
        }
        return activities;
    });
    await writeFile(activities);
    return res.status(200).json({ updateActivity });
});

app.delete('/activities/:id', async(req, res) => {
    const { id } = req.params;
    const activities = await readFile();
    const arrayPosition = activities.findIndex((activity) => activity.id === Number(id));
    activities.splice(arrayPosition, 1);

    await writeFile(activities);
    return res.status(200).end();
});


module.exports = app;