import { Auth_Request,Auth_Failure,Auth_Success } from "./actionType";

export const authRequest =()=>({
    type:Auth_Request,
});

export const authFailure =()=>({
    type:Auth_Failure,
});

export const authSuccess =()=>({
    type: Auth_Success,

});

 export let handleLogin =(credential)=>{
     return async (dispetch)=>{
        dispetch(authRequest());
        try{
            await fetch('https://reqres.in/api/login',{
                method:"post",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(credential),
            })
            .then((resp)=> resp.json())
            .then((data)=>{
                console.log(data);
                 dispetch(authSuccess());
            });

        }catch(error){
            dispetch(authFailure());
        }
     }
}