import React from 'react'

class Banner extends React.Component {
  render() {
    return (
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/blog-index.jpg')`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-2"
          style={{
            boxShadow: '0.3rem 0 0 #008000, -0.3rem 0 0 #008000',
            color: 'white',
            padding: '0 1rem',
          }}
        >
          Dernières news
          </h1>
      </div>
    )
  }
}

export default Banner
