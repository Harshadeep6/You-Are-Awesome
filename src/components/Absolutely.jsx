import '../compCSS/Absolutely.css'
import { useSpring, animated } from 'react-spring';

export default function Absolutely() {
    const props = useSpring({
        from: { opacity: 0, marginTop: -500 },
        to: { opacity: 1, marginTop: 0 },
        config: { duration: 300 },
    });
    
    return (
        <animated.h1 style={props}>told you! 😎</animated.h1>
    )
}