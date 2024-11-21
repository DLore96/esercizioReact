import { User } from "../lib/interfaces";
import { TodoItem } from "../lib/types";
import {z} from 'zod';

class ValidationService { // Validazione manuale
    async validateTodoRegisterForm(form:  TodoItem) {
        const {completed, title, id} = form;
       // const todos = JSON.parse(localStorage.getItem('todos')!);

        const titleValidator = z.string().min(2).max(20);

        const validateTitle = await titleValidator.safeParseAsync(title);// ritorna un oggetto con lo status, non lancia errore
        //const validateTitle2 = await titleValidator.parseAsync(title); // NON BUONO se in errore lancia errore e va gestito l'errore in un try catch ZodError

        if (!validateTitle.success) {
            return false;
        }
        console.log(validateTitle);
        
    } 

    async validateTodoFormConObject(form:  TodoItem) {
       // const todos = JSON.parse(localStorage.getItem('todos')!);

        const validateTitle = z.object({ // ci permette di risparmiare righe di codice 
            title: z.string().min(2).max(20),
            completed: z.boolean(),
            id: z.coerce.number().min(1).max(12)  // prima di validare cerca di convertirlo nel tipo desiderato
        }).required()

        const validationResult = await validateTitle.safeParseAsync(form);// ritorna un oggetto con lo status, non lancia errore

        console.log(validationResult);
        
        if (!validationResult.success) {
            return false;
        }
        return true;
        console.log(validateTitle);
        
    } 

    async validateUserLoginFormConObject(form:  User) {
        // const todos = JSON.parse(localStorage.getItem('todos')!);
 
         const validateTitle = z.object({ // ci permette di risparmiare righe di codice 
             firstName: z.string().min(2).max(20),
             lastName: z.string().min(2).max(20),
             email: z.string().email() // prima di validare cerca di convertirlo nel tipo desiderato
         }).required()
 
         const validationResult = await validateTitle.safeParseAsync(form);// ritorna un oggetto con lo status, non lancia errore
 
         console.log(validationResult);
         
         if (!validationResult.success) {
             return false;
         }
         return true;         
     } 
}

export default new ValidationService();