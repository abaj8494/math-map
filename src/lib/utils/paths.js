import { base } from '$app/paths';

/**
 * Resolve a path relative to the base path
 * @param {string} path
 * @returns {string}
 */
export function resolveBasePath(path) {
	if (!path) return '';
	return path.startsWith('/') ? `${base}${path}` : path;
}

