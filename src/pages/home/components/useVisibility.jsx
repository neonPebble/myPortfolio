import { useEffect, useMemo } from 'react'

export default function useVisibility(options, targetRef) {
  // const [isVisible, setIsVisible] = useState(false) // maybe take this as an arg

  const optionsM = useMemo(() => options, [options])

  useEffect(() => {
    console.log('atleast the hook works')
    const target = targetRef.current
    console.log(target)
    console.log(target.classList)
    const callBackFunc = (entries, observer) => {
      console.log('it should be working')
      const [entry] = entries
      // setIsVisible(entry.isIntersecting)
      if (entry.isIntersecting) {
        console.log('now it should be REALLY WORKING')
        target.classList.add('show')
        observer.unobserve(target)
      }
    }

    if (target) {
      if (!target.classList.contains('show')) {
        const observer = new IntersectionObserver(callBackFunc, optionsM)
        console.log('setting observer')
        observer.observe(target)
      }
    }
  }, [targetRef, optionsM])
}
