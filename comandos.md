#Códigos do desafio: 
 ## 1- #together


# Iniciar o projeto
  ### -yarn init -y

#  Add Typescript ao projeto
  ### -yarn add typescript -D

# Gerar arquivo Typescript de config
  ### -yarn tsc --init

# Gerar arquivo de build do TS para JS
 ### -yarn tsc

###  Iniciando o projeto com express:
    # -yarn add express
        ## -yarn add @types/express -D
   
    ##### Gerar build do TS para JS automatico sem precisar de gerar um novo arquivo de build
        ###### -yarn add ts-node-dev -D
        ###### dentro do packge.json  
                    "scripts": {
                                "dev": "ts-node-dev src/server.ts"
                    },
        para rodar o servidor  ` yarn run dev ´
# Instalando ORM e BD
  ## - yarn add typeorm reflect-metadata sqlite3 
  ## Criando as migrations
    ### Adicionar o scrpit do typeorm no packge.json 
        #### - "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
        #### - yarn typeorm migration:create -n createUsers //criando usuarios
        #### - yarn typeorm migration:run // Ativando migration após configurar 

        #Criando Entity
        #### - yarn typeorm entity:create -n User // Criando model
        #### - yarn add @types/uuid -D // instalando UUID 

