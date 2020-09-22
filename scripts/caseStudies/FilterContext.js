import React, { useState, useEffect } from 'react'
import axios from 'axios'
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const FilterContext = React.createContext([{}, () => { }])
// const objectToArray = (object) => {
//   if (object) {
//     return Object.entries(object).map(e => Object.assign({}, e[1], { id: e[0] }))
//   }
// }

const FilterProvider = (props) => {
  const { history } = window
  const filterOrg = urlParams.get('org') || 'all'
  const filterTheme = urlParams.get('theme') || 'all'
  const [state, setState] = useState({
    items: [],
    filteredItems: [],
    visibleItems: [],
    chooseRandomItems: false,
    isFiltered: false,
    filterOrg: filterOrg,
    filterTheme: filterTheme,
    selectedItem: null,
    urlFilter: ''
  })



  useEffect(async () => {
    const items = await axios('/api/filter.json')
    const publishedItems = items.data.filter(item => {
      // return item.published
      return true
    })

    const filteredItems = filterByURL({ items: publishedItems, filterOrg, filterTheme })
    setState({ ...state, items: items.data, filteredItems: filteredItems, chooseRandomItems: true })

  }, [])


  useEffect(() => {
    if (state.chooseRandomItems) {
      const randomItems = getRandomItems()
      setState(state => ({ ...state, visibleItems: randomItems, chooseRandomItems: false }))
    }
  }, [state.chooseRandomItems])

  useEffect(() => {
    const { items, filterOrg, filterStatus } = state
    if (filterOrg || filterStatus) {
      const filteredItems = filterByURL({ items, filterOrg, filterStatus })

      history.pushState({}, "", `?org=${filterOrg}&status=${filterStatus}`)

      setState({ ...state, filteredItems, chooseRandomItems: true })
    }

  }, [state.filterOrg, state.filterStatus])


  function filterByURL({ items, filterOrg, filterStatus }) {
    let filteredItems = items.filter(item => {
      let matchOrg = true
      let matchStatus = true

      if (filterOrg !== 'all') {
        matchOrg = item.org === filterOrg
      }
      if (filterStatus !== 'all') {
        matchStatus = item.statuses.includes(filterStatus)
      }

      if (matchOrg && matchStatus) {
        return true
      }

      return false

    })

    return filteredItems
  }


  return (
    <FilterContext.Provider value={[state, setState]}>
      {props.children}
    </FilterContext.Provider>
  );
}

export { FilterContext, FilterProvider };


