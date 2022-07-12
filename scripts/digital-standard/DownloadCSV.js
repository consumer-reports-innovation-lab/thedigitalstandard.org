import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as jsonexport from "jsonexport/dist"

// ----------------------------------------------------------------------
DownloadCSV.propTypes = {
  data: PropTypes.instanceOf(Array)
}

export default function DownloadCSV({ data }) {
  const [downloadFile, setDownloadFile] = useState(false)

  const removeKeys = (data, keys) => data !== Object(data)
    ? data
    : Array.isArray(data)
    ? data.map((item) => removeKeys(item, keys))
    : Object.keys(data)
        .filter((k) => !keys.includes(k))
        .reduce(
          (acc, x) => Object.assign(acc, { [x]: removeKeys(data[x], keys) }),
          {}
        )

  

  const options = {
    rename: [
      "Title",
      // "ID",
      "Area",
      // "Area ID",
      "Category",
      // "Category ID",
      "Criteria",
      // "Criteria ID",
      "Indicator",
      // "Indicator ID",
      "Procedure",
      // "Procedure ID"
    ]
 
  }; 
 
  useEffect(() => {
    if (data) {
      const cleanData = removeKeys(data, ['id'])
      console.log(data, cleanData)

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
