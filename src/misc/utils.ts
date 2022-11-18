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

const filterBy = <T>(arr:T[], field:keyof T):T[][] =>{
  const arrField = deleteEquals(arr.map(p => p[field]))
  const filtered = arrField.map(cat => arr.filter(ele => ele[field] === cat))
  return filtered
}

export{
  handleTotal,
  handleMenu,
  leftRate,
  timeout,
  deleteEquals,
  filterBy
} 