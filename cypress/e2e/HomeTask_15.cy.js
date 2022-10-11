/*
Commanets: 
1. Плохо читается, надо улучшать, выносить body в переменные
2. Еще по нет запросов по store. and user?
*/


describe ('', () => {
    it ('petstore.swagger.io/#/', () => {
        const reqUrl = "https://petstore.swagger.io/v2/pet";
        cy.request({
            method: "POST",
            url: reqUrl,
            body:{
                id: 1521,
                category: {
                  id: 1521,
                  name: "Dog"
                },
                name: "Hachiko",
                photoUrls: [
                    "https://www.google.com/"
                ],
                tags: [
                  {
                    id: 0,
                    name: "string"
                  }
                ],
                status: "available"
              }
        }).then((createResponse)=>{
            const crResp = createResponse.status;
            expect(crResp).to.be.equal(200);
        });
        cy.request({
            method: "PUT",
            url: reqUrl,
            body:{
                id: 1521,
                category: {
                  id: 1521,
                  name: "Dog"
                },
                name: "Butch",
                photoUrls: [
                    "https://www.google.com/"
                ],
                tags: [
                  {
                    id: 0,
                    name: "string"
                  }
                ],
                status: "available"
              }
        }).then((updateResponse)=>{
            const udResp = updateResponse.status;
            expect(udResp).to.be.equal(200);
        });
        cy.request({
            method: "GET",
            url: `${reqUrl}/findByStatus?status=available`
        }).then((findResponse)=>{
            const fdResp = findResponse.status;
            expect(fdResp).to.be.equal(200);
        });
        cy.request({
            method: "GET",
            url: `${reqUrl}/1521`
        }).then((findIdResponse)=>{
            const fdIdResp = findIdResponse.status;
            expect(fdIdResp).to.be.equal(200);
        });
        cy.request({
            method: "POST",
            url: `${reqUrl}/1521`,
            header: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
                name: "Snoopy",
                status: "sold"
            },
            failOnStatusCode: false
        })/*.then((udFormResponse)=>{
            const {id, name, status} = udFormResponse.body;
            expect(id).to.be.equal(1521);
            expect(name).to.be.equal("Snoopy");
            expect(status).to.be.equal("sold");
        })*/;
        cy.request({
            method: "DELETE",
            url: `${reqUrl}/1521`,
            header: {
                accept: "application/json"
            }
        }).then((dltResponse)=>{
            const {status} = dltResponse;
            expect(status).to.be.equal(200);
        });
    });
});
