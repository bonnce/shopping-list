import { iProducts } from "./types"

function handleMenu (size:string, callback?:void):void {
    const menu:HTMLDivElement|null = document.querySelector('.menu')
    if(menu)
      menu.style.left = size
}

const handleTotal= (cost:string,bought:string)=>{
  if(cost === '' || bought === '') return 0
  return Math.round(parseFloat(cost) * parseFloat(bought) *100)/100
}

const leftRate = (top:number,bottom:number,x:number) => (top-x)/(top-bottom)

const timeout = async (ms:number) => await new Promise(r => setTimeout(r,ms)) 

const deleteEquals = <T>(arr:T[]):T[] => Array.from(new Set(arr))

const filterBy = <M>(arr:M[], field:keyof M) =>{
  let maped:{ [key: string]:M[]} = {};
  arr.forEach(ele =>{
      const index = ele[field] as string
      maped[index] = maped[index] ? [...maped[index],ele] : [ele]
  })
  return maped
}

const getContacts =async () => {
  if('contacts' in navigator && 'ContactsManager' in window) {
    const properties = ['name', 'tel'];
    const options = {multiple: false};
    try {
      const contacts = await navigator.contacts.select(properties, options);
      return contacts
    } catch (ex) {
      // Handle any errors here.
      console.log('was an error', ex)
    }
  }else{
    return 'Your device does not support contact API'
  }
}

const getRawPhone = (phone:string) => phone.replace(/\D/g, '').slice(-10);

const filterCSV = (fileStr:string, rowLength:number) =>
fileStr.split(/\s/).map(str => str.split(',').filter(voidStr => voidStr)).filter(voidArr => voidArr.length > rowLength)

const validStr = (str:any) => (typeof str === 'string' || str instanceof String) && str.length > 0 ? str.toString() : null

const validNumber = (num:any) => typeof num === 'number' || !isNaN(Number(num)) ? Number(num) : null

const validateData = (typeFiled: string[], entries:string[][]):(string|number)[][] => 
entries.map(data => {
  if(typeFiled.length === data.length){
    const dataFiltered = typeFiled.map((validType, i) => {
      if(validType === 'string')
        return validStr(data[i])
      if(validType === 'number')
        return validNumber(data[i])
      return null
    } )
    return dataFiltered
  }
  return null
}
  ).filter((valid) => valid != null && !valid.includes(null)) as (string|number)[][]
  
  const productsToCSV = (products:iProducts[]) =>{
    let csv = 'nombre,prioridad,categoria\n';
    products.forEach(product => { csv += `${product.name},${product.frequency},${product.category}\n` });
    return csv;
  }

  function downloadCSV(csv:string, filename:string) {
    const csvData = new Blob([csv], { type: 'text/csv' });
    const csvURL = window.URL.createObjectURL(csvData);
    
    const link = document.createElement('a');
    link.href = csvURL;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(csvURL);
}

  function textParserToObj(str:string):{[key:string]:string[]}{
    const regex: RegExp = /{\W*([\w\s]+)\W*}\n(.*?)(?=\n{|$)/gs;
    const matches: RegExpMatchArray[] = Array.from(str.matchAll(regex));
    const result: { [key: string]: string[] } = {};

    matches.forEach(match => {
        const key: string = match[1].toLowerCase();
        const value: string[] = match[2].trim().split('\n');
        result[key] = value;
    });
    return result
  } 

  export{
    handleTotal,
    handleMenu,
    leftRate,
    timeout,
    deleteEquals,
    filterBy,
    getContacts,
    getRawPhone,
    filterCSV,
    validateData,
    productsToCSV,
    downloadCSV,
    textParserToObj
} 