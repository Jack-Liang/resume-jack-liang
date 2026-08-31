import { getCollection } from 'astro:content';
import { parseNotes } from '../../utils/notes-parser';
import { sortPostsByDateDesc } from '../../utils/post-utils';

const SCHEMA_VERSION = 1;

export async function GET({ site }: { site: URL | undefined }) {
    // --- blog ---
    const posts = (await getCollection('blog')).filter(({ data }) => !data.draft).sort(sortPostsByDateDesc);
    const blogCount = posts.length;
    let blogLatest = posts.length > 0 ? new Date(posts[0].data.publishDate).getTime() : 0;
    for (const p of posts) {
        if (p.data.updatedDate) {
            const t = new Date(p.data.updatedDate).getTime();
            if (t > blogLatest) blogLatest = t;
        }
    }

    // --- notes ---
    const notesEntries = await getCollection('notes');
    const allNotes = [] as ReturnType<typeof parseNotes>;
    for (const entry of notesEntries) {
        // Astro collection entry.body 携带除 frontmatter 以外的原始 markdown 文本
        // （frontmatter 为 `---year: x---`，若 notes 文件没写 frontmatter，则 body 就是全文）
        const raw = typeof entry.body === 'string' ? entry.body : '';
        const parsed = parseNotes(raw, entry.id);
        allNotes.push(...parsed);
    }
    const notesCount = allNotes.length;
    const notesLatest = allNotes.length > 0 ? Math.max(...allNotes.map((n) => n.publishDate.getTime())) : 0;

    const lastUpdatedMs = Math.max(blogLatest, notesLatest);
    const lastUpdated = lastUpdatedMs > 0 ? new Date(lastUpdatedMs).toISOString() : new Date().toISOString();

    const base = site ? site.origin : '';

    return Response.json(
        {
            schemaVersion: SCHEMA_VERSION,
            lastUpdated,
            blogCount,
            notesCount,
            fullFeedUrl: `${base}/api/content.json`
        },
        {
            headers: {
                'content-type': 'application/json; charset=utf-8',
                'cache-control': 'public, max-age=0, must-revalidate'
            }
        }
    );
}
