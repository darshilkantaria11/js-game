let user = prompt("Enter S, W or G")
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI]

const match = (cpu, user)=>{
  if(cpu === user){
    return "Nobody"
  }
  else if(cpu === "S" && user==="W"){
    return "DARSHIL"
  }
  else if(cpu === "S" && user==="G"){
    return "YOU"
  }
  else if(cpu === "G" && user==="W"){
    return "YOU"
  }
  else if(cpu === "G" && user==="S"){
    return "DARSHIL"
  }
  else if(cpu === "W" && user==="S"){
    return "YOU"
  }
  else if(cpu === "W" && user==="G"){
    return "DARSHIL"
  }
}
let result = match(cpu, user)
document.write(`DARSHIL:${cpu} <br> YOU:${user} <br>The winner is: ${result.toUpperCase()}` )