import React, {useState} from 'react';

export default function Greeting() {

    let lime = new Date()
    let rime = lime.getHours()
    let grt = ""
    let grtstyle = {};

    if (rime<=12 && rime>=1){
        grt = "Good Morning"
        grtstyle.color = 'yellow' 
    }
    else if (rime>12 && rime < 18) {
        grt = "Good Afternoon"
        grtstyle.color = 'red'
    } else{
        grt ="Good Night"
        grtstyle.color = 'blue'
    }
    const [tine, settine] = useState(0);

   const refresh = () =>{
       let mm = new Date().toLocaleTimeString()
       settine(mm)
   }
   setInterval(refresh, 1000);

  return (
      <>
      <div>
          <h4 className='c2'>
          Hello User,  <span style={grtstyle}> {grt} </span>
          </h4>
          </div>
          <div className='time'>
              <h3>{tine}</h3>
          </div>
      </>
  )
}
