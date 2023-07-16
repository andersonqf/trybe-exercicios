/* AULA 4.1 NODE.JS RUNTIME ASSINCRONO / LEITURA E ESCRITA DE ARQUIVOS  */

const fs = require('fs').promises; // Importando o módulo `fs` do Node.js para lidar com o sistema de arquivos do computador (file system)
const path = require('path'); // Importando o módulo `path` do Node.js para lidar com caminhos de arquivos e diretórios

async function readMissionsData() { // Criando uma função assíncrona chamada `readMissionsData` para fazer a LEITURA do arquivo `missions.js` e retornar o conteúdo do arquivo como um array de objetos JavaScript
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../../data/missions.json')); // Lendo o arquivo `missions.js` de forma assíncrona através do método `readFile` do módulo `fs` do Node.js e armazenando o conteúdo do arquivo na variável `data` como uma string JSON (JavaScript Object Notation)
    const missions = JSON.parse(data); // Convertendo a string JSON armazenada na variável `data` em um array de objetos JavaScript e armazenando o resultado na variável `missions`
    
    return missions; // Retornando o array de objetos JavaScript
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`); // Caso ocorra algum erro, exibir uma mensagem de erro no console
  }
}

async function writeMissionsData(newMissions) {
  try {
    const oldMissions = await readMissionsData();
    const newMissionsWithId = { id: oldMissions.length + 1, ...newMissions };
    const allMissions = JSON.stringify([...oldMissions, newMissionsWithId]);     

    await fs.writeFile(path.resolve(__dirname, '../../data/missions.json'), allMissions);
    return newMissionsWithId;
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

async function updateMissionData(id, _updatedMissionData) {
  const oldMissions = await readMissionsData();
  const updatedMission = { id, ...updateMissionData };
  const updatedMissions = oldMissions.reduce((missionsList, currentMission) => {
    if (currentMission.id === updatedMission.id) return [...missionsList, updatedMission];
    return [...missionsList, currentMission];
  }, []); 
  
  const updateData = JSON.stringify(updatedMissions);
try {
  await fs.writeFile(path.resolve(__dirname, '../../data/missions.json'), updateData);
  console.log(`Atualizou a missão com id ${id}`);
  
  return updatedMission;
} catch (error) {
  console.error(`Erro na escrita do arquivo: ${error}`);
  }
} 

async function deleteMissionData(id) {
  const oldMissions = await readMissionsData();
  const updatedMissions = oldMissions.filter((mission) => mission.id !== id);
  
  const updateData = JSON.stringify(updatedMissions);
  try {
    await fs.writeFile(path.resolve(__dirname, '../../data/missions.json'), updateData);
    console.log(`Deletou a missão com id ${id}`);
  } catch (error) {
    console.error(`Erro na escrita do arquivo: ${error}`);
    }
}

module.exports = {
  readMissionsData,
  writeMissionsData,
  updateMissionData,
  deleteMissionData,
};
