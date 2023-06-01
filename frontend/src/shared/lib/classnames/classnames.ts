
type TMods = Record<string, boolean  | string>;


export const classnames  = (cls: string , addition: string[] =[], modes: TMods ={} )=>{

   return [
        cls,
        ...addition.filter(Boolean),
        ...Object.entries(modes)
            .filter(([key,value])=> Boolean(value))
            .map(([key,value])=> key)

   ].join(' ')
}

