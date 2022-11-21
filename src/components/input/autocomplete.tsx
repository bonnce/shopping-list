const AutoComplete = ({values, id}:{values:string[],id:string}) => <datalist id={id} >
    {values.map((val)=> <option key={val} value={val} />)}
</datalist>

export default AutoComplete