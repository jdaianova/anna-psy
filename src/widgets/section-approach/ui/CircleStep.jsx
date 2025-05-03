import { useEffect, useState } from 'react';
import {
    CircularProgressbarWithChildren,
    buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';

export const CircleStep = ({
    color = '#7D7F72',
    insideIcon,
    sideText = '',
    active = false,
    onDone,
    index,
}) => {
    const [progress, setProgress] = useState(0);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        if (active) {
            let value = 0;
            const interval = setInterval(() => {
                value += 3;
                setProgress(value);
                if (value >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setShowText(true);
                        onDone?.();
                    }, 50);
                }
            }, 20);
            return () => clearInterval(interval);
        }
    }, [active, onDone]);

    return (
        <div
            className={`flex-1 flex flex-col items-center gap-4 pt-10 sm:w-[31%]
                p-4 mPhone:p-8 
                ${(index === 1 ) || (index === 2)
                    ? 'border-t-2 border-white sm:border-l-2 sm:border-t-0' 
                    : ''}`}
        >
            <div className="w-[140px]">
                <CircularProgressbarWithChildren
                    value={progress}
                    strokeWidth={10}
                    styles={buildStyles({
                        pathColor: color,
                        trailColor: '#EDEDED',
                        rotation: 0.5,
                    })}
                >
                    <div className="flex items-center justify-center">
                        <img src={insideIcon} alt="icon" width={80} />
                    </div>
                </CircularProgressbarWithChildren>
            </div>

            <div className="min-h-[64px]">
                <motion.div
                    initial={{ opacity: 0, scaleY: 0, y: -20 }}
                    animate={showText ? { opacity: 1, scaleY: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="inline-block origin-top"
                >
                    <p className="text-center
                            px-0 sPhone:px-8
                            text-[5vw] sPhone:text-[4vw] mPhone:text-[3.6vw] 
                            sm:!text-[3.2vw] md:!text-[2.6vw] lg:!text-[2vw] xl:!text-[24px]">
                        {sideText}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};
