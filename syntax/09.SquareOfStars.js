function stars(input){
    let d = Number(input);
    if(input == d){
        for(let i = 1; i <=d; i++){
            console.log('***')
        }
        
    } else { 
        console.log('*****');
    }

}


stars(5);