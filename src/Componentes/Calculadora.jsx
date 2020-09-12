import React, { useState } from 'react';

const Calculadora= () =>{
    const [valor,calcular] = useState(" ");
    let string="";
    if(valor){
        if(valor==Infinity){
            calcular("No se puede dividir por 0");
        }
    }
        return (
<div className="container">
    <section className="hero is-primary">
    <div className="hero-body">
        <p className="title">
            CALCULADORA
        </p>
    </div>
    </section>
    <section classclassName="section has-background-warning" id="contenedor">
        <div id="calculadora" className="container">
            <div className="columns is-multiline is-mobile">
                <div className="column is-12 py-5" id="scroll">
                   {valor} 
                </div> 
                
                <div className="column is-10">
                    <div className="columns is-multiline is-mobile">
                        <div className="column is-one-third">
                            <button className="column button is-fullwidth is-dark" onClick={(e)=>calcular(valor + e.target.value)} value="1">1</button>
                        </div>
                        <div className="column is-one-third">
                            <button className="column button is-fullwidth is-dark" onClick={(e)=>calcular(valor + e.target.value)} value="2">2</button>
                        </div>
                        <div className="column is-one-third">
                            <button className="column button is-fullwidth is-dark" onClick={()=>calcular(valor +"3")}>3</button>
                        </div>
                        <div className="column is-one-third">
                            <button className="column button is-fullwidth is-dark" onClick={()=>calcular(valor +"4")}>4</button>
                        </div>
                        <div className="column is-one-third">
                            <button className="column button is-fullwidth is-dark" onClick={()=>calcular(valor +"5")}>5</button>
                        </div>
                        <div className="column is-one-third">
                            <button className="column button is-fullwidth is-dark" onClick={()=>calcular(valor +"6")}>6</button>
                        </div>
                        <div className="column is-one-third">
                            <button className="column button is-fullwidth is-dark" onClick={()=>calcular(valor +"7")}>7</button>
                        </div>
                        <div className="column is-one-third">
                            <button className="column button is-fullwidth is-dark" onClick={()=>calcular(valor +"8")}>8</button>
                        </div>
                        <div className="column is-one-third">
                            <button className="column button is-fullwidth is-dark" onClick={()=>calcular(valor +"9")}>9</button>
                        </div>
                        <div className="column is-one-third">
                            <button className="column button is-fullwidth is-dark" onClick={()=>calcular(valor +"0")}>0</button>
                        </div>
                        <div className="column is-one-third">
                            <button className="column button is-fullwidth is-dark" onClick={(e)=>calcular(valor +e.target.value)} value=".">.</button>
                        </div>
                        <div className="column is-one-third">
                         <button className="button is-danger is-fullwidth" onClick={()=>calcular("")}>Clear</button>
                        </div> 
                    </div>
                </div>
                <div className="column is-2">
                    <div className="columns is-multiline">
                        <div className="column is-full">
                            <button className="column button is-fullwidth is-link" onClick={(e)=>calcular(valor +e.target.value)} value="+">+</button>
                        </div>
                        <div className="column is-full">
                            <button  className="column button is-fullwidth is-link" onClick={(e)=>calcular(valor +e.target.value)} value="-">-</button>
                        </div>
                        <div className="column is-full">
                            <button className="column button is-fullwidth is-link" onClick={(e)=>calcular(valor +e.target.value)} value="*">*</button>
                        </div>
                        <div className="column is-full">
                            <button className="column button is-fullwidth is-link" onClick={(e)=>calcular(valor + e.target.value)} value="/">/</button>
                        </div>
                    </div>
                </div> 
                <div className="column is-full">
                    <button className="button is-primary is-medium is-fullwidth"    onClick={(e) => {
              try {
                calcular(
                  String(eval(valor)).length > 3 &&
                    String(eval(valor)).includes(".")
                    ? String(eval(valor).toFixed(4))
                    : String(eval(valor))
                   
                );
              } catch (e) {
                console.log(e);
              }
            }}
            value=" = "
            >=</button>
                </div>
            </div>
        </div>
    </section>
</div>
  

        )
}

export default Calculadora;
