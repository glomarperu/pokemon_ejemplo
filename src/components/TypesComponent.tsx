import React from 'react'

export const TypesComponent = () => {

    const name:string | number = "Gerardo";
    const isApprobed: boolean = false;
    const powers: string[] = ['Java', 'Python', 'Kotlin']; 

  return (
    <>
        <h1>{ name } { isApprobed ? 'Aprobado' : 'Jalado' }</h1>
        { powers.join(', ')}
    </>
  )
}
