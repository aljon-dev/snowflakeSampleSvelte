import type { Actions, PageServerLoad } from "./$types";
import  {executeQuery}  from '$lib/snowflake';

export const load: PageServerLoad = async () => {

    const ToDoData = await executeQuery('SELECT * FROM MYTODOS');

    console.log(ToDoData);

    return{
        ToDoData
    }
};


export const actions: Actions = {
    
        SendTodo: async  ({request}) =>{

            const formData = await request.formData();
            const contents =  formData.get('contents') as string;
            try{
                 await executeQuery(`INSERT INTO MYTODOS (CONTENTS) VALUES ('${contents}')`)
                 console.log('Successfully inserted')
                 return{
                    status:200,
                    msg:'successfully insert the data'
                 }
            }catch(error){
                console.log('Failed to insert')
                return{
                    status:500,
                    msg:'failed to insert the data'
                }
            }
        },

    DeleteToDo: async({request}) =>{
        const formData = await request.formData();



    }
};