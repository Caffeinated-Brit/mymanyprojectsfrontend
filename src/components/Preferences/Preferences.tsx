// Preferences.tsx
import React, { useState } from 'react';
import './Preferences.css';

interface Settings {
    darkMode: boolean;
    notifications: boolean;
}

function Preferences() {
    const [settings, setSettings] = useState<Settings>({
        darkMode: false,
        notifications: true,
    });

    const handleToggle = (setting: keyof Settings) => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            [setting]: !prevSettings[setting],
        }));
    };

    return (
        <div className="preferences">
            <h2>Preferences</h2>
            <p>These dont do anything this is a testing page</p>
            <div className="preference-item">
                <label>
                    <input
                        type="checkbox"
                        checked={settings.darkMode}
                        onChange={() => handleToggle('darkMode')}
                    />
                    Dark Mode
                </label>
            </div>
            <div className="preference-item">
                <label>
                    <input
                        type="checkbox"
                        checked={settings.notifications}
                        onChange={() => handleToggle('notifications')}
                    />
                    Enable Notifications
                </label>
            </div>
        </div>
    );
}

export default Preferences;