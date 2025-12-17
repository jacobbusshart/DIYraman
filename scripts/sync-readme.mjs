import { readFile, writeFile } from 'node:fs/promises'

const src = 'README.md'
const dst = 'docs/index.md'

const md = await readFile(src, 'utf8')

await writeFile(dst, md, 'utf8')

console.log(`Synced ${src} -> ${dst}`)
