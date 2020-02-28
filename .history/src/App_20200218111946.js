import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <table>
            <tr>
                <td>提案した日付</td><td>上位企業</td><td>下位企業</td><td>結果</td>
            </tr>
            <tr><td>2020/01/25</td><td>株式会社ABC（中村さん）</td><td>株式会社アジャイル</td>
                <td><input type=button value="成功"><input type=button value="失敗"></td>
            </tr>
            <tr>
                <td>2020/02/02</td><td>株式会社ABC</td><td>株式会社アジャイル</td>
                <td><input type=button value="成功"><input type=button value="失敗"></td>
            </tr>
            <tr>
                <td>2020/02/04</td><td>株式会社ABC</td><td>株式会社アジャイル</td>
                <td><input type=button value="成功"><input type=button value="失敗"></td>
            </tr>
            <tr>
                <td>2020/02/10</td><td>株式会社ABC</td><td>株式会社アジャイル（島田さん）</td>
                <td><input type=button value="成功"><input type=button value="失敗"></td>
            </tr>
            <tr>
                <td>2020/02/15</td><td>株式会社ABC</td><td>株式会社アジャイル</td>
                <td><input type=button value="成功"><input type=button value="失敗"></td>
            </tr>
            
        </table>
    </div>
    
    
  );
}


export default App;