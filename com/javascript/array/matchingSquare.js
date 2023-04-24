function squareMatch() {
//find a^2 + b^2 = c^2 + d^2

    let map = new Map()
        for(let i=1; i<=10; i++) {
            for(let j=1; j<=10; j++) {
        if(i !== j && i<j) {
        const prod = (i*i) + (j*j);
            if(map.has(prod)) {      
              map.set(prod, [...map.get(prod), `${i},${j}`])
                }	else {
                 map.set(prod, [`${i},${j}`])
            }		
            }
        }
      
      
    }
    return map;
    }
    
    let map = squareMatch()
    
    map.forEach((value, key) => {
     value.length > 1 &&  console.log(value)
    })