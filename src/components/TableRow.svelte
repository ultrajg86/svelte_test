<script>
	import dayjs from 'dayjs';

	export let list;

	const total = list.price * list.volume;
	const fee = Math.ceil(total * 0.0005);
	const result = list.side == 'bid' ? total + Math.ceil(fee) : total - Math.ceil(fee);

	let rowClass = 'bg-amber-50';
	switch (list.state) {
		case 'win':
			rowClass = 'bg-blue-200';
			break;
		case 'done':
			rowClass = 'bg-sky-200';
			break;
		case 'wait':
			rowClass = 'bg-green-200';
			break;
		default:
			rowClass = 'bg-red-200';
	}
</script>

<tr class={rowClass}>
	<td>{list.seq}</td>
	<td>{list.market}</td>
	<td>{list.side}</td>
	<td>{list.state}</td>
	<td>{Math.round(list.price * 10000) / 10000}</td>
	<td>{Math.round(list.volume * 10000) / 10000}</td>
	<td>{Math.ceil(fee)}</td>
	<td>{Math.ceil(result)}</td>
	<td>{dayjs(list.createdAt).format('YYYY-MM-DD HH:mm:ss')}</td>
	<td>{dayjs(list.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</td>
</tr>
