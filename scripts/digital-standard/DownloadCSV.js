import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as jsonexport from "jsonexport/dist"

// ----------------------------------------------------------------------
DownloadCSV.propTypes = {
  data: PropTypes.instanceOf(Array)
}

export default function DownloadCSV({ data }) {
  const [downloadFile, setDownloadFile] = useState(false)

  console.log("data",data)

  /**
   * area
   * category
   * criteria
   * indicator
   * procedure
   */


  // const cleanData = data.map((titles) => {
  //   delete titles.id
  //   return titles
  //   // return {area: titles.area.map((area) => {
  //   //   delete area.id
  //   //   return {category: area.category.map((cat) => {
  //   //     delete cat.id
  //   //     return cat
  //   //     // return {criteria: cat.criteria.map((crit) => {
  //   //     //   delete crit.id
  //   //     //   return crit
  //   //     // }), ...cat}
  //   //   }), ...area}
  //   // }), ...titles}
    
  // })

  // console.log("cleanData",cleanData)


  const options = {
    rename: [
      "Title",
      "ID",
      "Area",
      "Area ID",
      "Category",
      "Category ID",
      "Criteria",
      "Criteria ID",
      "Indicator",
      "Indicator ID",
      "Procedure",
      "Procedure ID"
    ]
 
  }; 

  useEffect(() => {
    if (data) {
      jsonexport(data, options, function (err, csv) {
        if (err) return console.error(err)
        setDownloadFile(csv)
      })
    }
  }, [])

  return (
    <>
      {downloadFile && (
        <a href={`data:text/csv;charset=utf-8,${encodeURI(downloadFile)}`} target="_blank" className="d-none d-md-flex" id="downloadCTA">Download the Digital Standard (.csv)</a>
      )}
    </>
  )
}
