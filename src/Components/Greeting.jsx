import React, { useState, useEffect } from 'react';

const Greeting = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const getGreeting = () => {
        const currentHour = currentTime.getHours();
        let greeting = '';

        if (currentHour >= 5 && currentHour < 12) {
            greeting = 'Good Morning';
        } else if (currentHour >= 12 && currentHour < 17) {
            greeting = 'Good Afternoon';
        } else if (currentHour >= 17 && currentHour < 20) {
            greeting = 'Good Evening';
        } else {
            greeting = 'Good Night';
        }

        return greeting;
    };

    const formatDate = (date) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className="text-center ">
            <p className="text-[16px]  text-white   text-poppins ">{getGreeting()}</p>
            <span className="text-white text-xs">
                {formatDate(currentTime)}
            </span>
            <span className="text-white text-xs"> ,{currentTime.toLocaleTimeString()}</span>
        </div>
    );
};

export default Greeting;
