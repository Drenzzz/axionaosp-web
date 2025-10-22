export interface FeatureItem {
  name: string;
  description?: string; 
  subItems?: string[];
  isNew?: boolean;
}

export interface FeatureCategory {
  title: string;
  level: number;
  items?: FeatureItem[];
  subCategories?: FeatureCategory[];
}

export const featureSections: FeatureCategory[] = [
  {
    title: "New Features",
    level: 1,
    subCategories: [
      {
        title: "NothingOS-Features (Reverse Engineered from NOS 3.0)",
        level: 2,
        items: [
          { name: "Disable QS swipe on lockscreen" },
          { name: "Improved three-finger swipe gesture" },
          { name: "Screenshot cord intercept feature" },
          { name: "Network Indicator" },
          { name: "App Locker" },
          { name: "Always-On Display (NothingOS style)" },
          { name: "NothingOS-style lockscreen clocks" },
        ],
      },
      {
        title: "AxionOS Exclusive Features",
        level: 2,
        subCategories: [
          {
            title: "UI & UX",
            level: 3,
            items: [
              {
                name: "AxionOS 2.0 UI Updates",
                isNew: true,
                subItems: [
                  "New Quick Settings UI",
                  "Reworked Lockscreen Widgets Animations",
                ],
              },
              {
                name: "QuickLook — At-a-Glance on Lockscreen",
                isNew: true,
                subItems: [
                    "Weather",
                    "Calendar Events",
                    "Now Playing *(Pixels only)*",
                ],
              },
              {
                name: "Improved AOSP Freeform",
                isNew: true,
                subItems: [
                    "Floating icons",
                    "Fullscreen support on immersive display",
                    "Improved animations",
                ],
              },
            ],
          },
          {
            title: "Feature Rewrites",
            level: 3,
            items: [
              { name: "Edge Light", description: "Minimal implementation following Motorola specs" },
              { name: "Lockscreen Media Art", description: "Less resource intensive compared to A15 version" },
              { name: "WiFi Standard", description: "Leak prevention and memory optimizations" },
              { name: "GameSpace", description: "Full service rewrite and modern and flexible dashboard UI", isNew: true },
              { name: "Pulse Visualizer", description: "Minimal, smoother FPS and better AOD support" },
              { name: "Doze / Pulse Gestures", description: "Reworked wake/pulse behavior" },
              { name: "Sidebar", description: "Full service rewrite from scratch", isNew: true },
            ],
          },
          {
            title: "Carry-over Features",
            level: 3,
            items: [
              { name: "Compact Heads-Up notifications" },
              { name: "HDR display boost toggle" },
              { name: "Screenshot sound toggle" },
              { name: "Power-Off verification" },
              { name: "Face Unlock" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Miscellaneous",
    level: 1,
    items: [
      { name: "Debloated", description: "Clean and minimal experience" },
      { name: "Latest Security Patches", description: "Up-to-date Android security updates" },
    ],
  },
  {
    title: "Credits",
    level: 1,
    items: [
        { name: "Special thanks to AOSP, LineageOS, and the open-source community for their contributions to AxionAOSP."}
    ]
  },
];
