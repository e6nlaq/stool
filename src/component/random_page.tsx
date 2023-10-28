
import { random_generate, reset, copy } from './random';
import { Helmet } from 'react-helmet-async';
import './random_page.css'

export const RandomPage = () => {
	return (
		<>
			<Helmet>
				<title>STool - Random Generator</title>
				<meta name="description" content="整数・小数の乱数生成" />
				<meta name="keywords" content="ツール,STool,サイト,乱数,乱数生成,整数,小数" />
			</Helmet>

			<h2>Random Generator</h2>
			<p>指定した範囲内で乱数を生成</p>

			<noscript>
				<h1>JavaScirptを有効化してください</h1>
			</noscript>


			<div className="inputs">
				<input type="number" id="min_number" placeholder='最小値' step={"0.00000001"} />
				<br />
				<input type="number" id="max_number" placeholder='最大値' step={"0.00000001"} />
				<br />
				<br />
				<div className="intger_input">
					<input type="checkbox" id="integer_checkbox" defaultChecked />
					<label htmlFor="integer_checkbox">整数のみ</label>
				</div>
			</div>

			<br />

			<div className="buttons">
				<button onClick={random_generate}>Generate</button>
				<button onClick={reset}>Reset</button>
				<button onClick={copy}>Copy</button>
			</div>

			<h1 id='result'></h1>

		</>
	)
};
