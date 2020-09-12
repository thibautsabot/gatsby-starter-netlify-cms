import { PresentationPageTemplate } from '../../templates/presentation-page'
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
