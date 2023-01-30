import React from 'react'

export default  function Input(props:any){

    let emailValue = ''
    let passwordValue = ''
    let emaila = document.querySelector('.emailInput') as HTMLInputElement

    if (props.mode === 'email'){
        emailValue = emaila.value
    }
    else if(props.mode === 'password'){

    }
    console.log(emailValue)
    return(
        <input className={props.className}  type="text" />
    )
}