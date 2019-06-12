import loadjs from 'loadjs'

export default function() {
  if (window.location.href.indexOf('localhost') === -1) {
    loadjs(
      'https://www.googletagmanager.com/gtag/js?id=UA-141899215-1',
      function() {
        window.dataLayer = window.dataLayer || []
        function gtag() {
          window.dataLayer.push(arguments)
        }
        gtag('js', new Date())

        gtag('config', 'UA-141899215-1')
      }
    )
  }
}
