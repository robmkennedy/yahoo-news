export const apisMap = new Map<string, boolean>();

/**
 * Checks experimental Web APIs to see if the current browser supports them.
 * Populates a map with the name of the API and a boolean indicating if it is supported.
 */
export const supportedApis = () => {
    const request = new XMLHttpRequest();

    apisMap.set('Attribution Reporting', 'setAttributionReporting' in request);
    apisMap.set('Audio Output Devices', 'selectAudioOutput' in navigator.mediaDevices);

    apisMap.set('Background Fetch', 'BackgroundFetchManager' in self);
    apisMap.set('Barcode Detection', 'BarcodeDetector' in self);
    apisMap.set('Bluetooth', 'Bluetooth' in self);
    apisMap.set('Broadcast Channel', 'setAttributionReporting' in self);

    apisMap.set('CSS Painting', 'paintWorklet' in CSS);
    apisMap.set('Compute Pressure', 'PressureObserver' in self);
    apisMap.set('Contact Picker', 'contacts' in navigator);
    apisMap.set('Content Index', 'ContentIndex' in self);

    apisMap.set('Device Posture', 'devicePosture' in navigator);
    apisMap.set('Document Picture-in-Picture', 'documentPictureInPicture' in self);

    apisMap.set('EditContext', 'EditContext' in self);
    apisMap.set('EyeDropper', 'EyeDropper' in self);

    apisMap.set('Federated Credential Management', 'IdentityCredential' in self);
    apisMap.set('Fenced Frame', 'FencedFrameConfig' in self);

    apisMap.set('HTML Sanitizer', 'Sanitizer' in self);

    apisMap.set('Idle Detection', 'IdleDetector' in self);

    apisMap.set('Ink', 'Ink' in self);
    apisMap.set('InputDeviceCapabilities', 'InputDeviceCapabilities' in self);

    apisMap.set('JS Self-Profiling', 'Profiler' in self);

    apisMap.set('Keyboard', 'Keyboard' in self);

    apisMap.set('Launch Handler', 'LaunchParams' in self);
    apisMap.set('Local Font Access', 'FontData' in self);

    apisMap.set('Navigation', 'Navigation' in self);

    apisMap.set('Payment Handler', 'PaymentManager' in self);
    apisMap.set('Web Periodic Background Synchronization', 'PeriodicSyncManager' in self);
    apisMap.set('Presentation', 'Presentation' in self);

    apisMap.set('Shared Storage', 'SharedStorage' in self);
    apisMap.set('Speculation Rules', 'prerendering' in document);
    apisMap.set('Summarizer', 'Summarizer' in self);

    apisMap.set('Topics', 'browsingTopics' in document);
    apisMap.set('Translator and Language Detector', 'LanguageDetector' in self);

    apisMap.set('User-Agent Client Hints', 'NavigatorUAData' in self);

    apisMap.set('VirtualKeyboard', 'VirtualKeyboard' in self);

    apisMap.set('Web NFC', 'NDEFMessage' in self);
    apisMap.set('Web Serial', 'Serial' in self);
    apisMap.set('WebHID', 'HID' in self);
    apisMap.set('WebOTP', 'OTPCredential' in self);
    apisMap.set('WebUSB', 'USB' in self);
    apisMap.set('WebVR', 'VRDisplay' in self);
    apisMap.set('WebXR Device', 'XRSession' in self);
    apisMap.set('Window Controls Overlay', 'WindowControlsOverlay' in self);
    apisMap.set('Window Management', 'ScreenDetails' in self);

    apisMap.set('fetchLater()', 'fetchLater' in self);
};

supportedApis();
