import { useStyles } from "./style"
import searchIcon from "../../assets/search_icon.svg"
import { useSelector } from "react-redux"
import { useUrlParams } from "../../hooks/useUrlParams"

export default function Searchbox({ }) {
  let searchboxstyle = useStyles()
  const { tempProducts } = useSelector((state: any) => state.product)
  const { searchKeyword, updateParams } = useUrlParams(tempProducts)
  const onSearch = (value: string) => {
    updateParams(value, undefined)
  }
  return <>
    <div className={searchboxstyle.searchContainer}>
      <input value={searchKeyword} onChange={(e) => onSearch(e.target.value)} placeholder="Find the items you're looking for" type="text" name="search" id="search" className={searchboxstyle.searchInput} />
      <img className={searchboxstyle.searchIcon} src={searchIcon} alt="search icon" />
    </div>
  </>
}