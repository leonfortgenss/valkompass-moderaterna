// User answers: 2 (instämmer helt), 1 (delvis), -1 (delvis emot), -2 (helt emot)
// Party positions: 1 (agree), 0 (neutral), -1 (disagree)
// Normalize user answer to [-1, 1] then compare with party position.
// Max distance on that scale is 2, so agreement = 1 - dist/2.
export function calculateResults(userAnswers, questions, parties) {
  return parties
    .map((party) => {
      let total = 0
      let agreement = 0

      questions.forEach((q) => {
        const raw = userAnswers[q.id]
        if (raw === null || raw === undefined) return

        const userNorm = raw / 2           // maps ±2 → ±1
        const partyPos = q.positions[party.id]  // -1, 0, or 1
        const dist = Math.abs(userNorm - partyPos)

        total += 1
        agreement += 1 - dist / 2
      })

      const match = total > 0 ? Math.round((agreement / total) * 100) : 0
      return { party, match }
    })
    .sort((a, b) => b.match - a.match)
}
