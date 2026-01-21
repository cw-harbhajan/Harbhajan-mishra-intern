const redux = require('redux');
intialState={
    loading : false ,
    users : [],
    error : ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUser = ()=>{
    return {
        type : FETCH_USERS_REQUESTED
    }
}
const successUser = (users)=>{
    return {
        type : FETCH_USERS_SUCCEEDED,
        payload : users
    }
}   

const failureUser = (error)=>{
    return {
        type : FETCH_USERS_FAILED,
        payload : error
    }
}