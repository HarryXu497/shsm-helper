import { Timestamp, getDocs, query } from '@firebase/firestore';
import type { PageServerLoad } from './$types';
import { events } from '$lib/firebase/firebase';

export const load: PageServerLoad = async ({ params }) => {
	const q = query(events);
	const documents = await getDocs(q)
		.then(value => value.docs)
		.then(value => value.map(snapshot => ({ id: snapshot.id, data: snapshot.data() })))
		.then(value => {
			value.forEach(event => event.data.date = event.data.date.toJSON() as Timestamp);
			return value;
		})

	return {
		documents: documents
	}
	
};