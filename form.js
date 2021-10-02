//accesing DOM elements
let result=document.querySelector('#result');
const formulario=document.querySelector('form')
//array with the scale data
const scaleArray=
[
    '§ <16.00: Infrapeso (delgadez severa)',
    '§ 16.00 – 16.99: Infrapeso (delgadez moderada)',
    '§ 18.50 - 24.99: Peso normal',
    '§ 25.00 - 29.99: Sobrepeso',
    '§ 30.00 - 34.99: Obeso (Tipo I)',
    '§ 35.00 - 40.00: Obeso (Tipo II)',
    '§ >40.00: Obeso (Tipo III)'
]
//function to render the IMC scale
    const setScale=()=>{
        const scaleHtml=document.querySelector('#scale-imc')
        scaleHtml.innerHTML=scaleArray.join('<br/>')//using this method the array is transformed into a string with a <br> to separate elements
        //styles
        scaleHtml.style.listStyle='none'
        scaleHtml.style.fontSize='20px'
        scaleHtml.style.color="blue"
    
}
//event handler for submit event
    const handleSubmit= (event)=>{
        event.preventDefault()
        
        //inputs value
        const inputWeight=event.target.querySelector('input[name="weight"]').value
        console.log(inputWeight)
        const inputHeight=event.target.querySelector('input[name="height"]').value
        console.log(inputHeight)

        //validating user input
        //if the input has more than 3 digit that means the input is incorrect because nobody can has in their weight or height more than 3 digits
        if( inputHeight.length<=3 && inputWeight.length<=3){
            if(inputHeight===''||inputWeight===''){
                swal('Te falta por introducir un dato')
                formulario.reset()
            }
            else{

            
            //rendering IMC
            //How to calculate IMC?
            //(IMC = peso [kg]/ estatura [m2]).
            //1st i have to convert cm into meters
            
            let imc= inputWeight/((inputHeight/100)*(inputHeight/100))
            //now i am rendering this IMC into the body html element
            console.log(imc)
            result.innerHTML=imc
            result.style.fontSize="30px"
            //calling scale function
            setScale()
            }
        }
        else {
            swal('Introduce los datos correctos')
            console.log('No has introducido un valor válido')
            //reseting user input
            formulario.reset()
        }
     
    }
    //event listener submit
    formulario.addEventListener('submit', handleSubmit)
    

 
    
    