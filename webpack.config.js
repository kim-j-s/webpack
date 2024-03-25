const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode 설정 product, development, none 으로 설정
  mode: "development",
  // HTML 파일을 진입점으로 사용
  entry: "./src/index.html",
  output: {
    path: path.resolve(__dirname, "dist"), // 번들링된 파일이 생성될 경로
    // filename: "index.html", // 번들링된 파일 이름
  },
  // module 설정
  module: {
    rules: [
      // html loader 설정
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  // Devserver
  devServer: {
    static: {
      directory: path.join(__dirname, "src"), // 정적 파일을 제공할 디렉토리
    },
    // hot: 모듈 전체를 갱신하지 않고 수정된 파일 갱신
    hot: true,
    // compress 압축
    compress: true,
    open: true, // 브라우저 자동 열기
  },
  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // HTML 템플릿 파일 경로 지정
    }),
  ],
};
