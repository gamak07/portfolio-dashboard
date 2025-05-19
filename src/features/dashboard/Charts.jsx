import React from 'react'
import WebsiteTraffic from './WebsiteTraffic'
import VisitorsSources from './VisitorsSources'
import PageEngagement from './PageEngagement'
import ProjectTechnologies from './ProjectTechnologies'

const Charts = () => {
  return (
    <div className='grid-cols-1 grid lg:grid-cols-2 gap-6 mb-6'>
      <WebsiteTraffic />
      <VisitorsSources />
      <PageEngagement />
      <ProjectTechnologies />
    </div>
  )
}

export default Charts