export class User {
    
       id: number;
       address: string;
    
       constructor(values: Object = {}) {
         Object.assign(this, values);
     }
    
   }