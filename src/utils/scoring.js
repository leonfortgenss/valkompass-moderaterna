import { PROFILES, PROFILE_TIEBREAK_ORDER, SUBSCORES, AGREEMENT_PRIORITY, DISAGREEMENT_TEXTS } from '../data/profiles.js'

const NON_MODERATE_PROFILES = ['LOCAL', 'SYS', 'LEFT', 'GREEN', 'WILD']

function pickTier(tiers, value) {
  return tiers.find((tier) => value >= tier.min)?.text ?? ''
}

function subscoreFor(group, answers, questions) {
  const byId = new Map(questions.map((q) => [q.id, q]))
  let moderateCount = 0
  let total = 0

  group.questionIds.forEach((id) => {
    const q = byId.get(id)
    const letter = answers[id]
    if (!q || !letter) return
    total += 1
    if (letter === q.moderate) moderateCount += 1
  })

  const percent = total > 0 ? Math.round((moderateCount / total) * 100) : 0
  return {
    key: group.key,
    label: group.label,
    percent,
    text: pickTier(group.tiers, percent),
  }
}

// Sektion 6–9: matchningsprocent, profilpoäng och val av slutprofil.
export function calculateResults(answers, questions) {
  let moderateCount = 0
  let answeredCount = 0
  const profileCounts = { LOCAL: 0, SYS: 0, LEFT: 0, GREEN: 0, WILD: 0 }

  questions.forEach((q) => {
    const letter = answers[q.id]
    if (!letter) return
    answeredCount += 1

    const option = q.options.find((o) => o.letter === letter)
    if (!option) return

    if (option.profile === 'M') {
      moderateCount += 1
    } else if (option.profile in profileCounts) {
      profileCounts[option.profile] += 1
    }
  })

  const matchPercent = answeredCount > 0 ? Math.round((moderateCount / answeredCount) * 100) : 0

  let profileKey
  if (matchPercent >= 75) {
    profileKey = 'FRAMTIDSBYGGARE'
  } else if (matchPercent >= 60) {
    profileKey = 'VALFARDSREALIST'
  } else {
    let best = null
    let bestCount = -1
    NON_MODERATE_PROFILES.forEach((code) => {
      const count = profileCounts[code]
      if (count > bestCount) {
        best = code
        bestCount = count
      } else if (count === bestCount && best) {
        // Tie-break: earlier entry in PROFILE_TIEBREAK_ORDER wins.
        const currentRank = PROFILE_TIEBREAK_ORDER.indexOf(best)
        const challengerRank = PROFILE_TIEBREAK_ORDER.indexOf(code)
        if (challengerRank < currentRank) best = code
      }
    })
    profileKey = best ?? 'LOCAL'
  }

  const profile = { key: profileKey, ...PROFILES[profileKey] }

  const subScores = SUBSCORES.map((group) => subscoreFor(group, answers, questions))

  const byId = new Map(questions.map((q) => [q.id, q]))

  const agreements = AGREEMENT_PRIORITY
    .filter((item) => answers[item.id] === byId.get(item.id)?.moderate)
    .slice(0, 3)

  const disagreements = questions
    .filter((q) => answers[q.id] && answers[q.id] !== q.moderate)
    .slice(0, 2)
    .map((q) => ({ id: q.id, label: q.title, text: DISAGREEMENT_TEXTS[q.id] }))

  return {
    matchPercent,
    moderateCount,
    answeredCount,
    profile,
    subScores,
    agreements,
    disagreements,
  }
}
