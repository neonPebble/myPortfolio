import { useEffect, useMemo } from 'react'

export default function useVisibility(options, targetRef) {
  // const [isVisible, setIsVisible] = useState(false) // maybe take this as an arg

  const optionsM = useMemo(() => options, [options])

  useEffect(() => {
    const target = targetRef.current
    console.log('ran outer useEffect')

    const queryString = `a[href="#${targetRef.current.id}"]`

    const allNavLinks = document.querySelectorAll('nav a')
    const navLink = document.querySelector(queryString)

    const callBackFunc = entries => {
      const [entry] = entries
      // setIsVisible(entry.isIntersecting)
      if (entry.isIntersecting) {
        target.classList.add('show')
        allNavLinks.forEach(oneLink => {
          oneLink.classList.remove('onSection')
        })
        navLink.classList.add('onSection')
        // observer.unobserve(target)
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
