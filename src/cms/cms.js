import BlogPostPreview from './preview-templates/BlogPostPreview'
import CMS from 'netlify-cms-app'
import PresentationPagePreview from './preview-templates/PresentationPagePreview'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import uploadcare from 'netlify-cms-media-library-uploadcare'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('presentation', PresentationPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
