//メインページ
import React, { Component } from 'react';

class List extends Component {
  
  constructor(props){   //props...プロパティの事。ここではComponentクラスのプロパティを受け取っている
    super(props);       //親クラス(Component)からプロパティを引き継いでいる
    this.state={
      todos:[           //コンポーネント内で使用する値
        '掃除する',
        '買い物',
        '洗濯する'
      ]
    };
  }
  onClickAdd() {
    const newTodo = window.prompt("やることを入力してください", "");
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({todos});
  }

  render() {
    return (
      <div>
        <div><button onClick={() => this.onClickAdd()}>追加</button></div>
        <table>
          <tbody>
          {this.state.todos.map((todo) => (
            <tr key={todo}><td style={{border: 1, borderColor: 'gray', borderStyle: 'solid', cursor: 'pointer'}}>{todo}</td></tr>
          ))}
          </tbody>
        </table>
      </div>

    );
  }
}

export default List;