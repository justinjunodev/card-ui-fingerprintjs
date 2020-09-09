import React, { useState, useEffect } from "react"
import Fingerprint2 from "fingerprintjs2"

const Fingerprint = () => {
  const [userFingerprint, setUserFingerprint] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  function getFingerprint() {
    if (window.requestIdleCallback) {
      requestIdleCallback(() => {
        Fingerprint2.get((components) => {
          setUserFingerprint({
            timezone: components[9].value,
            platform: components[16].value,
          })
          setIsLoading(false)
        })
      })
    } else {
      setTimeout(() => {
        Fingerprint2.get((components) => {
          setUserFingerprint({
            timezone: components[9].value,
            platform: components[16].value,
          })
          setIsLoading(false)
        })
      }, 500)
    }
  }

  useEffect(() => {
    getFingerprint()
  }, [])

  return (
    <>
      <h4>Environment Details</h4>
      {!isLoading && (
        <ul>
          <li>Timezone: {userFingerprint.timezone}</li>
          <li>Platform: {userFingerprint.platform}</li>
        </ul>
      )}
    </>
  )
}

export default Fingerprint
