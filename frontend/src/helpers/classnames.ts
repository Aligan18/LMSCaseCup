
type TMods = Record<string, boolean  | string>;


export const classnames  = (cls: string , modes: TMods , addition: string[])=>{

   return [
        cls,
        ...addition,
        ...Object.entries(modes)
            .filter(([key,value])=> Boolean(value))
            .map(([key,value])=> key)

   ].join(' ')
}

