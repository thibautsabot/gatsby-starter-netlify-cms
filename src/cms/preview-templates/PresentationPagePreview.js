import PresentationPageTemplate from '../../templates/presentation-template'
import PropTypes from 'prop-types'
import React from 'react'

const PresentationPagePreview = ({ entry, widgetFor }) => (
  <PresentationPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PresentationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PresentationPagePreview
