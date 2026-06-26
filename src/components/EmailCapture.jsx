import { useState } from 'react'

export function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('')

  const validateEmail = (val) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(val)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!email) {
      setStatus('error')
      setErrorMessage('Please enter an email address.')
      return
    }

    if (!validateEmail(email)) {
      setStatus('error')
      setErrorMessage('Please provide a valid email address.')
      return
    }

    setStatus('loading')

    // Simulate API request
    setTimeout(() => {
      // Mock random success/failure or just default to success
      if (email.toLowerCase().includes('fail')) {
        setStatus('error')
        setErrorMessage('Failed to subscribe. Please try again.')
      } else {
        setStatus('success')
        setEmail('')
      }
    }, 1200)
  }

  return (
    <section id="newsletter" aria-label="Newsletter Signup" className="py-24 px-4 bg-oceanic-noir relative overflow-hidden border-b border-arctic-powder/5">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nocturnal-expedition/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-panel p-8 md:p-12 rounded-3xl text-center max-w-2xl mx-auto relative overflow-hidden">
          {/* Subtle top amber border highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-forsythia/40 to-transparent" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nocturnal-expedition border border-mystic-mint/10 text-mystic-mint text-xs font-semibold mb-6">
            <span>Product Updates</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 tracking-tight text-white">
            Get notified when Canvas v2 ships
          </h2>
          <p className="text-xs sm:text-sm text-arctic-powder/60 mb-8 max-w-md mx-auto font-body leading-relaxed">
            Subscribe to receive developer updates, beta releases, and thread-isolation performance benchmarks. Zero spam, unsubscribe anytime.
          </p>

          {status === 'success' ? (
            <div className="animate-fade-in p-6 bg-mystic-mint/5 border border-mystic-mint/20 rounded-2xl max-w-md mx-auto flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-mystic-mint/10 text-mystic-mint flex items-center justify-center text-lg">
                ✓
              </div>
              <p className="font-heading font-bold text-sm text-white">You're on the list!</p>
              <p className="font-body text-xs text-arctic-powder/75">
                We'll notify you the moment Canvas v2 goes live.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-2 text-[10px] text-forsythia hover:underline font-heading font-bold cursor-pointer"
              >
                Sign up another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto relative z-10 flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status === 'error') setStatus('idle')
                  }}
                  disabled={status === 'loading'}
                  placeholder="enter your developer email..."
                  className={`flex-1 px-5 py-3 rounded-xl bg-oceanic-noir/80 border text-xs text-white placeholder-arctic-powder/30 focus:outline-none transition-all duration-200 font-mono ${
                    status === 'error'
                      ? 'border-deep-saffron focus:border-deep-saffron/80'
                      : 'border-arctic-powder/10 focus:border-forsythia/45'
                  }`}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`px-6 py-3 rounded-xl font-heading font-bold text-xs transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    status === 'loading'
                      ? 'bg-arctic-powder/5 border border-arctic-powder/10 text-arctic-powder/40 cursor-not-allowed'
                      : 'bg-forsythia text-oceanic-noir hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-forsythia/15'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-3 w-3 text-arctic-powder" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe →'
                  )}
                </button>
              </div>

              {status === 'error' && (
                <p className="text-left text-[10px] text-deep-saffron font-mono mt-1">
                  ⚠ {errorMessage}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
