describe ('API testing', () => {
    before ('Visit Site', () => {
        cy.visit('gorest.co.in');
    });
    it ('test_01 Create user', () => {
        const authToken = 'Bearer 9fe57a6864b1069825ec39822c5921a28994edad1d28e6953d2699e9c1e088c6';
        cy.request({
            method:"POST",
            url:"gorest.co.in/public/v2/users",
            header:{
                Authorization: authToken
            },
            body:{
                name:"Obi-Wan Kenoby",
                gender:"male",
                email:"qwertyu@gmail.com",
                status:"active",
                }
        }).then(function(response){
            expect(response).to.have.property('status', 200);
        }).then((response) => {
            const userId = response.body.data.id;
            cy.log('USERID = ', userId);
            const {id, email} = response.body.data; 
            cy.log('ID = ', id);
            cy.log('email = ', email);
        });
    });
    it ('test_01 Create user', () => {
        const authToken = 'Bearer 9fe57a6864b1069825ec39822c5921a28994edad1d28e6953d2699e9c1e088c6';
        cy.request({
            method:"POST",
            url:"gorest.co.in/public/v2/users",
            header:{
                Authorization: authToken
            },
            body:{
                name:"Obi-Wan Kenoby",
                gender:"male",
                email:"qwertyu@gmail.com",
                status:"active",
                }
        }).then(function(response){
            expect(response).to.have.property('status', 200);
        }).then((response) => {
            const userId = response.body.data.id;
            cy.log('USERID = ', userId);
            const {id, email} = response.body.data; 
            cy.log('ID = ', id);
            cy.log('email = ', email);
        });
    });
});
