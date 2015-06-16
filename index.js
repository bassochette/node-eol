module.exports = function findEolChar(data){
    if(typeof data === 'string'){
        var r = data.split("\r")
            var n = data.split("\n")
            if( r.length > 1 && n.length === 1){
                return "\r"
            } else if ( r.length === 1 && n.length > 1){
                return "\n"
            } else if ( r.length > 1 && r[1] === "\n" ){
                return "\r\n"    
            } else {
                return undefined    
            }
    } else {
        throw new Error('Argument must be a string')   
    }    
}

