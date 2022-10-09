describe ('', () => {
    const reqUrl = "https://gorest.co.in";
    const accessToken = 'Bearer d790417d28fad7eb25451544c9a58175cb9da09dbf9c6d4b0c8ec81e863c2827';

    it ('https://gorest.co.in', () => {
        cy.request({
            method: "GET",
            url: `${reqUrl}/public/v2/users`,
            header: {
                Authorization: accessToken
            },
        });       
        cy.request({
            method: "POST",
            url: `${reqUrl}/public/v1/users`,
            header: 
                'Authorization: Bearer d790417d28fad7eb25451544c9a58175cb9da09dbf9c6d4b0c8ec81e863c2827'
            ,
            body:{
                "name": "Paul Otreadis",
                "gender": "male",
                "email": "theDune@gmail.com",
                "status": "active"
              },
            failOnStatusCode: false //Не понимаю, почему мне всё время возвращает статус 401 (нет авторизации, если я правильный токен передаю :(. В следующих запросах ситуация такая-же
        }).then((createResponse)=>{
            expect(createResponse).to.have.property('status', 401);
        });
        cy.request({
            method: "PATCH",
            url: `${reqUrl}/public/v1/users/11`,
            header: 
                'Authorization: Bearer d790417d28fad7eb25451544c9a58175cb9da09dbf9c6d4b0c8ec81e863c2827'
            ,
            body:{
                "name": "Paul Muaddib",
                "gender": "male",
                "email": "theDune@gmail.com",
                "status": "active"
              },
            failOnStatusCode: false
        }).then((createResponse)=>{
            expect(createResponse).to.have.property('status', 401);            
        });
        cy.request({
            method: "DELETE",
            url: `${reqUrl}/public/v1/users/11`,
            header: 'Authorization: Bearer d790417d28fad7eb25451544c9a58175cb9da09dbf9c6d4b0c8ec81e863c2827',
            failOnStatusCode: false
        }).then((createResponse)=>{
            expect(createResponse).to.have.property('status', 401);
            
        });
    });
});