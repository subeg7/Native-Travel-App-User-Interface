export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function login(userCredentials){
    if(userCredentials.username==='testuser' && userCredentials.password==='12345'){
        return {
            type:LOGIN_SUCCESS
        }
    }else{
        return{
            type:LOGIN_ERROR
        }
    }
}
