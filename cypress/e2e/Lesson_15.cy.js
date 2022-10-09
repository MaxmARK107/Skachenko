describe ('API testing', () => {
    /*before ('visit', () => {
        cy.visit('http://dummy.restapiexample.com/');
    });*/
    it ('test_1', () => {
        cy.request('GET', 'http://dummy.restapiexample.com/api/v1/employees')
        .its('status').should('eq', 200);
    });
    it ('test_2', () => {
        cy.request('GET', 'http://dummy.restapiexample.com/api/v1/employees')
        .its('body')
        .its('data')
        .should('not.be.empty')
        .should('deep.include', {
            id:1,
            employee_name:"Tiger Nixon",
            employee_salary:320800,
            employee_age:61,
            profile_image:""
        });
    });
    it ('test_3', () => {
        const bodyRequest = {name:"test", salary:"123", age:"23"};
        const baseUrl = 'http://dummy.restapiexample.com/api/v1'
        cy.request('POST', `${baseUrl}/create`, bodyRequest)
        .its('body')
        .its('message')
        .should('eq', 'Successfully! Record has been added.');
    });
    it ('test_4', () => {
        const bodyRequest = {
            "id": 195465,
            "category": {
              "id": 123,
              "name": "Test"
            },
            "name": "Rocky",
            "photoUrls": [
              "arfgbsrtgb"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          };
        const targetUrl = 'https://petstore.swagger.io/v2'
        cy.request('POST', `${targetUrl}/pet`, bodyRequest)
        .its('status')
        .should('eq', 200);
    });
    it.only ('test_5', () => {
        const bodyRequest = {status: "sold"};
        const targetUrl = 'https://petstore.swagger.io/v2/pet'
        cy.request('GET', `${targetUrl}/findByStatus`, bodyRequest)
        .its('status')
        .should('eq', 200);
    });
});