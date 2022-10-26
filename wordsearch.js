//don't need to check if word is backwards or 

// PAIR PROGRAMMED WITH DAVID FIGUEROA

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalArray = [];
    if (letters.length === 0) {
        return false;
    }
    for (l of horizontalJoin) {
        
        if (l.includes(word)) return true
    }
    for (let c = 0; c < letters[0].length; c++) {
      let vertArray = [];
      for (let r = 0; r < letters.length; r++) {
        vertArray.push(letters[r][c])
      }
      verticalArray.push(vertArray);

    }
    const verticalJoin = verticalArray.map(ls => ls.join(''))
    for (l of verticalJoin) {
        
        if (l.includes(word)) return true
    }
    
    return false;
}

module.exports = wordSearch