import React from 'react';
import './App.css';
import { useForm } from "react-hook-form";
// import Counter from './components/Counter';
import CounterHook from './components/CounterHook';

function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="App">
      {/* <CounterHook  /> */}
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form__label">user name</label>
        <input
          name="userName"
          type="name"
          ref={register({
            required: true
          })}
        />
        {errors.userName && "Your input is required"}
        <label className="form__label">password</label>
        <input
          name="password"
          type="password"
          ref={register({ required: true })}
        />
        <input type="submit" name="保存" />
      </form>

    </div>
  );
}

export default App;

/*
・ユーザー名は半角英数（大文字はＯＫ）などで決定する
（例：Chibiharu02←ＯＫ！,'あいうえおさん'←ＮＧ
・パスワードは半角英数で[1-9,a-z,A-Z]で入力してもらう、6文字以上16字以内で
・メールアドレスを＠で区切られているかどうかで区別する
・両方の入力が正しくされていれば登録が出来る



・文字を入力した時点でバリデーションが出る
・保存ボタン押下時にバリデーション
・保存ボタン押下時にモーダルが出て、保存、キャンセルボタンがある。押したらモーダルが閉じて、保存か or エラー。保存したら保存されましたのトースト or 画面になる
 */