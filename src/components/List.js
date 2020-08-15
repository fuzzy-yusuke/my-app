//メインページ
import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr><td style={{border: 1, borderColor: 'gray', borderStyle: 'solid', cursor: 'pointer'}}>掃除する</td></tr>
          <tr><td style={{border: 1, borderColor: 'gray', borderStyle: 'solid', cursor: 'pointer'}}>買い物</td></tr>
          <tr><td style={{border: 1, borderColor: 'gray', borderStyle: 'solid', cursor: 'pointer'}}>洗濯する</td></tr>
        </tbody>
      </table>
    );
  }
}

export default List;