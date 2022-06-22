import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as jsonexport from "jsonexport/dist"

// ----------------------------------------------------------------------
DownloadCSV.propTypes = {
  data: PropTypes.instanceOf(Array)
}

export default function DownloadCSV({ data }) {
  const [downloadFile, setDownloadFile] = useState(false)

  useEffect(() => {
    if (data) {
      jsonexport(data, function (err, csv) {
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
