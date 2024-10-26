import { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";
import * as Animatable from "react-native-animatable";
interface RandomDotProps {
    color: string;
}
const RandomDot = ({ color }: RandomDotProps) => {
    const { width, height } = useWindowDimensions();
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Random position within screen bounds (with padding)
        const padding = 40;
        setPosition({
            x: Math.random() * (width - padding * 2) + padding,
            y: Math.random() * (height - padding * 2) + padding,
        });
    }, [width, height]);

    return (
        <Animatable.View
            animation="fadeIn"
            duration={1000}
            className="absolute h-4 w-4 rounded-full opacity-30"
            style={{
                backgroundColor: color,
                left: position.x,
                top: position.y,
            }}
        />
    );
};

export default RandomDot;
