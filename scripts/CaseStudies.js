import React, { useState, useEffect } from 'react'
import axios from 'axios'
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)

const CaseStudies = () => {
  const { history } = window
  const filterByOrg = urlParams.get('filterByOrg') || ''
  const filterByStatus = urlParams.get('filterByStatus') || ''
  const [state, setState] = useState({
    studies: [],
    organizations: [],
    statuses: [],
    filteredStudies: [],
    isFiltered: false,
    filterByOrg: filterByOrg,
    filterByStatus: filterByStatus
  })

  useEffect(async () => {
    const studies = await axios('/case-studies/data.json')
    const organizations = [...new Set(studies.data.map(study => study.lead_organization))]
    const statuses = [...new Set(studies.data.map(study => study.status))]
    const filteredStudies = studies.data.filter(study => true)
    const isFiltered = studies.length !== filteredStudies.length ? true : false
    setState({
      ...state,
      studies: studies.data,
      filteredStudies: filteredStudies,
      isFiltered: isFiltered,
      organizations: organizations,
      statuses: statuses
    })
  }, [])

  useEffect(() => {
    const { studies, filterByOrg, filterByStatus } = state
    const filteredStudies = filterStudies({ studies, filterByOrg, filterByStatus })

    history.pushState({}, "", `?filterByOrg=${filterByOrg}&filterByStatus=${filterByStatus}`)

    setState({ ...state, filteredStudies })

  }, [state.filterByOrg, state.filterByStatus])

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
      <section className="bg-secondary overflow-visible">
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
                  {state.filterByOrg || 'Filter by Organization'}
                </button>
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={() => setState({ ...state, filterByOrg: false })}>All</button>
                  {state.organizations && state.organizations.map(organization => (
                    <button className="dropdown-item" onClick={() => setState({ ...state, filterByOrg: organization })}>{organization}</button>
                  ))}
                </div>
              </div>

              {/*
              Hiding Status Filters in UI
              <div className="dropdown ml-lg-3">
                <button className="btn btn-secondary dropdown-toggle blue-button p-3 small-text" type="button" data-toggle="dropdown">
                  {state.filterByStatus || 'Filter by Status'}
                </button>
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={() => setState({ ...state, filterByStatus: false })}>All</button>
                  {state.statuses && state.statuses.map(status => (
                    <button className="dropdown-item" onClick={() => setState({ ...state, filterByStatus: status })}>{status}</button>
                  ))}
                </div>
              </div> */}

            </div>
            <div className="col-12 col-sm-6 d-flex align-items-center justify-content-end">
              {/*
              Hiding sorting
              <a href="#" className="casestudy-sort">A - Z</a>
              <a href="#" className="ml-lg-3 casestudy-sort">Recent</a>
              */}
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
