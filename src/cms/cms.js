import BlogPostPreview from './preview-templates/BlogPostPreview'
import CMS from 'netlify-cms-app'
import PresentationPagePreview from './preview-templates/PresentationPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import uploadcare from 'netlify-cms-media-library-uploadcare'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('about', PresentationPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
