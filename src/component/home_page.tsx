
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
// import { }

export const HomePage = () => {
	return (
		<>
			<Helmet>
				<title>STool</title>
				<meta name="description" content="ちょっとしたツールに、+αを加えたツールサイト。" />
				<meta name="keywords" content="ツール,STool,サイト" />
			</Helmet>

			<h2>STool</h2>
			<p>Stool では、便利なツールを提供しています。</p>
			<Link to="/random">
				<button>Random</button>
			</Link>

		</>
	)
}
