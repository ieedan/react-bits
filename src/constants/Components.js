const animations = {
  'blob-cursor': () => import("../demo/Animations/BlobCursorDemo"),
  'animated-content': () => import("../demo/Animations/AnimatedContentDemo"),
  'follow-cursor': () => import("../demo/Animations/FollowCursorDemo"),
  'magnet': () => import("../demo/Animations/MagnetDemo"),
  'fade-content': () => import("../demo/Animations/FadeContentDemo"),
  'crosshair': () => import("../demo/Animations/CrosshairDemo"),
  'star-border': () => import("../demo/Animations/StarBorderDemo"),
  'noise': () => import("../demo/Animations/NoiseDemo"),
  'magnet-lines': () => import("../demo/Animations/MagnetLinesDemo"),
  'splash-cursor': () => import("../demo/Animations/SplashCursorDemo"),
  'click-spark': () => import("../demo/Animations/ClickSparkDemo"),
  'pixel-transition': () => import("../demo/Animations/PixelTransitionDemo"),
  'image-trail': () => import("../demo/Animations/ImageTrailDemo"),
  'pixel-trail': () => import("../demo/Animations/PixelTrailDemo"),
};

const textAnimations = {
  'split-text': () => import("../demo/TextAnimations/SplitTextDemo"),
  'blur-text': () => import("../demo/TextAnimations/BlurTextDemo"),
  'shiny-text': () => import("../demo/TextAnimations/ShinyTextDemo"),
  'gradient-text': () => import("../demo/TextAnimations/GradientTextDemo"),
  'count-up': () => import("../demo/TextAnimations/CountUpDemo"),
  'decrypted-text': () => import("../demo/TextAnimations/DecryptedTextDemo"),
  'true-focus': () => import("../demo/TextAnimations/TrueFocusDemo"),
  'variable-proximity': () => import("../demo/TextAnimations/VariableProximityDemo"),
  'text-pressure': () => import("../demo/TextAnimations/TextPressureDemo"),
  'ascii-text': () => import("../demo/TextAnimations/ASCIITextDemo"),
  'falling-text': () => import("../demo/TextAnimations/FallingTextDemo"),
  'rotating-text': () => import("../demo/TextAnimations/RotatingTextDemo"),
};

const components = {
  'stack': () => import("../demo/Components/StackDemo"),
  'dock': () => import("../demo/Components/DockDemo"),
  'masonry': () => import("../demo/Components/MasonryDemo"),
  'rolling-gallery': () => import("../demo/Components/RollingGalleryDemo"),
  'spotlight-card': () => import("../demo/Components/SpotlightCardDemo"),
  'elastic-slider': () => import("../demo/Components/ElasticSliderDemo"),
  'decay-card': () => import("../demo/Components/DecayCardDemo"),
  'infinite-scroll': () => import("../demo/Components/InfiniteScrollDemo"),
  'bounce-cards': () => import("../demo/Components/BounceCardsDemo"),
  'pixel-card': () => import("../demo/Components/PixelCardDemo"),
  'logo-wall': () => import("../demo/Components/LogoWallDemo"),
  'tilted-card': () => import("../demo/Components/TiltedCardDemo"),
  'infinite-menu': () => import("../demo/Components/InfiniteMenuDemo"),
  'flying-posters': () => import("../demo/Components/FlyingPostersDemo"),
  'flowing-menu': () => import("../demo/Components/FlowingMenuDemo"),
  'circular-gallery': () => import("../demo/Components/CircularGalleryDemo"),
};

const backgrounds = {
  'squares': () => import("../demo/Backgrounds/SquaresDemo"),
  'hyperspeed': () => import("../demo/Backgrounds/HyperspeedDemo"),
  'grid-motion': () => import("../demo/Backgrounds/GridMotionDemo"),
  'waves': () => import("../demo/Backgrounds/WavesDemo"),
  'ballpit': () => import("../demo/Backgrounds/BallpitDemo"),
  'shape-blur': () => import("../demo/Backgrounds/ShapeBlurDemo"),
  'letter-glitch': () => import("../demo/Backgrounds/LetterGlitchDemo"),
  'grid-distortion': () => import("../demo/Backgrounds/GridDistortionDemo"),
};

export const componentMap = {
  ...animations,
  ...textAnimations,
  ...components,
  ...backgrounds,
};
