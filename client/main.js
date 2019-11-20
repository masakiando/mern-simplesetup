import React from "react";
import { render } from "react-dom";
import HelloWorld from "./HelloWorld";
render(<HelloWorld/>, document.getElementById('root'));

// https://reactjs.org/docs/rendering-elements.html

// render関数はreactコンポーネントの一部ですlifecyle。ReactDOMは、React JSXコンテンツをDOMにレンダリングするために使用されるrenderと呼ばれるメソッドを公開するクラスオブジェクトです。
// 通常ReactDOM.render、アプリで一度使用してトップレベルのコンポーネントをレンダリングしますが、他のすべてのコンポーネントはトップレベルのコンポーネントの子になります
// ReactDOMインスタンスはインポート元'react-dom'であり、グローバルオブジェクトではありません。
// 反応コンポーネントは、多くのマウントおよび更新ライフサイクルメソッドを通過し、レンダリング関数でデータをレンダリングすることを決定します。renderメソッドで記述するJSXコードReact.createElement(tag, props, children)は、DOMにレンダリングされる前に変換されます。