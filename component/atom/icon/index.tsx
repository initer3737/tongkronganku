const Icon:React.FC<{
    IconName:string,
    Variant:string
}>
    =({IconName,Variant})=>{
    return(
        <i className={`bi bi-${IconName} ${Variant}`}></i>
    )
}

export default Icon;