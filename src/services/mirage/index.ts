import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

type User = {
    name:string;
    email:string;
    created_at: string;
}

export function MakeServer(){
    const server = createServer({
        models:{
            users: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i){
                    return `User: ${i + 1}`
                },
                email(){
                    return ''
                },
                createdAt(){
                    return ''
                }
            })
        },

        seeds(){
            server.createList('user',200)
        },

        routes(){
            this.namespace = 'api'
            this.timing = 750;

            this.get("/users");
            this.post("/users");

            this.namespace = ''
            this.passthrough()
        }
    })

    return server;
}