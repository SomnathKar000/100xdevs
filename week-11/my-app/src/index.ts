export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log('request.body', request.body);
		console.log('request.headers', request.headers);
		console.log('request.method', request.method);
		console.log('request.url', request.url);

		if (request.method === 'GET') {
			return Response.json({
				message: 'You have sent a Get request',
			});
		} else {
			return Response.json({
				message: 'You have not sent a Get request',
			});
		}
	},
} satisfies ExportedHandler<Env>;
