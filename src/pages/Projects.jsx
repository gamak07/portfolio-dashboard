import React from 'react'
import Breadcrum from '../features/projects/Breadcrum'
import Header from '../features/projects/Header'
import LoadMore from '../features/projects/LoadMore'
import ProjectsList from '../features/projects/ProjectsList'
import Filters from '../features/projects/Filters'

const Projects = () => {
  
  return (
    <div>
        <Breadcrum />
        <Header />
        {/* <Filters /> */}
        {/* <ProjectsList /> */}
        <LoadMore />
    </div>
  )
}

export default Projects