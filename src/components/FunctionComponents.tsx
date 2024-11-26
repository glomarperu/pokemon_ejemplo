import React from 'react'

export const FunctionComponents = () => {

    const a:number = 4;
    const b:number = 5;

    // Función Suma
    const sum = (a: number, b:number):string =>{
        return `${ a + b }`;
    }

  return (
    <>
        <h3>Suma de  a + b </h3>
        <p>El resultado es: { sum(a , b) }</p> 
    </>
  )
}
