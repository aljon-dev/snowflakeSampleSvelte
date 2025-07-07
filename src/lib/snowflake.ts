import snowflake from 'snowflake-sdk'

let isConnected:boolean = false;

export const connection = snowflake.createConnection({
    account:'MJSUGJZ-QU99971',
    username:'ALJONJIMENEZ',
    password:'Aljonski091200!',
    role:'ACCOUNTADMIN',
    database:'TODO',
    schema:'PUBLIC',
    warehouse:'COMPUTE_WH',
})


export const connect  = async () => { 
    if(isConnected){
        console.log('Already Connected to snowflake');
        return connection;
    }

    return new Promise((resolve,reject)=>{
        connection.connect((err:any,conn:any)=>{
            if(err){
                console.log('Connection failed:',err)
            }else{
                console.log('Connected to snowflake')
                isConnected = true;
                resolve(conn);
            }
        })
    })
}


export const executeQuery = async  (query:string)=>{

        if(!isConnected){
            await connect();
        }

        return new Promise<any>((resolve,reject)=>{
                connection.execute({
                    sqlText:query,
                    complete:(err,stmt,rows)=>{
                        if(err){
                            console.log('Error Executing Query',err);
                        reject(new Error('Error executing query' + err!.message));
                        }else{
                            resolve(rows);
                        }
                    }
                })
        })
}







