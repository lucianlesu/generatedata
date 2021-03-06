import { DTDefinition } from '../../../../types/dataTypes';

const definition: DTDefinition = {
	name: 'Phone / Fax',
	fieldGroup: 'human_data',
	fieldGroupOrder: 20,
	schema: {
		$schema: 'http://json-schema.org/draft-04/schema#',
		type: 'object',
		properties: {
			placeholder: {
				type: 'string'
			}
		},
		required: [
			'placeholder'
		]
	}
};

export default definition;
