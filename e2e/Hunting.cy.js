describe('Тестирование HuntingPony', function () {

  it('Проверка для оформления заказа', function () {
      cy.visit('https://huntingpony.com');
      cy.get('#splide02-slide03 > .product-preview > .product-preview__content > .product-preview__area-photo').click();
      cy.get('.add-cart-counter__btn').click();
      cy.get('[data-add-cart-counter-plus=""]').click();
      cy.get('.header__cart').click();
      cy.get('.cart-controls > .button').click();
      cy.contains('Оформление заказа').should('be.visible');
      


      
    
      
    

   
      
      
      

     })
  
 })
