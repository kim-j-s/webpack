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
    clean: true,
  },
  // module 설정
  // module: {
  //   rules: [
  //     // html loader 설정
  //     {
  //       test: /\.html$/i,
  //       loader: "html-loader",
  //     },
  //     // handlebar 설정
  //     // {
  //     //   // hbs란 확장자가 있으면 loader를 통해서 handlebars-loader를 호출 한다.
  //     //   test: /\.hbs$/,
  //     //   loader: "handlebars-loader",
  //     // },
  //   ],
  // },
  // Devserver
  devServer: {
    static: {
      // directory: path.join(__dirname, "src"), // 정적 파일을 제공할 디렉토리
      directory: path.join(__dirname, "src"), // 정적 파일을 제공할 디렉토리
    },
    // hot: 모듈 전체를 갱신하지 않고 수정된 파일 갱신
    hot: true,
    // compress 압축
    // compress: true,
    compress: false,
    port: 9000,
    open: true, // 브라우저 자동 열기
    watchFiles: ["src/**/*"],
  },
  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      // template: "./src/index.html", // HTML 템플릿 파일 경로 지정
      template: path.join(__dirname, "src", "index.html"),
      filename: "index.html",
      title: "반 머랑 영",
    }),
  ],
};
