// Docker é uma ferramenta que permite criar, gerenciar e rodar containers.
// Containers são ambientes isolados que podem ser criados a partir de imagens.
// Uma imagem é um pacote que contém tudo o que é necessário para rodar um programa, incluindo bibliotecas, código, runtime, ferramentas do sistema e configurações.

// Comandos Docker
// docker --help: lista todos os comandos disponíveis.
// docker logs -f ID_DO_CONTAINER: exibe os logs de um container.
// docker --version: mostra a versão do docker instalada.
// docker ps: lista os containers em execução no momento.
// docker ps -a: lista todos os containers, independentemente de estarem em execução ou não.
// docker run NOME_DA_IMAGEM: cria um container com a respectiva imagem passada como parâmetro.
// docker run -it NOME_DA_IMAGEM: conecta o terminal que estamos utilizando com o do container.
// docker run -d -P --name NOME dockersamples/static-site: cria um container com um nome específico (-d -P).
// docker run -d -p 12345:80 dockersamples/static-site: define uma porta específica para ser atribuída à porta 80 do container, neste caso 12345.
// docker system prune -a: remove todos os containers que estão parados, todas as redes não utilizadas, todas as imagens sem tag e todos os caches.
// docker system prune -af : remove tudo que for deletável, sem pedir confirmação. Tanto imagens, quanto containers. CUIDADO!!!!
// docker start ID_CONTAINER: inicia o container com id em questão.
// docker stop ID_CONTAINER: interrompe o container com id em questão.
// docker start -a -i ID_CONTAINER: inicia o container com id em questão e integra os terminais, além de permitir interação entre ambos.
// docker rm ID_CONTAINER: remove o container com id em questão.
// docker rm -f ID_CONTAINER: remove o container com id em questão mesmo que ele esteja em execução.
// docker exec -it ID_CONTAINER: adiciona o terminal, e permite interagir com o container.







