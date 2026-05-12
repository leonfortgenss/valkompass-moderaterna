// Expected CSV format:
// id,text,category,M,S,SD,C,V,L,KD,MP
// 1,"Stenungsund ska bygga fler bostäder",Samhällsplanering,1,1,-1,0,-1,1,0,-1
export function parseQuestionsCSV(csvText) {
  const lines = csvText.trim().split('\n')
  const partyIds = ['M', 'S', 'SD', 'C', 'V', 'L', 'KD', 'MP']

  return lines.slice(1).map((line) => {
    // Handle quoted fields
    const cols = []
    let inQuote = false
    let current = ''
    for (const ch of line) {
      if (ch === '"') { inQuote = !inQuote }
      else if (ch === ',' && !inQuote) { cols.push(current); current = '' }
      else { current += ch }
    }
    cols.push(current)

    const [id, text, category, ...scores] = cols
    const positions = {}
    partyIds.forEach((p, i) => {
      positions[p] = parseInt(scores[i], 10)
    })

    return { id: parseInt(id, 10), text: text.trim(), category: category.trim(), positions }
  })
}
