import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';


//const [value, setValue] = useState(0);

const show = e => console.log(e);

const Knob = () => (
	<button onDrag={show} class={style.knob} />
	// <header class={style.header}>
	// 	<h1>Preact App</h1>
	// 	<nav>
	// 		<Link activeClassName={style.active} href="/">Home</Link>
	// 		<Link activeClassName={style.active} href="/profile">Me</Link>
	// 		<Link activeClassName={style.active} href="/profile/john">John</Link>
	// 	</nav>
	// </header>
);

export default Knob;
