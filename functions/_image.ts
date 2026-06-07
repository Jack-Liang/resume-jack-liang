interface Env {
	ASSETS: { fetch: typeof fetch };
}

export async function onRequest({ request, env }: { request: Request; env: Env }) {
	const url = new URL(request.url);

	if (url.pathname === '/_image') {
		const href = url.searchParams.get('href');
		if (!href) {
			return new Response('Bad Request', { status: 400 });
		}

		const sourceUrl = new URL(href, url.origin);
		if (sourceUrl.origin !== url.origin) {
			return new Response('Forbidden', { status: 403 });
		}

		try {
			const response = await env.ASSETS.fetch(new Request(sourceUrl, { headers: request.headers }));

			if (!response.ok) {
				return new Response('Not Found', { status: 404 });
			}

			const contentType = response.headers.get('Content-Type') ?? '';
			if (!contentType.startsWith('image/')) {
				return new Response('Forbidden', { status: 403 });
			}

			const headers = new Headers();
			headers.set('Content-Type', contentType);
			headers.set('Cache-Control', 'public, max-age=31536000');
			headers.set('Date', new Date().toUTCString());

			const etag = response.headers.get('ETag');
			if (etag) headers.set('ETag', etag);

			return new Response(response.body, { status: 200, headers });
		} catch {
			return new Response('Internal Server Error', { status: 500 });
		}
	}

	return env.ASSETS.fetch(request);
}