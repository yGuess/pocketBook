// let baseUrl = 'http://10.0.31.116:8081'
// let imgPrefix = 'http://dx-image-test.itangchao.me/'
// let videoPrefix = 'http://dx-video-test.itangchao.me/'
//  // 判断是否为生产环境
// if (process.env.NODE_ENV === 'production') {
//   baseUrl = 'http://dxapi.youxiangtv.com'
//   imgPrefix = 'https://image.youxiangtv.com/'
//   videoPrefix = 'https://video.youxiangtv.com/'
//   // 测试环境
//   if (TEST) {
//     console.log('in TEST')
//     baseUrl = 'http://10.0.31.125:8081'
//     imgPrefix = 'http://dx-image-test.itangchao.me/'
//     videoPrefix = 'http://dx-video-test.itangchao.me/'
//   }
//   // 预览环境
//   if (PRE) {
//     console.log('in PRE')
//     baseUrl = 'http://api-pre.youxiangtv.com'
//   }
// }
//
// export { baseUrl, imgPrefix, videoPrefix }
let baseUrl = 'http://127.0.0.1:3000'
export { baseUrl }
