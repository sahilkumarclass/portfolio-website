export type RepoStats = {
  stars: number;
  forks: number;
  language: string | null;
  description: string | null;
  htmlUrl: string;
};

const cache = new Map<string, RepoStats | null>();

/**
 * Fetch lightweight stats for a public GitHub repo. Returns null on any error
 * (rate limit, network) so the UI can render a graceful fallback.
 *
 * Input: repo URL like "https://github.com/owner/name" or "owner/name".
 */
export async function fetchRepoStats(input: string): Promise<RepoStats | null> {
  const key = normalize(input);
  if (!key) return null;
  if (cache.has(key)) return cache.get(key) ?? null;

  try {
    const res = await fetch(`https://api.github.com/repos/${key}`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) {
      cache.set(key, null);
      return null;
    }
    const json = await res.json();
    const stats: RepoStats = {
      stars: json.stargazers_count ?? 0,
      forks: json.forks_count ?? 0,
      language: json.language ?? null,
      description: json.description ?? null,
      htmlUrl: json.html_url,
    };
    cache.set(key, stats);
    return stats;
  } catch {
    cache.set(key, null);
    return null;
  }
}

function normalize(input: string): string | null {
  const trimmed = input.trim().replace(/\.git$/, "").replace(/\/$/, "");
  const ghMatch = trimmed.match(/^https?:\/\/github\.com\/([^/]+)\/([^/]+)/i);
  if (ghMatch) return `${ghMatch[1]}/${ghMatch[2]}`;
  if (/^[\w.-]+\/[\w.-]+$/.test(trimmed)) return trimmed;
  return null;
}
