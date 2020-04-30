
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function decryptTextCupherCesar(text, numberHouses){
  let cryptText = ''
  const cipher = generateAlphabetCrypt(numberHouses)
  const arrayText = getArrayString(text)
  
  arrayText.map( item => {
    const isExist = cipher.indexOf(item.toUpperCase())
    if( isExist !== -1){
      cryptText += alphabet[isExist]
    }else{
      cryptText += item
    }
  })

  return cryptText
}
function generaTextCipherCesar(text, numberHouses){
  let cipherText = ''
  const cipher = generateAlphabetCrypt(numberHouses)
  const arrayText = getArrayString(text)
  
  arrayText.map( item => {
    const isExist = alphabet.indexOf(item.toUpperCase())
    if( isExist !== -1){
      cipherText += cipher[isExist]
    }else{
      cipherText += item
    }
  })

  return cipherText
}

function getArrayString(text){
  return text.split(/(.)/gi).filter(item => item !== '' ) 
}

function getArrayIndexRepeat(array, index){
  if(array.length -1 < index){
    let newIndex = index;
    while(newIndex >= array.length){
       newIndex = (newIndex - array.length)
    }
    return array[newIndex] 
  }else{
    return array[index] 
  }
}

const  generateAlphabetCrypt = (numberHouses) => {
  let arrayAlphabet = getArrayString(alphabet)
  
  let cifrado = ''
  arrayAlphabet.map((item, index) =>{
   const arrayElement = getArrayIndexRepeat(arrayAlphabet, index + numberHouses)
   cifrado += arrayElement
  })
  return cifrado
}

const crypt = generaTextCipherCesar('Hello World', 3)
const decrypt = decryptTextCupherCesar(crypt, 5)
console.log(`Texto criptogrado: ${crypt}` )
console.log(`Texto descriptogrado: ${decrypt}` )
