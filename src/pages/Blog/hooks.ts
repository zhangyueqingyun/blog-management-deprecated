import { useContext, useMemo } from 'react'
import { OptionContext } from './context'

export function useOptions() {
  const {categories, signs}: any = useContext(OptionContext)

  const categoryValueEnum: any = useMemo(function() {
    return getValueEnum(categories)
  }, [categories])

  const signValueEnum: any = useMemo(function() {
    return getValueEnum(signs)
  }, [signs])

  return {
    categoryValueEnum,
    signValueEnum 
  }
};

function getValueEnum (arr: any = [], keyName: string = 'id', valueName: string = 'name') {
  let valueEnum: any = {}
  for(let item of arr) {
    valueEnum[item[keyName]] = item[valueName]
  }
  return valueEnum
}