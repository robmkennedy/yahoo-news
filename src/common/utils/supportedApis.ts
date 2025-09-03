export const apisMap = new Map<string, boolean>();

export const supportedApis = () => {
    const request = new XMLHttpRequest();

    apisMap.set('Attribution Reporting', 'setAttributionReporting' in request);
    apisMap.set('Audio Output Devices', 'selectAudioOutput' in navigator.mediaDevices);

    apisMap.set('Background Fetch', 'BackgroundFetchManager' in self);
    // apisMap.set('Background Synchronization', 'setAttributionReporting' in self);
    // apisMap.set('Background Tasks', 'requestIdleCallback' in self);
    // apisMap.set('Badging', 'setAppBadge' in navigator);
    apisMap.set('Barcode Detection', "BarcodeDetector" in self);
    // apisMap.set('Battery Status', 'getBattery' in navigator);
    // apisMap.set('Beacon', 'sendBeacon' in navigator);
    apisMap.set('Bluetooth', 'Bluetooth' in self);
    apisMap.set('Broadcast Channel', 'setAttributionReporting' in self);

    // apisMap.set('CSS Custom Highlight', 'setAttributionReporting' in self);
    // apisMap.set('CSS Font Loading', 'setAttributionReporting' in self);
    apisMap.set('CSS Painting', 'paintWorklet' in CSS);
    // apisMap.set('CSS Properties and Values', 'setAttributionReporting' in self);
    // apisMap.set('CSS Typed Object Model', 'setAttributionReporting' in self);
    // apisMap.set('CSS Object Model (CSSOM)', false);

    // const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    // apisMap.set('Canvas', !!canvas?.getContext);
    // apisMap.set('Channel Messaging', 'setAttributionReporting' in self);

    // apisMap.set('Clipboard', 'clipboard' in navigator);
    // apisMap.set('Compression Streams', 'setAttributionReporting' in self);
    apisMap.set('Compute Pressure', 'PressureObserver' in self);
    // apisMap.set('Console', 'setAttributionReporting' in self);


    apisMap.set('Contact Picker', 'contacts' in navigator);
        apisMap.set('Content Index', 'ContentIndex' in self);


    // apisMap.set('Cookie Store', 'setAttributionReporting' in self);
    // apisMap.set('Credential Management', 'credentials' in navigator);

    // apisMap.set('Document Object Model (DOM)', false);
    // apisMap.set('Device Memory', 'deviceMemory' in navigator);
    // apisMap.set('Device orientation events', false);
    apisMap.set('Device Posture', 'devicePosture' in navigator);
    apisMap.set('Document Picture-in-Picture', 'documentPictureInPicture' in self);





    apisMap.set('EditContext', 'EditContext' in self);
    // apisMap.set('Encoding', 'setAttributionReporting' in self);
    // apisMap.set('Encrypted Media Extensions', 'setAttributionReporting' in self);
    apisMap.set('EyeDropper', 'EyeDropper' in self);




    apisMap.set('Federated Credential Management', 'IdentityCredential' in self);
    apisMap.set('Fenced Frame', 'FencedFrameConfig' in self);

    // apisMap.set('Fetch', 'setAttributionReporting' in self);
    // apisMap.set('File', 'setAttributionReporting' in self);
    // apisMap.set('File System', 'setAttributionReporting' in self);
    // apisMap.set('File and Directory Entries', 'setAttributionReporting' in self);
    // apisMap.set('Force Touch eventsNon-standard', false);
    // apisMap.set('Fullscreen', 'setAttributionReporting' in self);

    // apisMap.set('Gamepad', 'setAttributionReporting' in self);
    // apisMap.set('Geolocation', 'setAttributionReporting' in self);
    // apisMap.set('Geometry interfaces', false);
    //
    // apisMap.set('The HTML DOM', 'setAttributionReporting' in self);
    // apisMap.set('HTML Drag and Drop', 'setAttributionReporting' in self);
    apisMap.set('HTML Sanitizer', 'Sanitizer' in self);
    // apisMap.set('History', 'setAttributionReporting' in self);
    // apisMap.set('Houdini', 'setAttributionReporting' in self);

    apisMap.set('Idle Detection', 'IdleDetector' in self);

    // apisMap.set('MediaStream Image Capture', 'setAttributionReporting' in self);
    // apisMap.set('IndexedDB', 'setAttributionReporting' in self);

    apisMap.set('Ink', 'Ink' in self);
    apisMap.set('InputDeviceCapabilities', 'InputDeviceCapabilities' in self);
    // apisMap.set('Insertable Streams for MediaStreamTrack', 'setAttributionReporting' in self);
    // apisMap.set('Intersection Observer', 'setAttributionReporting' in self);
    // apisMap.set('Invoker Commands', 'setAttributionReporting' in self);

    apisMap.set('JS Self-Profiling', 'Profiler' in self);

    apisMap.set('Keyboard', 'Keyboard' in self);

    apisMap.set('Launch Handler', 'LaunchParams' in self);
    apisMap.set('Local Font Access', 'FontData' in self);

    // apisMap.set('Media Capabilities', 'setAttributionReporting' in self);
    // apisMap.set('Media Capture and Streams', 'setAttributionReporting' in self);
    // apisMap.set('Media Session', 'setAttributionReporting' in self);
    // apisMap.set('Media Source', 'setAttributionReporting' in self);
    // apisMap.set('MediaStream Recording', 'setAttributionReporting' in self);

    apisMap.set('Navigation', 'Navigation' in self);
    // apisMap.set('Network Information', 'setAttributionReporting' in self);

    // apisMap.set('Page Visibility', 'setAttributionReporting' in self);
    apisMap.set('Payment Handler', 'PaymentManager' in self);
    // apisMap.set('Payment Request', 'setAttributionReporting' in self);
    // apisMap.set('Performance', 'setAttributionReporting' in self);
    apisMap.set('Web Periodic Background Synchronization', 'PeriodicSyncManager' in self);


    // apisMap.set('Permissions', 'setAttributionReporting' in self);
    // apisMap.set('Picture-in-Picture', 'setAttributionReporting' in self);
    // apisMap.set('Pointer events', false);
    // apisMap.set('Pointer Lock', 'setAttributionReporting' in self);
    // apisMap.set('Popover', 'setAttributionReporting' in self);
    apisMap.set('Presentation', 'Presentation' in self);
    // apisMap.set('Prioritized Task Scheduling', 'setAttributionReporting' in self);
    // apisMap.set('Push', 'setAttributionReporting' in self);

    // apisMap.set('Remote Playback', 'setAttributionReporting' in self);
    // apisMap.set('Reporting', 'setAttributionReporting' in self);
    // apisMap.set('Resize Observer', 'setAttributionReporting' in self);
    //
    // apisMap.set('SVG', 'setAttributionReporting' in self);
    // apisMap.set('Screen Capture', 'setAttributionReporting' in self);
    // apisMap.set('Screen Orientation', 'setAttributionReporting' in self);
    // apisMap.set('Screen Wake Lock', 'setAttributionReporting' in self);
    // apisMap.set('Selection', 'setAttributionReporting' in self);
    // apisMap.set('Sensor', 'setAttributionReporting' in self);
    // apisMap.set('Server-sent events', false);
    // apisMap.set('Service Worker', 'setAttributionReporting' in self);
    apisMap.set('Shared Storage', 'SharedStorage' in self);
    apisMap.set('Speculation Rules', 'prerendering' in document);
    // apisMap.set('Storage', 'setAttributionReporting' in self);
    // apisMap.set('Storage Access', 'setAttributionReporting' in self);
    // apisMap.set('Streams', 'setAttributionReporting' in self);
    apisMap.set('Summarizer', 'Summarizer' in self);

    apisMap.set('Topics', 'browsingTopics' in document);
    // apisMap.set('Touch events', false);
    apisMap.set('Translator and Language Detector', 'LanguageDetector' in self);
    // apisMap.set('Trusted Types', 'setAttributionReporting' in self);

    // apisMap.set('UI Events', false);
    // apisMap.set('URL', 'setAttributionReporting' in self);
    // apisMap.set('URL Fragment Text Directives', false);
    // apisMap.set('URL Pattern', 'setAttributionReporting' in self);
    apisMap.set('User-Agent Client Hints', 'NavigatorUAData' in self);

    // apisMap.set('Vibration', 'setAttributionReporting' in self);
    // apisMap.set('View Transition', 'setAttributionReporting' in self);
    apisMap.set('VirtualKeyboard', 'VirtualKeyboard' in self);
    // apisMap.set('Visual Viewport', 'setAttributionReporting' in self);

    // apisMap.set('Web Animations', 'setAttributionReporting' in self);
    // apisMap.set('Web Audio', 'setAttributionReporting' in self);
    // apisMap.set('Web Authentication', 'setAttributionReporting' in self);
    // apisMap.set('Web Components', false);
    // apisMap.set('Web Crypto', 'setAttributionReporting' in self);
    // apisMap.set('Web Locks', 'setAttributionReporting' in self);
    // apisMap.set('Web MIDI', 'setAttributionReporting' in self);
    apisMap.set('Web NFC', 'NDEFMessage' in self);
    // apisMap.set('Notifications', 'setAttributionReporting' in self);
    apisMap.set('Web Serial', 'Serial' in self);
    // apisMap.set('Web Share', 'setAttributionReporting' in self);
    // apisMap.set('Web Speech', 'setAttributionReporting' in self);
    // apisMap.set('Web Storage', 'setAttributionReporting' in self);
    // apisMap.set('Web Workers', 'setAttributionReporting' in self);
    // apisMap.set('WebCodecs', 'setAttributionReporting' in self);
    // apisMap.set('WebGL: 2D and 3D graphics for the web', false);
    // apisMap.set('WebGPU', 'setAttributionReporting' in self);
    apisMap.set('WebHID', 'HID' in self);
    apisMap.set('WebOTP', 'OTPCredential' in self);
    // apisMap.set('WebRTC', 'setAttributionReporting' in self);
    // apisMap.set('The WebSocket', 'setAttributionReporting' in self);
    // apisMap.set('WebTransport', 'setAttributionReporting' in self);
    apisMap.set('WebUSB', 'USB' in self);
    apisMap.set('WebVR', 'VRDisplay' in self);
    // apisMap.set('WebVTT', 'setAttributionReporting' in self);
    apisMap.set('WebXR Device', 'XRSession' in self);
    apisMap.set('Window Controls Overlay', 'WindowControlsOverlay' in self);
    apisMap.set('Window Management', 'ScreenDetails' in self);

    // apisMap.set('XMLHttpRequest', 'setAttributionReporting' in self);

    apisMap.set('fetchLater()', 'fetchLater' in self);
};

supportedApis();


