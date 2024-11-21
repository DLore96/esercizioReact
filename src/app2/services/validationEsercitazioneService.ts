import { z } from 'zod';
import { FormUser } from '../lib2/interfaces';

class ValidationEsercitazioneService { // Validazione manuale

    async validateUserRegisterFormConObject(form:  FormUser) {
        // const todos = JSON.parse(localStorage.getItem('todos')!);
        console.log('form:' + JSON.stringify(form));
        
         const validateTitle = z.object({ // ci permette di risparmiare righe di codice 
             firstName: z.string().min(2).max(20),
             lastName: z.string().min(2).max(20),
             email: z.string().email(), // prima di validare cerca di convertirlo nel tipo desiderato
             password: z.string().min(4)
         }).required()
 
         const validationResult = await validateTitle.safeParseAsync(form);// ritorna un oggetto con lo status, non lancia errore
 
         console.log(validationResult);
         
         if (!validationResult.success) {
             return false;
         }
         return true;         
     } 

     async validateUserLoginFormConObject(form:  FormUser) {
        // const todos = JSON.parse(localStorage.getItem('todos')!);

        const {email, password} = form;
        console.log('form:' + JSON.stringify({email, password}));
        
         const validateTitle = z.object({ // ci permette di risparmiare righe di codice 
             email: z.string().email(), // prima di validare cerca di convertirlo nel tipo desiderato
             password: z.string().min(4)
         }).required()
 
         const validationResult = await validateTitle.safeParseAsync({email,password});// ritorna un oggetto con lo status, non lancia errore
 
         console.log(validationResult);
         
         if (!validationResult.success) {
             return false;
         }
         return true;         
     } 
}

export default new ValidationEsercitazioneService();