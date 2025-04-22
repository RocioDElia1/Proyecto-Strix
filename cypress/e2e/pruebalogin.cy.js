describe('Pruebas de inicio de sesión', () => {

    const url = 'https://clientes.test.aws.consumer.strix.com.ar/'
  
    beforeEach(() => {
      cy.visit(url)
    })
  
    it('Inicio de sesión exitoso con credenciales válidas', () => {
      cy.get('#username').type('rociodelia8@gmail.com')
      cy.get('.password-input').type('Chile648')
      cy.get('.form-login button[type="submit"]').click() // botón de envío correcto
  
      // Validación de que se inició sesión correctamente
      cy.contains("Hola, Rocío D'Elia!").should('be.visible')
    })
  
    it('Inicio de sesión fallido con contraseña incorrecta', () => {
      cy.get('#username').type('rociodelia8@gmail.com')
      cy.get('.password-input').type('Chile64890')
      cy.get('.form-login button[type="submit"]').click() // falta el .click()
  
      // Validación del mensaje de error
      cy.contains('Email o contraseña incorrectos.').should('be.visible')
    })
  
  })
  