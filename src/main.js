import { uniqBy } from 'lodash-es'

const a = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 3 }]

document.write(JSON.stringify(uniqBy(a, 'a')))
