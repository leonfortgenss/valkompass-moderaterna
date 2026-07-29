// Umami-analytics (privat dashboard, syns aldrig för besökaren).
//
// Byt ut UMAMI_WEBSITE_ID (och UMAMI_SCRIPT_URL om ni självhostar) mot
// värdena från Umami → Settings → Websites → er sajt → Tracking code.
const UMAMI_SCRIPT_URL = 'https://cloud.umami.is/script.js'
const UMAMI_WEBSITE_ID = 'c9c4ddae-6c2d-4d42-9dad-47113e28e02a'

let initialized = false

export function initAnalytics() {
  if (initialized || typeof document === 'undefined') return
  if (!UMAMI_WEBSITE_ID || UMAMI_WEBSITE_ID.startsWith('REPLACE_')) return

  const script = document.createElement('script')
  script.defer = true
  script.src = UMAMI_SCRIPT_URL
  script.setAttribute('data-website-id', UMAMI_WEBSITE_ID)
  document.head.appendChild(script)
  initialized = true
}

export function trackEvent(name, data) {
  if (typeof window === 'undefined' || typeof window.umami === 'undefined') return
  try {
    window.umami.track(name, data)
  } catch {
    // Spårning ska aldrig kunna krascha appen.
  }
}
