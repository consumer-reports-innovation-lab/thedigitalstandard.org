import React, { useState, useEffect } from 'react'
import axios from 'axios'
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
import Filters from "./Filters"

const CaseStudies = () => {
  const { history } = window
  const org = urlParams.get('org') || ''
  const status = urlParams.get('status') || ''
  const [state, setState] = useState({
    studies: [],
    filteredStudies: [],
    isFiltered: false,
    org: org,
    status: status
  })

  useEffect(async () => {
    const studies = await axios('/case-studies/data.json')
    const filteredStudies = studies.data.filter(study => true)
    const isFiltered = studies.length !== filteredStudies.length ? true : false

    setState({ ...state, studies: studies.data, filteredStudies: filteredStudies, isFiltered: isFiltered })
  }, [])

  useEffect(() => {
    const { studies, org, status } = state
    const filteredStudies = filterStudies({ studies, org, status })

    history.pushState({}, "", `?org=${org}&status=${status}`)

    setState({ ...state, filteredStudies })

  }, [state.org, state.status])

  function filterStudies({ studies, filterByOrg = false, filterByStatus = false }) {
    let filteredStudies = studies.filter(study => {

      const matchOrg = filterByOrg ? study.lead_organization === filterByOrg : true
      const matchStatus = filterByStatus ? study.status === filterByStatus : true

      if (matchOrg && matchStatus) {
        return true
      }

      return false

    })

    return filteredStudies
  }

  return (
    <>
      <section className="bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-serif text-thin">Case Studies</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 d-flex">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle blue-button p-3 small-text" type="button" data-toggle="dropdown">
                  Filter by lead org
              </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Consumer Reports</a>
                </div>
              </div>
              <div className="dropdown ml-lg-3">
                <button className="btn btn-secondary dropdown-toggle blue-button p-3 small-text" type="button" data-toggle="dropdown">
                  Filter by Status
              </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Well understood</a>
                  <a className="dropdown-item" href="#">Under development</a>
                  <a className="dropdown-item" href="#">Under discussion</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 d-flex align-items-center justify-content-end">
              <a href="#" className="casestudy-sort">A - Z</a>
              <a href="#" className="ml-lg-3 casestudy-sort">Recent</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {state.filteredStudies && state.filteredStudies.map(study => (
              <div key={study.slug} className="col-12 col-sm-6 col-lg-4">
                <img
                  className="img-fluid mb-3"
                  alt={study.title}
                  src={study.featured_image}
                />
                <a href={study.url} className="text-medium">{study.title}</a>
                <p className="mt-2 text-medium text-thin">{study.lead_organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudies
