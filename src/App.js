
function App() {
  let keyNum=0
  let firstValue=0
  let operation=''
  let secondValue=0
  let myTotal=0
  function numberDisplay(p){
    keyNum=document.getElementById(p).textContent
    document.getElementById("fNum").value += keyNum
  }

  function sign(s){
    firstValue=(document.getElementById("fNum").value)*1
    document.getElementById("fNum").value=""
    operation=s
  }

  function calculate(){  
    secondValue=(document.getElementById("fNum").value)*1

  switch (operation) {
    
    case "addition":
      myTotal=(firstValue+secondValue)
    break;
    case "subtraction":
      myTotal=(firstValue-secondValue)
    break;
    case "multiplication":
      myTotal=(firstValue*secondValue)
    break;
    case "division":
      myTotal=(firstValue/secondValue)
    break;
    default:
      alert('Provide a sign')
    break;
  }
  document.getElementById("fNum").value=myTotal
  }
  function clear(){
    firstValue=0
    secondValue=0
    document.getElementById("fNum").value=""
  }
  function negate(){
    let myvalue=(document.getElementById("fNum").value)*1
    if(myvalue>0){
      myvalue=myvalue-(myvalue*2)
    }
    else{
      myvalue=myvalue+(myvalue*2)
    }
    document.getElementById("fNum").value=myvalue
  }
  function perc(){
    let myvalue=(document.getElementById("fNum").value)*1
    myvalue=myvalue/100
    document.getElementById("fNum").value=myvalue
  }
  return(
    <div className="container">
        <div className="calcSection">
            <div className="inputSection">
              <div className="firstNum">
                <input type="number" name="" id="fNum" placeholder="0" required />
              </div>
            </div>
            <div className="numSection">
              <div className="myrows firstRow"> 
              
                  <p onClick={clear}  className="grey">c</p>
                  <p onClick={negate} className="grey">+/-</p>
                  <p onClick={perc} className="grey">%</p>
                  <p className="orange"  onClick={()=>{sign("division")} } id="division">/</p>
                
              </div>
              <div className="myrows SecondRow">
            
                  <p onClick={()=>{numberDisplay("seven")} } id='seven' className="lightblack">7</p>
                  <p onClick={()=>{numberDisplay("eight")} } id="eight" className="lightblack">8</p>
                  <p onClick={()=>{numberDisplay("nine")}} id="nine" className="lightblack">9</p>
                  <p className="orange"  onClick={()=>{sign("multiplication")} } id='multiplicaion'>*</p>
              </div>
              
              <div className="myrows thirdRow">
            
                  <p onClick={()=>{numberDisplay("four")} } id="four" className="lightblack">4</p>
                  <p onClick={()=>{numberDisplay("five")} } id="five" className="lightblack">5</p>
                  <p onClick={()=>{numberDisplay("six")} } id="six" className="lightblack">6</p>
                  <p className="orange"  onClick={()=>{sign("subtraction")} } id='subtraction'>-</p>
              </div> 
              
              <div className="myrows fourthRow"> 
            
                  <p onClick={()=>{numberDisplay("one")} } id="one" className="lightblack">1</p>
                  <p onClick={()=>{numberDisplay("two")} } id="two" className="lightblack">2</p>
                  <p onClick={()=>{numberDisplay("three")}} id="three" className="lightblack">3</p>
                  <p className="orange" onClick={()=>{sign("addition")} } id='addition'>+</p>
                 
              </div>
              <div className="myrows fifthRow"> 
              
                  <p onClick={()=>{numberDisplay("myzero")} } id="myzero" className=" lightblack zero">0</p>
                  <p onClick={()=>{numberDisplay("mypoint")} } id="mypoint" className="lightblack">,</p>
                  <p className="orange" onClick={calculate} id='equal'>=</p>
             </div>
              
            </div>
        </div>
    </div>
  )
}

export default App;
