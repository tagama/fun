import { h } from 'preact';
import style from './style';
import Knob from '../../components/knob'


const Synth = () => (
	<div class={style.synth}>
		<h1>Synth</h1>
		<p>This is the Synth component.</p>
		<Knob />
	</div>
);

export default Synth;
