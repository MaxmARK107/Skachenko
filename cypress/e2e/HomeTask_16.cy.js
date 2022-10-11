/*
Comments:
1. Воспользуйся faker: чтобы данные менялись, тогда не будет проблемы с авторизацией
body:{
                "name": "Paul Otreadis",
                "gender": "male",
                "email": "theDune@gmail.com",
                "status": "active"
              }, 
              
 2. Запросы надо объединить , тогда у тебя будет каждый раз использовать  id  который генерируется в первом реквесте, 
 и ты сможешь его передавать между then        
 
 Пример
 
 
 /// <reference types="cypress" />
import { faker } from "@faker-js/faker";
/*
И так домашнее задание:
Home work: 
1.Если не закончили с практическим заданием - дописываем
2. Дописать тесты на https://gorest.co.in/
PUT / Path и DELETE (по аналогии с практическим)
*/

describe("GoRest test", () => {
  /*
curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ec18a526fd2eae8eff3b910dc464ee93806dace7fecc897cd46e536cd9203a50" -XGET "https://gorest.co.in/public/v2/users"

curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ec18a526fd2eae8eff3b910dc464ee93806dace7fecc897cd46e536cd9203a50" -XPOST "https://gorest.co.in/public/v2/users" -d '{"name":"Tenali Ramakrishna", "gender":"male", "email":"tenalid.ramakrishna@15ce.com", "status":"active"}'

curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XPATCH "https://gorest.co.in/public/v2/users/13" -d '{"name":"Allasani Peddana", "email":"allasani.peddana@15ce.com", "status":"active"}'

curl -i -H "Accept:application/json" -H "Content-Type:application/json" -H "Authorization: Bearer ACCESS-TOKEN" -XDELETE "https://gorest.co.in/public/v2/users/13"
*/

  it.only("PUT/PATCH", () => {
    const bearerToken =
      "Bearer ec18a526fd2eae8eff3b910dc464ee93806dace7fecc897cd46e536cd9203a50";
    const baseUrl = "https://gorest.co.in/public/v2/";
    const randomEmail = faker.internet.email();
    const randomName = faker.name.fullName();
    const defaultBody = {
      name: randomName,
      gender: "female",
      email: randomEmail,
      status: "active",
    };

    const updatedBody = {
      name: randomName,
      email: randomEmail,
      status: "active",
    };
    cy.request({
      method: "POST",
      url: `${baseUrl}/users`,
      headers: {
        Authorization: bearerToken,
      },
      body: defaultBody,
    }).then((response) => {
      const { id } = response.body;
      cy.log("Result ", id);
      cy.request({
        method: "PUT",
        url: `${baseUrl}/users/${id}`,
        headers: {
          Authorization: bearerToken,
        },
        body: updatedBody,
      }).then(() => {
        cy.request({
          method: "DELETE",
          url: `${baseUrl}/users/${id}`,
          headers: {
            Authorization: bearerToken,
          },
        })
          .its("status")
          .should("equal", 204);
      });
    });
  });
});

 
 
 
            
*/

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
