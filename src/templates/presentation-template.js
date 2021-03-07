import Content from '../components/Content'
import PropTypes from 'prop-types'
import React from 'react'

const PresentationPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section role="main" className="section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <PageContent className="content justified presentation" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PresentationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default PresentationPageTemplate