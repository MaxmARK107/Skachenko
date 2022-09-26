/* Comments:
1)  поменяй ссылку и тест начнет работать и проходить - https://yevheniiahlovatska.editorx.io/web-practice/post/manage-your-blog-from-your-live-site

вот примеры как еще сделали

describe ('Добавление комментария' , () => {
   it('Авторизация сразу+удаление', () => {
    cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event').viewport('ipad-mini');
    cy.wait(9000);
    cy.get('[data-testid="section-container"] button').eq(0).click();
    Cypress.on('uncaught:exception', (err) => { //ошибка Error: ResizeObserver loop limit exceeded
    return false;
     });
    cy.get('[data-testid="signUp.switchToSignUp"]').click();
    cy.get('[id*="Email"] button').click();
    cy.get('[type="email"]').type('fortestonly@mail.com', {delay : 20});
    cy.get('[type="password"]').type('Qwerty123*', {delay : 20});
    cy.get('[data-testid="submit"] button').click();
    cy.wait(5000);
    cy.get('[data-hook="recent-posts"]').scrollIntoView();
    cy.get('[data-hook="comment-box-placeholder"]').eq(0).click();
    cy.get('[aria-describedby="placeholder-editor"]').type('comment1');
    cy.get('[data-hook="submit-button"]').click();
    cy.get('#viewer-foo', {timeout : 5000}).eq(0).should('have.text', 'comment1');
    cy.wait(5000);
    cy.get('[data-hook="actions-menu-btn"] svg').eq(0).scrollIntoView().click();
    cy.get('[data-content="Delete"]').click();
    cy.contains('[data-hook="submit-button"]', 'Delete').click();
  });
});


*/


describe ('Check Comment form on blog page', () => {
    before ('Open page', () => {
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-Homeworka-blacktie-event');
        cy.viewport(1300,768);
        });
    it ('Test', () => {
        cy.scrollTo('bottom');
        cy.get('[data-hook="wc-header-title"]', {timeout:40000}).scrollIntoView();
        cy.get('[data-hook="comment-box-rce-wrapper"]', {timeout:5000}).type('ABC');

        /*
        cy.url().should('eq', 'https://yevheniiahlovatska.editorx.io/web-practice/');
        cy.get('button[data-testid="signUp.switchToSignUp"]', {timeout:7000}).click();
        cy.get('button[data-testid="buttonElement"]', {timeout:10000}).click();
        cy.contains('h1', 'Log In').invoke('text').should('eq', 'Log In');
        cy.get('input[type="email"]').type('alphaitschool@gmail.com', {delay:50}).should('have.value', 'alphaitschool@gmail.com');
        cy.get('input[type="password"]').type('Qwerty123!', {delay:50}).should('have.value', 'Qwerty123!');
        cy.get('[data-testid="buttonElement"]').click();
        cy.get('div[data-testid="siteMembers.container"] span').invoke('text').should('eq', 'Wrong email or password');
        */
    });
});
