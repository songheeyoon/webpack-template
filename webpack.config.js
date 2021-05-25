const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// export 

module.exports = {
  // parcel index.html
  // 파일을 읽어드리기 시작하는 진입점 설정
  // js 를 진입점으로 설정한다.
  entry:'./js/main.js',
  // 결과물을 반환하는 설정
  output:{
    // path 절대경로로.
    // path: path.resolve(__dirname,'dist'),
    // 1번째 있는 인수와 2번째 인수를 합쳐주는.
    // __dirname 현재 파일이 있는 경로
    // filename:'main.js',
    // filename 생량하면 entry와 같은 이름.
    clean : true
    // 기존내용 지움.
  },
  module:{
    rules:[
      {
        test:/\.s?css$/,
        use:[
          // 순서 중요
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
      // {
      //   test:/\.js$/,
      //   use:[
      //     'babel-loader'
      //   ]
      // }
    ]
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인둘울 설정
  plugins:[
    new HtmlPlugin({
      template : './index.html'
    }),
    new CopyPlugin({
      patterns:[
        {
          // static 부터 (안에 있는 내용만) dist에 복사되게
          from : 'static'
        }
      ]
    })
  ],
  devServer : {
    host : 'localhost'
  }
}