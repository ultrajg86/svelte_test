// https://github.com/HeropCode/Svelte-Movie-app
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;

if(import.meta.host){
	import.meta.host.accept();
	import.meta.host.dispose(() => {
		app.$destroy();
	});
}