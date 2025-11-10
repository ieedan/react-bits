import { defineConfig } from 'jsrepo';
import { output as shadcn } from '@jsrepo/shadcn';

export default defineConfig({
  registry: {
    name: 'react-bits',
    authors: ['David Haz'],
    description:
      'An open source collection of animated, interactive & fully customizable React components for building stunning, memorable user interfaces.',
    bugs: 'https://github.com/DavidHDev/react-bits/issues',
    homepage: 'https://reactbits.dev',
    repository: 'https://github.com/DavidHDev/react-bits',
    tags: [
      'react',
      'javascript',
      'components',
      'web',
      'reactjs',
      'css-animations',
      'component-library',
      'ui-components',
      '3d',
      'ui-library',
      'tailwind',
      'tailwindcss',
      'components',
      'components-library'
    ],
    excludeDeps: ['react'],
    outputs: [shadcn({ dir: 'public/r', format: true })],
    items: [
      {
        name: 'AnimatedContent-JS-CSS',
        type: 'registry:block',
        title: 'AnimatedContent',
        description:
          'Wrapper that animates any children on scroll or mount with configurable direction, distance, duration and easing.',
        files: [
          {
            path: 'src/content/Animations/AnimatedContent/AnimatedContent.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'AnimatedContent-JS-TW',
        type: 'registry:block',
        title: 'AnimatedContent',
        description:
          'Wrapper that animates any children on scroll or mount with configurable direction, distance, duration and easing.',
        files: [
          {
            path: 'src/tailwind/Animations/AnimatedContent/AnimatedContent.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'AnimatedContent-TS-CSS',
        type: 'registry:block',
        title: 'AnimatedContent',
        description:
          'Wrapper that animates any children on scroll or mount with configurable direction, distance, duration and easing.',
        files: [
          {
            path: 'src/ts-default/Animations/AnimatedContent/AnimatedContent.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'AnimatedContent-TS-TW',
        type: 'registry:block',
        title: 'AnimatedContent',
        description:
          'Wrapper that animates any children on scroll or mount with configurable direction, distance, duration and easing.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/AnimatedContent/AnimatedContent.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'AnimatedList-JS-CSS',
        type: 'registry:block',
        title: 'AnimatedList',
        description: 'List items enter with staggered motion variants for polished reveals.',
        files: [
          {
            path: 'src/content/Components/AnimatedList/AnimatedList.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/AnimatedList/AnimatedList.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'AnimatedList-JS-TW',
        type: 'registry:block',
        title: 'AnimatedList',
        description: 'List items enter with staggered motion variants for polished reveals.',
        files: [
          {
            path: 'src/tailwind/Components/AnimatedList/AnimatedList.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'AnimatedList-TS-CSS',
        type: 'registry:block',
        title: 'AnimatedList',
        description: 'List items enter with staggered motion variants for polished reveals.',
        files: [
          {
            path: 'src/ts-default/Components/AnimatedList/AnimatedList.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/AnimatedList/AnimatedList.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'AnimatedList-TS-TW',
        type: 'registry:block',
        title: 'AnimatedList',
        description: 'List items enter with staggered motion variants for polished reveals.',
        files: [
          {
            path: 'src/ts-tailwind/Components/AnimatedList/AnimatedList.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ASCIIText-JS-CSS',
        type: 'registry:block',
        title: 'ASCIIText',
        description: 'Renders text with an animated ASCII background for a retro feel.',
        files: [
          {
            path: 'src/content/TextAnimations/ASCIIText/ASCIIText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ASCIIText-JS-TW',
        type: 'registry:block',
        title: 'ASCIIText',
        description: 'Renders text with an animated ASCII background for a retro feel.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/ASCIIText/ASCIIText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ASCIIText-TS-CSS',
        type: 'registry:block',
        title: 'ASCIIText',
        description: 'Renders text with an animated ASCII background for a retro feel.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/ASCIIText/ASCIIText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ASCIIText-TS-TW',
        type: 'registry:block',
        title: 'ASCIIText',
        description: 'Renders text with an animated ASCII background for a retro feel.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/ASCIIText/ASCIIText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Aurora-JS-CSS',
        type: 'registry:block',
        title: 'Aurora',
        description: 'Flowing aurora gradient background.',
        files: [
          {
            path: 'src/content/Backgrounds/Aurora/Aurora.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Aurora/Aurora.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Aurora-JS-TW',
        type: 'registry:block',
        title: 'Aurora',
        description: 'Flowing aurora gradient background.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Aurora/Aurora.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Aurora-TS-CSS',
        type: 'registry:block',
        title: 'Aurora',
        description: 'Flowing aurora gradient background.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Aurora/Aurora.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Aurora/Aurora.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Aurora-TS-TW',
        type: 'registry:block',
        title: 'Aurora',
        description: 'Flowing aurora gradient background.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Aurora/Aurora.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Balatro-JS-CSS',
        type: 'registry:block',
        title: 'Balatro',
        description: 'The balatro shader, fully customizalbe and interactive.',
        files: [
          {
            path: 'src/content/Backgrounds/Balatro/Balatro.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Balatro/Balatro.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Balatro-JS-TW',
        type: 'registry:block',
        title: 'Balatro',
        description: 'The balatro shader, fully customizalbe and interactive.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Balatro/Balatro.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Balatro-TS-CSS',
        type: 'registry:block',
        title: 'Balatro',
        description: 'The balatro shader, fully customizalbe and interactive.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Balatro/Balatro.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Balatro/Balatro.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Balatro-TS-TW',
        type: 'registry:block',
        title: 'Balatro',
        description: 'The balatro shader, fully customizalbe and interactive.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Balatro/Balatro.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Ballpit-JS-CSS',
        type: 'registry:block',
        title: 'Ballpit',
        description: 'Physics ball pit simulation with bouncing colorful spheres.',
        files: [
          {
            path: 'src/content/Backgrounds/Ballpit/Ballpit.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Ballpit-JS-TW',
        type: 'registry:block',
        title: 'Ballpit',
        description: 'Physics ball pit simulation with bouncing colorful spheres.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Ballpit/Ballpit.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Ballpit-TS-CSS',
        type: 'registry:block',
        title: 'Ballpit',
        description: 'Physics ball pit simulation with bouncing colorful spheres.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Ballpit/Ballpit.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Ballpit-TS-TW',
        type: 'registry:block',
        title: 'Ballpit',
        description: 'Physics ball pit simulation with bouncing colorful spheres.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Ballpit/Ballpit.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Beams-JS-CSS',
        type: 'registry:block',
        title: 'Beams',
        description: 'Crossing animated ribbons with customizable properties.',
        files: [
          {
            path: 'src/content/Backgrounds/Beams/Beams.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Beams/Beams.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Beams-JS-TW',
        type: 'registry:block',
        title: 'Beams',
        description: 'Crossing animated ribbons with customizable properties.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Beams/Beams.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Beams-TS-CSS',
        type: 'registry:block',
        title: 'Beams',
        description: 'Crossing animated ribbons with customizable properties.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Beams/Beams.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Beams/Beams.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Beams-TS-TW',
        type: 'registry:block',
        title: 'Beams',
        description: 'Crossing animated ribbons with customizable properties.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Beams/Beams.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'BlobCursor-JS-CSS',
        type: 'registry:block',
        title: 'BlobCursor',
        description: 'Organic blob cursor that smoothly follows the pointer with inertia and elastic morphing.',
        files: [
          {
            path: 'src/content/Animations/BlobCursor/BlobCursor.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/BlobCursor/BlobCursor.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'BlobCursor-JS-TW',
        type: 'registry:block',
        title: 'BlobCursor',
        description: 'Organic blob cursor that smoothly follows the pointer with inertia and elastic morphing.',
        files: [
          {
            path: 'src/tailwind/Animations/BlobCursor/BlobCursor.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'BlobCursor-TS-CSS',
        type: 'registry:block',
        title: 'BlobCursor',
        description: 'Organic blob cursor that smoothly follows the pointer with inertia and elastic morphing.',
        files: [
          {
            path: 'src/ts-default/Animations/BlobCursor/BlobCursor.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/BlobCursor/BlobCursor.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'BlobCursor-TS-TW',
        type: 'registry:block',
        title: 'BlobCursor',
        description: 'Organic blob cursor that smoothly follows the pointer with inertia and elastic morphing.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/BlobCursor/BlobCursor.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'BlurText-JS-CSS',
        type: 'registry:block',
        title: 'BlurText',
        description: 'Text starts blurred then crisply resolves for a soft-focus reveal effect.',
        files: [
          {
            path: 'src/content/TextAnimations/BlurText/BlurText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'BlurText-JS-TW',
        type: 'registry:block',
        title: 'BlurText',
        description: 'Text starts blurred then crisply resolves for a soft-focus reveal effect.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/BlurText/BlurText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'BlurText-TS-CSS',
        type: 'registry:block',
        title: 'BlurText',
        description: 'Text starts blurred then crisply resolves for a soft-focus reveal effect.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/BlurText/BlurText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'BlurText-TS-TW',
        type: 'registry:block',
        title: 'BlurText',
        description: 'Text starts blurred then crisply resolves for a soft-focus reveal effect.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/BlurText/BlurText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'BounceCards-JS-CSS',
        type: 'registry:block',
        title: 'BounceCards',
        description: 'Cards bounce that bounce in on mount.',
        files: [
          {
            path: 'src/content/Components/BounceCards/BounceCards.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/BounceCards/BounceCards.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'BounceCards-JS-TW',
        type: 'registry:block',
        title: 'BounceCards',
        description: 'Cards bounce that bounce in on mount.',
        files: [
          {
            path: 'src/tailwind/Components/BounceCards/BounceCards.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'BounceCards-TS-CSS',
        type: 'registry:block',
        title: 'BounceCards',
        description: 'Cards bounce that bounce in on mount.',
        files: [
          {
            path: 'src/ts-default/Components/BounceCards/BounceCards.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/BounceCards/BounceCards.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'BounceCards-TS-TW',
        type: 'registry:block',
        title: 'BounceCards',
        description: 'Cards bounce that bounce in on mount.',
        files: [
          {
            path: 'src/ts-tailwind/Components/BounceCards/BounceCards.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'BubbleMenu-JS-CSS',
        type: 'registry:block',
        title: 'BubbleMenu',
        description: 'Floating circular expanding menu with staggered item reveal.',
        files: [
          {
            path: 'src/content/Components/BubbleMenu/BubbleMenu.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/BubbleMenu/BubbleMenu.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'BubbleMenu-JS-TW',
        type: 'registry:block',
        title: 'BubbleMenu',
        description: 'Floating circular expanding menu with staggered item reveal.',
        files: [
          {
            path: 'src/tailwind/Components/BubbleMenu/BubbleMenu.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'BubbleMenu-TS-CSS',
        type: 'registry:block',
        title: 'BubbleMenu',
        description: 'Floating circular expanding menu with staggered item reveal.',
        files: [
          {
            path: 'src/ts-default/Components/BubbleMenu/BubbleMenu.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/BubbleMenu/BubbleMenu.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'BubbleMenu-TS-TW',
        type: 'registry:block',
        title: 'BubbleMenu',
        description: 'Floating circular expanding menu with staggered item reveal.',
        files: [
          {
            path: 'src/ts-tailwind/Components/BubbleMenu/BubbleMenu.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'CardNav-JS-CSS',
        type: 'registry:block',
        title: 'CardNav',
        description: 'Expandable navigation bar with card panels revealing nested links.',
        files: [
          {
            path: 'src/content/Components/CardNav/CardNav.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/CardNav/CardNav.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'CardNav-JS-TW',
        type: 'registry:block',
        title: 'CardNav',
        description: 'Expandable navigation bar with card panels revealing nested links.',
        files: [
          {
            path: 'src/tailwind/Components/CardNav/CardNav.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'CardNav-TS-CSS',
        type: 'registry:block',
        title: 'CardNav',
        description: 'Expandable navigation bar with card panels revealing nested links.',
        files: [
          {
            path: 'src/ts-default/Components/CardNav/CardNav.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/CardNav/CardNav.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'CardNav-TS-TW',
        type: 'registry:block',
        title: 'CardNav',
        description: 'Expandable navigation bar with card panels revealing nested links.',
        files: [
          {
            path: 'src/ts-tailwind/Components/CardNav/CardNav.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'CardSwap-JS-CSS',
        type: 'registry:block',
        title: 'CardSwap',
        description: 'Cards animate position swapping with smooth layout transitions.',
        files: [
          {
            path: 'src/content/Components/CardSwap/CardSwap.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/CardSwap/CardSwap.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'CardSwap-JS-TW',
        type: 'registry:block',
        title: 'CardSwap',
        description: 'Cards animate position swapping with smooth layout transitions.',
        files: [
          {
            path: 'src/tailwind/Components/CardSwap/CardSwap.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'CardSwap-TS-CSS',
        type: 'registry:block',
        title: 'CardSwap',
        description: 'Cards animate position swapping with smooth layout transitions.',
        files: [
          {
            path: 'src/ts-default/Components/CardSwap/CardSwap.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/CardSwap/CardSwap.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'CardSwap-TS-TW',
        type: 'registry:block',
        title: 'CardSwap',
        description: 'Cards animate position swapping with smooth layout transitions.',
        files: [
          {
            path: 'src/ts-tailwind/Components/CardSwap/CardSwap.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Carousel-JS-CSS',
        type: 'registry:block',
        title: 'Carousel',
        description: 'Responsive carousel with touch gestures, looping and transitions.',
        files: [
          {
            path: 'src/content/Components/Carousel/Carousel.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/Carousel/Carousel.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Carousel-JS-TW',
        type: 'registry:block',
        title: 'Carousel',
        description: 'Responsive carousel with touch gestures, looping and transitions.',
        files: [
          {
            path: 'src/tailwind/Components/Carousel/Carousel.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Carousel-TS-CSS',
        type: 'registry:block',
        title: 'Carousel',
        description: 'Responsive carousel with touch gestures, looping and transitions.',
        files: [
          {
            path: 'src/ts-default/Components/Carousel/Carousel.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/Carousel/Carousel.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Carousel-TS-TW',
        type: 'registry:block',
        title: 'Carousel',
        description: 'Responsive carousel with touch gestures, looping and transitions.',
        files: [
          {
            path: 'src/ts-tailwind/Components/Carousel/Carousel.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ChromaGrid-JS-CSS',
        type: 'registry:block',
        title: 'ChromaGrid',
        description: 'A responsive grid of grayscale tiles. Hovering the grid reaveals their colors.',
        files: [
          {
            path: 'src/content/Components/ChromaGrid/ChromaGrid.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/ChromaGrid/ChromaGrid.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ChromaGrid-JS-TW',
        type: 'registry:block',
        title: 'ChromaGrid',
        description: 'A responsive grid of grayscale tiles. Hovering the grid reaveals their colors.',
        files: [
          {
            path: 'src/tailwind/Components/ChromaGrid/ChromaGrid.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ChromaGrid-TS-CSS',
        type: 'registry:block',
        title: 'ChromaGrid',
        description: 'A responsive grid of grayscale tiles. Hovering the grid reaveals their colors.',
        files: [
          {
            path: 'src/ts-default/Components/ChromaGrid/ChromaGrid.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/ChromaGrid/ChromaGrid.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ChromaGrid-TS-TW',
        type: 'registry:block',
        title: 'ChromaGrid',
        description: 'A responsive grid of grayscale tiles. Hovering the grid reaveals their colors.',
        files: [
          {
            path: 'src/ts-tailwind/Components/ChromaGrid/ChromaGrid.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'CircularGallery-JS-CSS',
        type: 'registry:block',
        title: 'CircularGallery',
        description: 'Circular orbit gallery rotating images.',
        files: [
          {
            path: 'src/content/Components/CircularGallery/CircularGallery.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/CircularGallery/CircularGallery.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'CircularGallery-JS-TW',
        type: 'registry:block',
        title: 'CircularGallery',
        description: 'Circular orbit gallery rotating images.',
        files: [
          {
            path: 'src/tailwind/Components/CircularGallery/CircularGallery.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'CircularGallery-TS-CSS',
        type: 'registry:block',
        title: 'CircularGallery',
        description: 'Circular orbit gallery rotating images.',
        files: [
          {
            path: 'src/ts-default/Components/CircularGallery/CircularGallery.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/CircularGallery/CircularGallery.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'CircularGallery-TS-TW',
        type: 'registry:block',
        title: 'CircularGallery',
        description: 'Circular orbit gallery rotating images.',
        files: [
          {
            path: 'src/ts-tailwind/Components/CircularGallery/CircularGallery.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'CircularText-JS-CSS',
        type: 'registry:block',
        title: 'CircularText',
        description: 'Layouts characters around a circle with optional rotation animation.',
        files: [
          {
            path: 'src/content/TextAnimations/CircularText/CircularText.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/CircularText/CircularText.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'CircularText-JS-TW',
        type: 'registry:block',
        title: 'CircularText',
        description: 'Layouts characters around a circle with optional rotation animation.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/CircularText/CircularText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'CircularText-TS-CSS',
        type: 'registry:block',
        title: 'CircularText',
        description: 'Layouts characters around a circle with optional rotation animation.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/CircularText/CircularText.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/CircularText/CircularText.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'CircularText-TS-TW',
        type: 'registry:block',
        title: 'CircularText',
        description: 'Layouts characters around a circle with optional rotation animation.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/CircularText/CircularText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ClickSpark-JS-CSS',
        type: 'registry:block',
        title: 'ClickSpark',
        description: 'Creates particle spark bursts at click position.',
        files: [
          {
            path: 'src/content/Animations/ClickSpark/ClickSpark.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ClickSpark-JS-TW',
        type: 'registry:block',
        title: 'ClickSpark',
        description: 'Creates particle spark bursts at click position.',
        files: [
          {
            path: 'src/tailwind/Animations/ClickSpark/ClickSpark.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ClickSpark-TS-CSS',
        type: 'registry:block',
        title: 'ClickSpark',
        description: 'Creates particle spark bursts at click position.',
        files: [
          {
            path: 'src/ts-default/Animations/ClickSpark/ClickSpark.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ClickSpark-TS-TW',
        type: 'registry:block',
        title: 'ClickSpark',
        description: 'Creates particle spark bursts at click position.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/ClickSpark/ClickSpark.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ColorBends-JS-CSS',
        type: 'registry:block',
        title: 'ColorBends',
        description: 'Vibrant color bends with smooth flowing animation.',
        files: [
          {
            path: 'src/content/Backgrounds/ColorBends/ColorBends.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/ColorBends/ColorBends.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ColorBends-JS-TW',
        type: 'registry:block',
        title: 'ColorBends',
        description: 'Vibrant color bends with smooth flowing animation.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/ColorBends/ColorBends.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ColorBends-TS-CSS',
        type: 'registry:block',
        title: 'ColorBends',
        description: 'Vibrant color bends with smooth flowing animation.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/ColorBends/ColorBends.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/ColorBends/ColorBends.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ColorBends-TS-TW',
        type: 'registry:block',
        title: 'ColorBends',
        description: 'Vibrant color bends with smooth flowing animation.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/ColorBends/ColorBends.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Counter-JS-CSS',
        type: 'registry:block',
        title: 'Counter',
        description: 'Flexible animated counter supporting increments + easing.',
        files: [
          {
            path: 'src/content/Components/Counter/Counter.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/Counter/Counter.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Counter-JS-TW',
        type: 'registry:block',
        title: 'Counter',
        description: 'Flexible animated counter supporting increments + easing.',
        files: [
          {
            path: 'src/tailwind/Components/Counter/Counter.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Counter-TS-CSS',
        type: 'registry:block',
        title: 'Counter',
        description: 'Flexible animated counter supporting increments + easing.',
        files: [
          {
            path: 'src/ts-default/Components/Counter/Counter.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/Counter/Counter.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Counter-TS-TW',
        type: 'registry:block',
        title: 'Counter',
        description: 'Flexible animated counter supporting increments + easing.',
        files: [
          {
            path: 'src/ts-tailwind/Components/Counter/Counter.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'CountUp-JS-CSS',
        type: 'registry:block',
        title: 'CountUp',
        description: 'Animated number counter supporting formatting and decimals.',
        files: [
          {
            path: 'src/content/TextAnimations/CountUp/CountUp.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'CountUp-JS-TW',
        type: 'registry:block',
        title: 'CountUp',
        description: 'Animated number counter supporting formatting and decimals.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/CountUp/CountUp.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'CountUp-TS-CSS',
        type: 'registry:block',
        title: 'CountUp',
        description: 'Animated number counter supporting formatting and decimals.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/CountUp/CountUp.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'CountUp-TS-TW',
        type: 'registry:block',
        title: 'CountUp',
        description: 'Animated number counter supporting formatting and decimals.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/CountUp/CountUp.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Crosshair-JS-CSS',
        type: 'registry:block',
        title: 'Crosshair',
        description: 'Custom crosshair cursor with tracking, and link hover effects.',
        files: [
          {
            path: 'src/content/Animations/Crosshair/Crosshair.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Crosshair-JS-TW',
        type: 'registry:block',
        title: 'Crosshair',
        description: 'Custom crosshair cursor with tracking, and link hover effects.',
        files: [
          {
            path: 'src/tailwind/Animations/Crosshair/Crosshair.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Crosshair-TS-CSS',
        type: 'registry:block',
        title: 'Crosshair',
        description: 'Custom crosshair cursor with tracking, and link hover effects.',
        files: [
          {
            path: 'src/ts-default/Animations/Crosshair/Crosshair.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Crosshair-TS-TW',
        type: 'registry:block',
        title: 'Crosshair',
        description: 'Custom crosshair cursor with tracking, and link hover effects.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/Crosshair/Crosshair.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Cubes-JS-CSS',
        type: 'registry:block',
        title: 'Cubes',
        description: '3D rotating cube cluster. Supports auto-rotation or hover interaction.',
        files: [
          {
            path: 'src/content/Animations/Cubes/Cubes.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/Cubes/Cubes.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Cubes-JS-TW',
        type: 'registry:block',
        title: 'Cubes',
        description: '3D rotating cube cluster. Supports auto-rotation or hover interaction.',
        files: [
          {
            path: 'src/tailwind/Animations/Cubes/Cubes.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Cubes-TS-CSS',
        type: 'registry:block',
        title: 'Cubes',
        description: '3D rotating cube cluster. Supports auto-rotation or hover interaction.',
        files: [
          {
            path: 'src/ts-default/Animations/Cubes/Cubes.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/Cubes/Cubes.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Cubes-TS-TW',
        type: 'registry:block',
        title: 'Cubes',
        description: '3D rotating cube cluster. Supports auto-rotation or hover interaction.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/Cubes/Cubes.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'CurvedLoop-JS-CSS',
        type: 'registry:block',
        title: 'CurvedLoop',
        description: 'Flowing looping text path along a customizable curve with drag interaction.',
        files: [
          {
            path: 'src/content/TextAnimations/CurvedLoop/CurvedLoop.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/CurvedLoop/CurvedLoop.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'CurvedLoop-JS-TW',
        type: 'registry:block',
        title: 'CurvedLoop',
        description: 'Flowing looping text path along a customizable curve with drag interaction.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/CurvedLoop/CurvedLoop.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'CurvedLoop-TS-CSS',
        type: 'registry:block',
        title: 'CurvedLoop',
        description: 'Flowing looping text path along a customizable curve with drag interaction.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/CurvedLoop/CurvedLoop.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/CurvedLoop/CurvedLoop.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'CurvedLoop-TS-TW',
        type: 'registry:block',
        title: 'CurvedLoop',
        description: 'Flowing looping text path along a customizable curve with drag interaction.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/CurvedLoop/CurvedLoop.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'DarkVeil-JS-CSS',
        type: 'registry:block',
        title: 'DarkVeil',
        description: 'Subtle dark background with a smooth animation and postprocessing.',
        files: [
          {
            path: 'src/content/Backgrounds/DarkVeil/DarkVeil.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/DarkVeil/DarkVeil.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'DarkVeil-JS-TW',
        type: 'registry:block',
        title: 'DarkVeil',
        description: 'Subtle dark background with a smooth animation and postprocessing.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/DarkVeil/DarkVeil.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'DarkVeil-TS-CSS',
        type: 'registry:block',
        title: 'DarkVeil',
        description: 'Subtle dark background with a smooth animation and postprocessing.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/DarkVeil/DarkVeil.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/DarkVeil/DarkVeil.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'DarkVeil-TS-TW',
        type: 'registry:block',
        title: 'DarkVeil',
        description: 'Subtle dark background with a smooth animation and postprocessing.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/DarkVeil/DarkVeil.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'DecayCard-JS-CSS',
        type: 'registry:block',
        title: 'DecayCard',
        description: 'Hover parallax effect that disintegrates the content of a card.',
        files: [
          {
            path: 'src/content/Components/DecayCard/DecayCard.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/DecayCard/DecayCard.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'DecayCard-JS-TW',
        type: 'registry:block',
        title: 'DecayCard',
        description: 'Hover parallax effect that disintegrates the content of a card.',
        files: [
          {
            path: 'src/tailwind/Components/DecayCard/DecayCard.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'DecayCard-TS-CSS',
        type: 'registry:block',
        title: 'DecayCard',
        description: 'Hover parallax effect that disintegrates the content of a card.',
        files: [
          {
            path: 'src/ts-default/Components/DecayCard/DecayCard.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/DecayCard/DecayCard.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'DecayCard-TS-TW',
        type: 'registry:block',
        title: 'DecayCard',
        description: 'Hover parallax effect that disintegrates the content of a card.',
        files: [
          {
            path: 'src/ts-tailwind/Components/DecayCard/DecayCard.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'DecryptedText-JS-CSS',
        type: 'registry:block',
        title: 'DecryptedText',
        description: 'Hacker-style decryption cycling random glyphs until resolving to real text.',
        files: [
          {
            path: 'src/content/TextAnimations/DecryptedText/DecryptedText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'DecryptedText-JS-TW',
        type: 'registry:block',
        title: 'DecryptedText',
        description: 'Hacker-style decryption cycling random glyphs until resolving to real text.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/DecryptedText/DecryptedText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'DecryptedText-TS-CSS',
        type: 'registry:block',
        title: 'DecryptedText',
        description: 'Hacker-style decryption cycling random glyphs until resolving to real text.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/DecryptedText/DecryptedText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'DecryptedText-TS-TW',
        type: 'registry:block',
        title: 'DecryptedText',
        description: 'Hacker-style decryption cycling random glyphs until resolving to real text.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/DecryptedText/DecryptedText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Dither-JS-CSS',
        type: 'registry:block',
        title: 'Dither',
        description: 'Retro dithered noise shader background.',
        files: [
          {
            path: 'src/content/Backgrounds/Dither/Dither.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Dither/Dither.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Dither-JS-TW',
        type: 'registry:block',
        title: 'Dither',
        description: 'Retro dithered noise shader background.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Dither/Dither.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Dither-TS-CSS',
        type: 'registry:block',
        title: 'Dither',
        description: 'Retro dithered noise shader background.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Dither/Dither.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Dither/Dither.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Dither-TS-TW',
        type: 'registry:block',
        title: 'Dither',
        description: 'Retro dithered noise shader background.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Dither/Dither.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Dock-JS-CSS',
        type: 'registry:block',
        title: 'Dock',
        description: 'macOS style magnifying dock with proximity scaling of icons.',
        files: [
          {
            path: 'src/content/Components/Dock/Dock.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/Dock/Dock.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Dock-JS-TW',
        type: 'registry:block',
        title: 'Dock',
        description: 'macOS style magnifying dock with proximity scaling of icons.',
        files: [
          {
            path: 'src/tailwind/Components/Dock/Dock.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Dock-TS-CSS',
        type: 'registry:block',
        title: 'Dock',
        description: 'macOS style magnifying dock with proximity scaling of icons.',
        files: [
          {
            path: 'src/ts-default/Components/Dock/Dock.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/Dock/Dock.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Dock-TS-TW',
        type: 'registry:block',
        title: 'Dock',
        description: 'macOS style magnifying dock with proximity scaling of icons.',
        files: [
          {
            path: 'src/ts-tailwind/Components/Dock/Dock.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'DomeGallery-JS-CSS',
        type: 'registry:block',
        title: 'DomeGallery',
        description: 'Immersive 3D dome gallery projecting images on a hemispheric surface.',
        files: [
          {
            path: 'src/content/Components/DomeGallery/DomeGallery.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/DomeGallery/DomeGallery.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'DomeGallery-JS-TW',
        type: 'registry:block',
        title: 'DomeGallery',
        description: 'Immersive 3D dome gallery projecting images on a hemispheric surface.',
        files: [
          {
            path: 'src/tailwind/Components/DomeGallery/DomeGallery.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'DomeGallery-TS-CSS',
        type: 'registry:block',
        title: 'DomeGallery',
        description: 'Immersive 3D dome gallery projecting images on a hemispheric surface.',
        files: [
          {
            path: 'src/ts-default/Components/DomeGallery/DomeGallery.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/DomeGallery/DomeGallery.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'DomeGallery-TS-TW',
        type: 'registry:block',
        title: 'DomeGallery',
        description: 'Immersive 3D dome gallery projecting images on a hemispheric surface.',
        files: [
          {
            path: 'src/ts-tailwind/Components/DomeGallery/DomeGallery.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'DotGrid-JS-CSS',
        type: 'registry:block',
        title: 'DotGrid',
        description: 'Animated dot grid with cursor interactions.',
        files: [
          {
            path: 'src/content/Backgrounds/DotGrid/DotGrid.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/DotGrid/DotGrid.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'DotGrid-JS-TW',
        type: 'registry:block',
        title: 'DotGrid',
        description: 'Animated dot grid with cursor interactions.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/DotGrid/DotGrid.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'DotGrid-TS-CSS',
        type: 'registry:block',
        title: 'DotGrid',
        description: 'Animated dot grid with cursor interactions.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/DotGrid/DotGrid.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/DotGrid/DotGrid.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'DotGrid-TS-TW',
        type: 'registry:block',
        title: 'DotGrid',
        description: 'Animated dot grid with cursor interactions.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/DotGrid/DotGrid.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ElasticSlider-JS-CSS',
        type: 'registry:block',
        title: 'ElasticSlider',
        description: 'Slider handle stretches elastically then snaps with spring physics.',
        files: [
          {
            path: 'src/content/Components/ElasticSlider/ElasticSlider.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/ElasticSlider/ElasticSlider.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ElasticSlider-JS-TW',
        type: 'registry:block',
        title: 'ElasticSlider',
        description: 'Slider handle stretches elastically then snaps with spring physics.',
        files: [
          {
            path: 'src/tailwind/Components/ElasticSlider/ElasticSlider.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ElasticSlider-TS-CSS',
        type: 'registry:block',
        title: 'ElasticSlider',
        description: 'Slider handle stretches elastically then snaps with spring physics.',
        files: [
          {
            path: 'src/ts-default/Components/ElasticSlider/ElasticSlider.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/ElasticSlider/ElasticSlider.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ElasticSlider-TS-TW',
        type: 'registry:block',
        title: 'ElasticSlider',
        description: 'Slider handle stretches elastically then snaps with spring physics.',
        files: [
          {
            path: 'src/ts-tailwind/Components/ElasticSlider/ElasticSlider.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ElectricBorder-JS-CSS',
        type: 'registry:block',
        title: 'ElectricBorder',
        description: 'Jittery electric energy border with animated arcs, glow and adjustable intensity.',
        files: [
          {
            path: 'src/content/Animations/ElectricBorder/ElectricBorder.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/ElectricBorder/ElectricBorder.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ElectricBorder-JS-TW',
        type: 'registry:block',
        title: 'ElectricBorder',
        description: 'Jittery electric energy border with animated arcs, glow and adjustable intensity.',
        files: [
          {
            path: 'src/tailwind/Animations/ElectricBorder/ElectricBorder.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ElectricBorder-TS-CSS',
        type: 'registry:block',
        title: 'ElectricBorder',
        description: 'Jittery electric energy border with animated arcs, glow and adjustable intensity.',
        files: [
          {
            path: 'src/ts-default/Animations/ElectricBorder/ElectricBorder.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/ElectricBorder/ElectricBorder.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ElectricBorder-TS-TW',
        type: 'registry:block',
        title: 'ElectricBorder',
        description: 'Jittery electric energy border with animated arcs, glow and adjustable intensity.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/ElectricBorder/ElectricBorder.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FadeContent-JS-CSS',
        type: 'registry:block',
        title: 'FadeContent',
        description: 'Simple directional fade / slide entrance wrapper with threshold-based activation.',
        files: [
          {
            path: 'src/content/Animations/FadeContent/FadeContent.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FadeContent-JS-TW',
        type: 'registry:block',
        title: 'FadeContent',
        description: 'Simple directional fade / slide entrance wrapper with threshold-based activation.',
        files: [
          {
            path: 'src/tailwind/Animations/FadeContent/FadeContent.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FadeContent-TS-CSS',
        type: 'registry:block',
        title: 'FadeContent',
        description: 'Simple directional fade / slide entrance wrapper with threshold-based activation.',
        files: [
          {
            path: 'src/ts-default/Animations/FadeContent/FadeContent.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FadeContent-TS-TW',
        type: 'registry:block',
        title: 'FadeContent',
        description: 'Simple directional fade / slide entrance wrapper with threshold-based activation.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/FadeContent/FadeContent.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FallingText-JS-CSS',
        type: 'registry:block',
        title: 'FallingText',
        description: 'Characters fall with gravity + bounce creating a playful entrance.',
        files: [
          {
            path: 'src/content/TextAnimations/FallingText/FallingText.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/FallingText/FallingText.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'FallingText-JS-TW',
        type: 'registry:block',
        title: 'FallingText',
        description: 'Characters fall with gravity + bounce creating a playful entrance.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/FallingText/FallingText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FallingText-TS-CSS',
        type: 'registry:block',
        title: 'FallingText',
        description: 'Characters fall with gravity + bounce creating a playful entrance.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/FallingText/FallingText.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/FallingText/FallingText.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'FallingText-TS-TW',
        type: 'registry:block',
        title: 'FallingText',
        description: 'Characters fall with gravity + bounce creating a playful entrance.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/FallingText/FallingText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FaultyTerminal-JS-CSS',
        type: 'registry:block',
        title: 'FaultyTerminal',
        description: 'Terminal CRT scanline squares effect with flicker + noise.',
        files: [
          {
            path: 'src/content/Backgrounds/FaultyTerminal/FaultyTerminal.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/FaultyTerminal/FaultyTerminal.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'FaultyTerminal-JS-TW',
        type: 'registry:block',
        title: 'FaultyTerminal',
        description: 'Terminal CRT scanline squares effect with flicker + noise.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/FaultyTerminal/FaultyTerminal.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FaultyTerminal-TS-CSS',
        type: 'registry:block',
        title: 'FaultyTerminal',
        description: 'Terminal CRT scanline squares effect with flicker + noise.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/FaultyTerminal/FaultyTerminal.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/FaultyTerminal/FaultyTerminal.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'FaultyTerminal-TS-TW',
        type: 'registry:block',
        title: 'FaultyTerminal',
        description: 'Terminal CRT scanline squares effect with flicker + noise.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/FaultyTerminal/FaultyTerminal.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FlowingMenu-JS-CSS',
        type: 'registry:block',
        title: 'FlowingMenu',
        description: 'Liquid flowing active indicator glides between menu items.',
        files: [
          {
            path: 'src/content/Components/FlowingMenu/FlowingMenu.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/FlowingMenu/FlowingMenu.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'FlowingMenu-JS-TW',
        type: 'registry:block',
        title: 'FlowingMenu',
        description: 'Liquid flowing active indicator glides between menu items.',
        files: [
          {
            path: 'src/tailwind/Components/FlowingMenu/FlowingMenu.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FlowingMenu-TS-CSS',
        type: 'registry:block',
        title: 'FlowingMenu',
        description: 'Liquid flowing active indicator glides between menu items.',
        files: [
          {
            path: 'src/ts-default/Components/FlowingMenu/FlowingMenu.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/FlowingMenu/FlowingMenu.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'FlowingMenu-TS-TW',
        type: 'registry:block',
        title: 'FlowingMenu',
        description: 'Liquid flowing active indicator glides between menu items.',
        files: [
          {
            path: 'src/ts-tailwind/Components/FlowingMenu/FlowingMenu.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FluidGlass-JS-CSS',
        type: 'registry:block',
        title: 'FluidGlass',
        description: 'Glassmorphism container with animated liquid distortion refraction.',
        files: [
          {
            path: 'src/content/Components/FluidGlass/FluidGlass.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FluidGlass-JS-TW',
        type: 'registry:block',
        title: 'FluidGlass',
        description: 'Glassmorphism container with animated liquid distortion refraction.',
        files: [
          {
            path: 'src/tailwind/Components/FluidGlass/FluidGlass.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FluidGlass-TS-CSS',
        type: 'registry:block',
        title: 'FluidGlass',
        description: 'Glassmorphism container with animated liquid distortion refraction.',
        files: [
          {
            path: 'src/ts-default/Components/FluidGlass/FluidGlass.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FluidGlass-TS-TW',
        type: 'registry:block',
        title: 'FluidGlass',
        description: 'Glassmorphism container with animated liquid distortion refraction.',
        files: [
          {
            path: 'src/ts-tailwind/Components/FluidGlass/FluidGlass.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FlyingPosters-JS-CSS',
        type: 'registry:block',
        title: 'FlyingPosters',
        description: '3D posters rotate on scroll infinitely.',
        files: [
          {
            path: 'src/content/Components/FlyingPosters/FlyingPosters.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/FlyingPosters/FlyingPosters.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'FlyingPosters-JS-TW',
        type: 'registry:block',
        title: 'FlyingPosters',
        description: '3D posters rotate on scroll infinitely.',
        files: [
          {
            path: 'src/tailwind/Components/FlyingPosters/FlyingPosters.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FlyingPosters-TS-CSS',
        type: 'registry:block',
        title: 'FlyingPosters',
        description: '3D posters rotate on scroll infinitely.',
        files: [
          {
            path: 'src/ts-default/Components/FlyingPosters/FlyingPosters.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/FlyingPosters/FlyingPosters.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'FlyingPosters-TS-TW',
        type: 'registry:block',
        title: 'FlyingPosters',
        description: '3D posters rotate on scroll infinitely.',
        files: [
          {
            path: 'src/ts-tailwind/Components/FlyingPosters/FlyingPosters.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Folder-JS-CSS',
        type: 'registry:block',
        title: 'Folder',
        description: 'Interactive folder opens to reveal nested content smooth motion.',
        files: [
          {
            path: 'src/content/Components/Folder/Folder.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/Folder/Folder.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Folder-JS-TW',
        type: 'registry:block',
        title: 'Folder',
        description: 'Interactive folder opens to reveal nested content smooth motion.',
        files: [
          {
            path: 'src/tailwind/Components/Folder/Folder.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Folder-TS-CSS',
        type: 'registry:block',
        title: 'Folder',
        description: 'Interactive folder opens to reveal nested content smooth motion.',
        files: [
          {
            path: 'src/ts-default/Components/Folder/Folder.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/Folder/Folder.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Folder-TS-TW',
        type: 'registry:block',
        title: 'Folder',
        description: 'Interactive folder opens to reveal nested content smooth motion.',
        files: [
          {
            path: 'src/ts-tailwind/Components/Folder/Folder.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FuzzyText-JS-CSS',
        type: 'registry:block',
        title: 'FuzzyText',
        description: 'Vibrating fuzzy text with controllable hover intensity.',
        files: [
          {
            path: 'src/content/TextAnimations/FuzzyText/FuzzyText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FuzzyText-JS-TW',
        type: 'registry:block',
        title: 'FuzzyText',
        description: 'Vibrating fuzzy text with controllable hover intensity.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/FuzzyText/FuzzyText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FuzzyText-TS-CSS',
        type: 'registry:block',
        title: 'FuzzyText',
        description: 'Vibrating fuzzy text with controllable hover intensity.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/FuzzyText/FuzzyText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'FuzzyText-TS-TW',
        type: 'registry:block',
        title: 'FuzzyText',
        description: 'Vibrating fuzzy text with controllable hover intensity.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/FuzzyText/FuzzyText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Galaxy-JS-CSS',
        type: 'registry:block',
        title: 'Galaxy',
        description: 'Parallax realistic starfield with pointer interactions.',
        files: [
          {
            path: 'src/content/Backgrounds/Galaxy/Galaxy.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Galaxy/Galaxy.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Galaxy-JS-TW',
        type: 'registry:block',
        title: 'Galaxy',
        description: 'Parallax realistic starfield with pointer interactions.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Galaxy/Galaxy.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Galaxy-TS-CSS',
        type: 'registry:block',
        title: 'Galaxy',
        description: 'Parallax realistic starfield with pointer interactions.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Galaxy/Galaxy.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Galaxy/Galaxy.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Galaxy-TS-TW',
        type: 'registry:block',
        title: 'Galaxy',
        description: 'Parallax realistic starfield with pointer interactions.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Galaxy/Galaxy.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GhostCursor-JS-CSS',
        type: 'registry:block',
        title: 'GhostCursor',
        description: 'Semi-transparent ghost cursor that smoothly follows the real cursor with a trailing effect.',
        files: [
          {
            path: 'src/content/Animations/GhostCursor/GhostCursor.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/GhostCursor/GhostCursor.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GhostCursor-JS-TW',
        type: 'registry:block',
        title: 'GhostCursor',
        description: 'Semi-transparent ghost cursor that smoothly follows the real cursor with a trailing effect.',
        files: [
          {
            path: 'src/tailwind/Animations/GhostCursor/GhostCursor.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GhostCursor-TS-CSS',
        type: 'registry:block',
        title: 'GhostCursor',
        description: 'Semi-transparent ghost cursor that smoothly follows the real cursor with a trailing effect.',
        files: [
          {
            path: 'src/ts-default/Animations/GhostCursor/GhostCursor.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/GhostCursor/GhostCursor.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GhostCursor-TS-TW',
        type: 'registry:block',
        title: 'GhostCursor',
        description: 'Semi-transparent ghost cursor that smoothly follows the real cursor with a trailing effect.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/GhostCursor/GhostCursor.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GlareHover-JS-CSS',
        type: 'registry:block',
        title: 'GlareHover',
        description: 'Adds a realistic moving glare highlight on hover over any element.',
        files: [
          {
            path: 'src/content/Animations/GlareHover/GlareHover.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/GlareHover/GlareHover.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GlareHover-JS-TW',
        type: 'registry:block',
        title: 'GlareHover',
        description: 'Adds a realistic moving glare highlight on hover over any element.',
        files: [
          {
            path: 'src/tailwind/Animations/GlareHover/GlareHover.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GlareHover-TS-CSS',
        type: 'registry:block',
        title: 'GlareHover',
        description: 'Adds a realistic moving glare highlight on hover over any element.',
        files: [
          {
            path: 'src/ts-default/Animations/GlareHover/GlareHover.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/GlareHover/GlareHover.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GlareHover-TS-TW',
        type: 'registry:block',
        title: 'GlareHover',
        description: 'Adds a realistic moving glare highlight on hover over any element.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/GlareHover/GlareHover.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GlassIcons-JS-CSS',
        type: 'registry:block',
        title: 'GlassIcons',
        description: 'Icon set styled with frosted glass blur.',
        files: [
          {
            path: 'src/content/Components/GlassIcons/GlassIcons.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/GlassIcons/GlassIcons.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GlassIcons-JS-TW',
        type: 'registry:block',
        title: 'GlassIcons',
        description: 'Icon set styled with frosted glass blur.',
        files: [
          {
            path: 'src/tailwind/Components/GlassIcons/GlassIcons.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GlassIcons-TS-CSS',
        type: 'registry:block',
        title: 'GlassIcons',
        description: 'Icon set styled with frosted glass blur.',
        files: [
          {
            path: 'src/ts-default/Components/GlassIcons/GlassIcons.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/GlassIcons/GlassIcons.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GlassIcons-TS-TW',
        type: 'registry:block',
        title: 'GlassIcons',
        description: 'Icon set styled with frosted glass blur.',
        files: [
          {
            path: 'src/ts-tailwind/Components/GlassIcons/GlassIcons.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GlassSurface-JS-CSS',
        type: 'registry:block',
        title: 'GlassSurface',
        description: 'Advanced Apple-style glass surface with real-time distortion + lighting.',
        files: [
          {
            path: 'src/content/Components/GlassSurface/GlassSurface.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/GlassSurface/GlassSurface.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GlassSurface-JS-TW',
        type: 'registry:block',
        title: 'GlassSurface',
        description: 'Advanced Apple-style glass surface with real-time distortion + lighting.',
        files: [
          {
            path: 'src/tailwind/Components/GlassSurface/GlassSurface.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GlassSurface-TS-CSS',
        type: 'registry:block',
        title: 'GlassSurface',
        description: 'Advanced Apple-style glass surface with real-time distortion + lighting.',
        files: [
          {
            path: 'src/ts-default/Components/GlassSurface/GlassSurface.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/GlassSurface/GlassSurface.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GlassSurface-TS-TW',
        type: 'registry:block',
        title: 'GlassSurface',
        description: 'Advanced Apple-style glass surface with real-time distortion + lighting.',
        files: [
          {
            path: 'src/ts-tailwind/Components/GlassSurface/GlassSurface.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GlitchText-JS-CSS',
        type: 'registry:block',
        title: 'GlitchText',
        description: 'RGB split and distortion glitch effect with jitter effects.',
        files: [
          {
            path: 'src/content/TextAnimations/GlitchText/GlitchText.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/GlitchText/GlitchText.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GlitchText-JS-TW',
        type: 'registry:block',
        title: 'GlitchText',
        description: 'RGB split and distortion glitch effect with jitter effects.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/GlitchText/GlitchText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GlitchText-TS-CSS',
        type: 'registry:block',
        title: 'GlitchText',
        description: 'RGB split and distortion glitch effect with jitter effects.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/GlitchText/GlitchText.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/GlitchText/GlitchText.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GlitchText-TS-TW',
        type: 'registry:block',
        title: 'GlitchText',
        description: 'RGB split and distortion glitch effect with jitter effects.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/GlitchText/GlitchText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GooeyNav-JS-CSS',
        type: 'registry:block',
        title: 'GooeyNav',
        description: 'Navigation indicator morphs with gooey blob transitions between items.',
        files: [
          {
            path: 'src/content/Components/GooeyNav/GooeyNav.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/GooeyNav/GooeyNav.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GooeyNav-JS-TW',
        type: 'registry:block',
        title: 'GooeyNav',
        description: 'Navigation indicator morphs with gooey blob transitions between items.',
        files: [
          {
            path: 'src/tailwind/Components/GooeyNav/GooeyNav.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GooeyNav-TS-CSS',
        type: 'registry:block',
        title: 'GooeyNav',
        description: 'Navigation indicator morphs with gooey blob transitions between items.',
        files: [
          {
            path: 'src/ts-default/Components/GooeyNav/GooeyNav.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/GooeyNav/GooeyNav.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GooeyNav-TS-TW',
        type: 'registry:block',
        title: 'GooeyNav',
        description: 'Navigation indicator morphs with gooey blob transitions between items.',
        files: [
          {
            path: 'src/ts-tailwind/Components/GooeyNav/GooeyNav.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GradientBlinds-JS-CSS',
        type: 'registry:block',
        title: 'GradientBlinds',
        description: 'Layered gradient blinds with spotlight and noise distortion.',
        files: [
          {
            path: 'src/content/Backgrounds/GradientBlinds/GradientBlinds.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/GradientBlinds/GradientBlinds.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GradientBlinds-JS-TW',
        type: 'registry:block',
        title: 'GradientBlinds',
        description: 'Layered gradient blinds with spotlight and noise distortion.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/GradientBlinds/GradientBlinds.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GradientBlinds-TS-CSS',
        type: 'registry:block',
        title: 'GradientBlinds',
        description: 'Layered gradient blinds with spotlight and noise distortion.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/GradientBlinds/GradientBlinds.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/GradientBlinds/GradientBlinds.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GradientBlinds-TS-TW',
        type: 'registry:block',
        title: 'GradientBlinds',
        description: 'Layered gradient blinds with spotlight and noise distortion.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/GradientBlinds/GradientBlinds.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GradientText-JS-CSS',
        type: 'registry:block',
        title: 'GradientText',
        description: 'Animated gradient sweep across live text with speed and color control.',
        files: [
          {
            path: 'src/content/TextAnimations/GradientText/GradientText.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/GradientText/GradientText.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GradientText-JS-TW',
        type: 'registry:block',
        title: 'GradientText',
        description: 'Animated gradient sweep across live text with speed and color control.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/GradientText/GradientText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GradientText-TS-CSS',
        type: 'registry:block',
        title: 'GradientText',
        description: 'Animated gradient sweep across live text with speed and color control.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/GradientText/GradientText.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/GradientText/GradientText.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GradientText-TS-TW',
        type: 'registry:block',
        title: 'GradientText',
        description: 'Animated gradient sweep across live text with speed and color control.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/GradientText/GradientText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GradualBlur-JS-CSS',
        type: 'registry:block',
        title: 'GradualBlur',
        description: 'Progressively un-blurs content based on scroll or trigger creating a cinematic reveal.',
        files: [
          {
            path: 'src/content/Animations/GradualBlur/GradualBlur.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/GradualBlur/GradualBlur.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GradualBlur-JS-TW',
        type: 'registry:block',
        title: 'GradualBlur',
        description: 'Progressively un-blurs content based on scroll or trigger creating a cinematic reveal.',
        files: [
          {
            path: 'src/tailwind/Animations/GradualBlur/GradualBlur.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GradualBlur-TS-CSS',
        type: 'registry:block',
        title: 'GradualBlur',
        description: 'Progressively un-blurs content based on scroll or trigger creating a cinematic reveal.',
        files: [
          {
            path: 'src/ts-default/Animations/GradualBlur/GradualBlur.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/GradualBlur/GradualBlur.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GradualBlur-TS-TW',
        type: 'registry:block',
        title: 'GradualBlur',
        description: 'Progressively un-blurs content based on scroll or trigger creating a cinematic reveal.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/GradualBlur/GradualBlur.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GridDistortion-JS-CSS',
        type: 'registry:block',
        title: 'GridDistortion',
        description: 'Warped grid mesh distorts smoothly reacting to cursor.',
        files: [
          {
            path: 'src/content/Backgrounds/GridDistortion/GridDistortion.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/GridDistortion/GridDistortion.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GridDistortion-JS-TW',
        type: 'registry:block',
        title: 'GridDistortion',
        description: 'Warped grid mesh distorts smoothly reacting to cursor.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/GridDistortion/GridDistortion.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GridDistortion-TS-CSS',
        type: 'registry:block',
        title: 'GridDistortion',
        description: 'Warped grid mesh distorts smoothly reacting to cursor.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/GridDistortion/GridDistortion.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/GridDistortion/GridDistortion.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GridDistortion-TS-TW',
        type: 'registry:block',
        title: 'GridDistortion',
        description: 'Warped grid mesh distorts smoothly reacting to cursor.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/GridDistortion/GridDistortion.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GridMotion-JS-CSS',
        type: 'registry:block',
        title: 'GridMotion',
        description: 'Perspective moving grid lines based on cusror position.',
        files: [
          {
            path: 'src/content/Backgrounds/GridMotion/GridMotion.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/GridMotion/GridMotion.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GridMotion-JS-TW',
        type: 'registry:block',
        title: 'GridMotion',
        description: 'Perspective moving grid lines based on cusror position.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/GridMotion/GridMotion.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GridMotion-TS-CSS',
        type: 'registry:block',
        title: 'GridMotion',
        description: 'Perspective moving grid lines based on cusror position.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/GridMotion/GridMotion.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/GridMotion/GridMotion.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GridMotion-TS-TW',
        type: 'registry:block',
        title: 'GridMotion',
        description: 'Perspective moving grid lines based on cusror position.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/GridMotion/GridMotion.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GridScan-JS-CSS',
        type: 'registry:block',
        title: 'GridScan',
        description: 'Animated grid room 3D scan effect and cool interactions.',
        files: [
          {
            path: 'src/content/Backgrounds/GridScan/GridScan.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/GridScan/GridScan.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GridScan-JS-TW',
        type: 'registry:block',
        title: 'GridScan',
        description: 'Animated grid room 3D scan effect and cool interactions.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/GridScan/GridScan.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'GridScan-TS-CSS',
        type: 'registry:block',
        title: 'GridScan',
        description: 'Animated grid room 3D scan effect and cool interactions.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/GridScan/GridScan.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/GridScan/GridScan.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'GridScan-TS-TW',
        type: 'registry:block',
        title: 'GridScan',
        description: 'Animated grid room 3D scan effect and cool interactions.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/GridScan/GridScan.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Hyperspeed-JS-CSS',
        type: 'registry:block',
        title: 'Hyperspeed',
        description: 'Animated lines continuously moving to simulate hyperspace travel on click hold.',
        files: [
          {
            path: 'src/content/Backgrounds/Hyperspeed/Hyperspeed.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Hyperspeed/Hyperspeed.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Hyperspeed-JS-TW',
        type: 'registry:block',
        title: 'Hyperspeed',
        description: 'Animated lines continuously moving to simulate hyperspace travel on click hold.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Hyperspeed/Hyperspeed.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Hyperspeed-TS-CSS',
        type: 'registry:block',
        title: 'Hyperspeed',
        description: 'Animated lines continuously moving to simulate hyperspace travel on click hold.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Hyperspeed/Hyperspeed.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Hyperspeed/Hyperspeed.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Hyperspeed-TS-TW',
        type: 'registry:block',
        title: 'Hyperspeed',
        description: 'Animated lines continuously moving to simulate hyperspace travel on click hold.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Hyperspeed/Hyperspeed.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ImageTrail-JS-CSS',
        type: 'registry:block',
        title: 'ImageTrail',
        description: 'Cursor-based image trail with several built-in variants.',
        files: [
          {
            path: 'src/content/Animations/ImageTrail/ImageTrail.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/ImageTrail/ImageTrail.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ImageTrail-JS-TW',
        type: 'registry:block',
        title: 'ImageTrail',
        description: 'Cursor-based image trail with several built-in variants.',
        files: [
          {
            path: 'src/tailwind/Animations/ImageTrail/ImageTrail.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ImageTrail-TS-CSS',
        type: 'registry:block',
        title: 'ImageTrail',
        description: 'Cursor-based image trail with several built-in variants.',
        files: [
          {
            path: 'src/ts-default/Animations/ImageTrail/ImageTrail.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/ImageTrail/ImageTrail.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ImageTrail-TS-TW',
        type: 'registry:block',
        title: 'ImageTrail',
        description: 'Cursor-based image trail with several built-in variants.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/ImageTrail/ImageTrail.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'InfiniteMenu-JS-CSS',
        type: 'registry:block',
        title: 'InfiniteMenu',
        description: 'Horizontally looping menu effect that scrolls endlessly with seamless wrap.',
        files: [
          {
            path: 'src/content/Components/InfiniteMenu/InfiniteMenu.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/InfiniteMenu/InfiniteMenu.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'InfiniteMenu-JS-TW',
        type: 'registry:block',
        title: 'InfiniteMenu',
        description: 'Horizontally looping menu effect that scrolls endlessly with seamless wrap.',
        files: [
          {
            path: 'src/tailwind/Components/InfiniteMenu/InfiniteMenu.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'InfiniteMenu-TS-CSS',
        type: 'registry:block',
        title: 'InfiniteMenu',
        description: 'Horizontally looping menu effect that scrolls endlessly with seamless wrap.',
        files: [
          {
            path: 'src/ts-default/Components/InfiniteMenu/InfiniteMenu.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/InfiniteMenu/InfiniteMenu.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'InfiniteMenu-TS-TW',
        type: 'registry:block',
        title: 'InfiniteMenu',
        description: 'Horizontally looping menu effect that scrolls endlessly with seamless wrap.',
        files: [
          {
            path: 'src/ts-tailwind/Components/InfiniteMenu/InfiniteMenu.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Iridescence-JS-CSS',
        type: 'registry:block',
        title: 'Iridescence',
        description: 'Slick iridescent shader with shifting waves.',
        files: [
          {
            path: 'src/content/Backgrounds/Iridescence/Iridescence.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Iridescence/Iridescence.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Iridescence-JS-TW',
        type: 'registry:block',
        title: 'Iridescence',
        description: 'Slick iridescent shader with shifting waves.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Iridescence/Iridescence.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Iridescence-TS-CSS',
        type: 'registry:block',
        title: 'Iridescence',
        description: 'Slick iridescent shader with shifting waves.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Iridescence/Iridescence.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Iridescence/Iridescence.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Iridescence-TS-TW',
        type: 'registry:block',
        title: 'Iridescence',
        description: 'Slick iridescent shader with shifting waves.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Iridescence/Iridescence.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Lanyard-JS-CSS',
        type: 'registry:block',
        title: 'Lanyard',
        description: 'Swinging 3D lanyard / badge card with realistic inertial motion.',
        files: [
          {
            path: 'src/content/Components/Lanyard/Lanyard.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/Lanyard/Lanyard.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Lanyard-JS-TW',
        type: 'registry:block',
        title: 'Lanyard',
        description: 'Swinging 3D lanyard / badge card with realistic inertial motion.',
        files: [
          {
            path: 'src/tailwind/Components/Lanyard/Lanyard.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Lanyard-TS-CSS',
        type: 'registry:block',
        title: 'Lanyard',
        description: 'Swinging 3D lanyard / badge card with realistic inertial motion.',
        files: [
          {
            path: 'src/ts-default/Components/Lanyard/Lanyard.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/Lanyard/Lanyard.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Lanyard-TS-TW',
        type: 'registry:block',
        title: 'Lanyard',
        description: 'Swinging 3D lanyard / badge card with realistic inertial motion.',
        files: [
          {
            path: 'src/ts-tailwind/Components/Lanyard/Lanyard.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'LaserFlow-JS-CSS',
        type: 'registry:block',
        title: 'LaserFlow',
        description: 'Dynamic laser light that flows onto a surface, customizable effect.',
        files: [
          {
            path: 'src/content/Animations/LaserFlow/LaserFlow.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/LaserFlow/LaserFlow.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'LaserFlow-JS-TW',
        type: 'registry:block',
        title: 'LaserFlow',
        description: 'Dynamic laser light that flows onto a surface, customizable effect.',
        files: [
          {
            path: 'src/tailwind/Animations/LaserFlow/LaserFlow.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'LaserFlow-TS-CSS',
        type: 'registry:block',
        title: 'LaserFlow',
        description: 'Dynamic laser light that flows onto a surface, customizable effect.',
        files: [
          {
            path: 'src/ts-default/Animations/LaserFlow/LaserFlow.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/LaserFlow/LaserFlow.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'LaserFlow-TS-TW',
        type: 'registry:block',
        title: 'LaserFlow',
        description: 'Dynamic laser light that flows onto a surface, customizable effect.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/LaserFlow/LaserFlow.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'LetterGlitch-JS-CSS',
        type: 'registry:block',
        title: 'LetterGlitch',
        description: 'Matrix style letter animation.',
        files: [
          {
            path: 'src/content/Backgrounds/LetterGlitch/LetterGlitch.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'LetterGlitch-JS-TW',
        type: 'registry:block',
        title: 'LetterGlitch',
        description: 'Matrix style letter animation.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/LetterGlitch/LetterGlitch.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'LetterGlitch-TS-CSS',
        type: 'registry:block',
        title: 'LetterGlitch',
        description: 'Matrix style letter animation.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/LetterGlitch/LetterGlitch.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'LetterGlitch-TS-TW',
        type: 'registry:block',
        title: 'LetterGlitch',
        description: 'Matrix style letter animation.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/LetterGlitch/LetterGlitch.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Lightning-JS-CSS',
        type: 'registry:block',
        title: 'Lightning',
        description: 'Procedural lightning bolts with branching and glow flicker.',
        files: [
          {
            path: 'src/content/Backgrounds/Lightning/Lightning.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Lightning/Lightning.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Lightning-JS-TW',
        type: 'registry:block',
        title: 'Lightning',
        description: 'Procedural lightning bolts with branching and glow flicker.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Lightning/Lightning.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Lightning-TS-CSS',
        type: 'registry:block',
        title: 'Lightning',
        description: 'Procedural lightning bolts with branching and glow flicker.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Lightning/Lightning.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Lightning/Lightning.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Lightning-TS-TW',
        type: 'registry:block',
        title: 'Lightning',
        description: 'Procedural lightning bolts with branching and glow flicker.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Lightning/Lightning.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'LightRays-JS-CSS',
        type: 'registry:block',
        title: 'LightRays',
        description: 'Volumetric light rays/beams with customizable direction.',
        files: [
          {
            path: 'src/content/Backgrounds/LightRays/LightRays.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/LightRays/LightRays.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'LightRays-JS-TW',
        type: 'registry:block',
        title: 'LightRays',
        description: 'Volumetric light rays/beams with customizable direction.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/LightRays/LightRays.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'LightRays-TS-CSS',
        type: 'registry:block',
        title: 'LightRays',
        description: 'Volumetric light rays/beams with customizable direction.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/LightRays/LightRays.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/LightRays/LightRays.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'LightRays-TS-TW',
        type: 'registry:block',
        title: 'LightRays',
        description: 'Volumetric light rays/beams with customizable direction.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/LightRays/LightRays.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'LiquidChrome-JS-CSS',
        type: 'registry:block',
        title: 'LiquidChrome',
        description: 'Liquid metallic chrome shader with flowing reflective surface.',
        files: [
          {
            path: 'src/content/Backgrounds/LiquidChrome/LiquidChrome.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/LiquidChrome/LiquidChrome.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'LiquidChrome-JS-TW',
        type: 'registry:block',
        title: 'LiquidChrome',
        description: 'Liquid metallic chrome shader with flowing reflective surface.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/LiquidChrome/LiquidChrome.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'LiquidChrome-TS-CSS',
        type: 'registry:block',
        title: 'LiquidChrome',
        description: 'Liquid metallic chrome shader with flowing reflective surface.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/LiquidChrome/LiquidChrome.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/LiquidChrome/LiquidChrome.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'LiquidChrome-TS-TW',
        type: 'registry:block',
        title: 'LiquidChrome',
        description: 'Liquid metallic chrome shader with flowing reflective surface.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/LiquidChrome/LiquidChrome.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'LiquidEther-JS-CSS',
        type: 'registry:block',
        title: 'LiquidEther',
        description: 'Interactive liquid shader with flowing distortion and customizable colors.',
        files: [
          {
            path: 'src/content/Backgrounds/LiquidEther/LiquidEther.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/LiquidEther/LiquidEther.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'LiquidEther-JS-TW',
        type: 'registry:block',
        title: 'LiquidEther',
        description: 'Interactive liquid shader with flowing distortion and customizable colors.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/LiquidEther/LiquidEther.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'LiquidEther-TS-CSS',
        type: 'registry:block',
        title: 'LiquidEther',
        description: 'Interactive liquid shader with flowing distortion and customizable colors.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/LiquidEther/LiquidEther.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/LiquidEther/LiquidEther.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'LiquidEther-TS-TW',
        type: 'registry:block',
        title: 'LiquidEther',
        description: 'Interactive liquid shader with flowing distortion and customizable colors.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/LiquidEther/LiquidEther.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'LogoLoop-JS-CSS',
        type: 'registry:block',
        title: 'LogoLoop',
        description: 'Continuously looping marquee of brand or tech logos with seamless repeat and hover pause.',
        files: [
          {
            path: 'src/content/Animations/LogoLoop/LogoLoop.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/LogoLoop/LogoLoop.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'LogoLoop-JS-TW',
        type: 'registry:block',
        title: 'LogoLoop',
        description: 'Continuously looping marquee of brand or tech logos with seamless repeat and hover pause.',
        files: [
          {
            path: 'src/tailwind/Animations/LogoLoop/LogoLoop.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'LogoLoop-TS-CSS',
        type: 'registry:block',
        title: 'LogoLoop',
        description: 'Continuously looping marquee of brand or tech logos with seamless repeat and hover pause.',
        files: [
          {
            path: 'src/ts-default/Animations/LogoLoop/LogoLoop.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/LogoLoop/LogoLoop.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'LogoLoop-TS-TW',
        type: 'registry:block',
        title: 'LogoLoop',
        description: 'Continuously looping marquee of brand or tech logos with seamless repeat and hover pause.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/LogoLoop/LogoLoop.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'MagicBento-JS-CSS',
        type: 'registry:block',
        title: 'MagicBento',
        description: 'Interactive bento grid tiles expand + animate with various options.',
        files: [
          {
            path: 'src/content/Components/MagicBento/MagicBento.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/MagicBento/MagicBento.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'MagicBento-JS-TW',
        type: 'registry:block',
        title: 'MagicBento',
        description: 'Interactive bento grid tiles expand + animate with various options.',
        files: [
          {
            path: 'src/tailwind/Components/MagicBento/MagicBento.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'MagicBento-TS-CSS',
        type: 'registry:block',
        title: 'MagicBento',
        description: 'Interactive bento grid tiles expand + animate with various options.',
        files: [
          {
            path: 'src/ts-default/Components/MagicBento/MagicBento.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/MagicBento/MagicBento.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'MagicBento-TS-TW',
        type: 'registry:block',
        title: 'MagicBento',
        description: 'Interactive bento grid tiles expand + animate with various options.',
        files: [
          {
            path: 'src/ts-tailwind/Components/MagicBento/MagicBento.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Magnet-JS-CSS',
        type: 'registry:block',
        title: 'Magnet',
        description: 'Elements magnetically ease toward the cursor then settle back with spring physics.',
        files: [
          {
            path: 'src/content/Animations/Magnet/Magnet.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Magnet-JS-TW',
        type: 'registry:block',
        title: 'Magnet',
        description: 'Elements magnetically ease toward the cursor then settle back with spring physics.',
        files: [
          {
            path: 'src/tailwind/Animations/Magnet/Magnet.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Magnet-TS-CSS',
        type: 'registry:block',
        title: 'Magnet',
        description: 'Elements magnetically ease toward the cursor then settle back with spring physics.',
        files: [
          {
            path: 'src/ts-default/Animations/Magnet/Magnet.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Magnet-TS-TW',
        type: 'registry:block',
        title: 'Magnet',
        description: 'Elements magnetically ease toward the cursor then settle back with spring physics.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/Magnet/Magnet.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'MagnetLines-JS-CSS',
        type: 'registry:block',
        title: 'MagnetLines',
        description: 'Animated field lines bend toward the cursor.',
        files: [
          {
            path: 'src/content/Animations/MagnetLines/MagnetLines.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/MagnetLines/MagnetLines.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'MagnetLines-JS-TW',
        type: 'registry:block',
        title: 'MagnetLines',
        description: 'Animated field lines bend toward the cursor.',
        files: [
          {
            path: 'src/tailwind/Animations/MagnetLines/MagnetLines.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'MagnetLines-TS-CSS',
        type: 'registry:block',
        title: 'MagnetLines',
        description: 'Animated field lines bend toward the cursor.',
        files: [
          {
            path: 'src/ts-default/Animations/MagnetLines/MagnetLines.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/MagnetLines/MagnetLines.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'MagnetLines-TS-TW',
        type: 'registry:block',
        title: 'MagnetLines',
        description: 'Animated field lines bend toward the cursor.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/MagnetLines/MagnetLines.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Masonry-JS-CSS',
        type: 'registry:block',
        title: 'Masonry',
        description: 'Responsive masonry layout with animated reflow + gaps optimization.',
        files: [
          {
            path: 'src/content/Components/Masonry/Masonry.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/Masonry/Masonry.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Masonry-JS-TW',
        type: 'registry:block',
        title: 'Masonry',
        description: 'Responsive masonry layout with animated reflow + gaps optimization.',
        files: [
          {
            path: 'src/tailwind/Components/Masonry/Masonry.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Masonry-TS-CSS',
        type: 'registry:block',
        title: 'Masonry',
        description: 'Responsive masonry layout with animated reflow + gaps optimization.',
        files: [
          {
            path: 'src/ts-default/Components/Masonry/Masonry.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/Masonry/Masonry.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Masonry-TS-TW',
        type: 'registry:block',
        title: 'Masonry',
        description: 'Responsive masonry layout with animated reflow + gaps optimization.',
        files: [
          {
            path: 'src/ts-tailwind/Components/Masonry/Masonry.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'MetaBalls-JS-CSS',
        type: 'registry:block',
        title: 'MetaBalls',
        description: 'Liquid metaball blobs that merge and separate with smooth implicit surface animation.',
        files: [
          {
            path: 'src/content/Animations/MetaBalls/MetaBalls.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/MetaBalls/MetaBalls.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'MetaBalls-JS-TW',
        type: 'registry:block',
        title: 'MetaBalls',
        description: 'Liquid metaball blobs that merge and separate with smooth implicit surface animation.',
        files: [
          {
            path: 'src/tailwind/Animations/MetaBalls/MetaBalls.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'MetaBalls-TS-CSS',
        type: 'registry:block',
        title: 'MetaBalls',
        description: 'Liquid metaball blobs that merge and separate with smooth implicit surface animation.',
        files: [
          {
            path: 'src/ts-default/Animations/MetaBalls/MetaBalls.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/MetaBalls/MetaBalls.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'MetaBalls-TS-TW',
        type: 'registry:block',
        title: 'MetaBalls',
        description: 'Liquid metaball blobs that merge and separate with smooth implicit surface animation.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/MetaBalls/MetaBalls.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'MetallicPaint-JS-CSS',
        type: 'registry:block',
        title: 'MetallicPaint',
        description: 'Liquid metallic paint shader which can be applied to SVG elements.',
        files: [
          {
            path: 'src/content/Animations/MetallicPaint/MetallicPaint.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/MetallicPaint/MetallicPaint.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'MetallicPaint-JS-TW',
        type: 'registry:block',
        title: 'MetallicPaint',
        description: 'Liquid metallic paint shader which can be applied to SVG elements.',
        files: [
          {
            path: 'src/tailwind/Animations/MetallicPaint/MetallicPaint.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'MetallicPaint-TS-CSS',
        type: 'registry:block',
        title: 'MetallicPaint',
        description: 'Liquid metallic paint shader which can be applied to SVG elements.',
        files: [
          {
            path: 'src/ts-default/Animations/MetallicPaint/MetallicPaint.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/MetallicPaint/MetallicPaint.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'MetallicPaint-TS-TW',
        type: 'registry:block',
        title: 'MetallicPaint',
        description: 'Liquid metallic paint shader which can be applied to SVG elements.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/MetallicPaint/MetallicPaint.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ModelViewer-JS-CSS',
        type: 'registry:block',
        title: 'ModelViewer',
        description: 'Three.js model viewer with orbit controls and lighting presets.',
        files: [
          {
            path: 'src/content/Components/ModelViewer/ModelViewer.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ModelViewer-JS-TW',
        type: 'registry:block',
        title: 'ModelViewer',
        description: 'Three.js model viewer with orbit controls and lighting presets.',
        files: [
          {
            path: 'src/tailwind/Components/ModelViewer/ModelViewer.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ModelViewer-TS-CSS',
        type: 'registry:block',
        title: 'ModelViewer',
        description: 'Three.js model viewer with orbit controls and lighting presets.',
        files: [
          {
            path: 'src/ts-default/Components/ModelViewer/ModelViewer.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ModelViewer-TS-TW',
        type: 'registry:block',
        title: 'ModelViewer',
        description: 'Three.js model viewer with orbit controls and lighting presets.',
        files: [
          {
            path: 'src/ts-tailwind/Components/ModelViewer/ModelViewer.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Noise-JS-CSS',
        type: 'registry:block',
        title: 'Noise',
        description: 'Animated film grain / noise overlay adding subtle texture and motion.',
        files: [
          {
            path: 'src/content/Animations/Noise/Noise.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/Noise/Noise.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Noise-JS-TW',
        type: 'registry:block',
        title: 'Noise',
        description: 'Animated film grain / noise overlay adding subtle texture and motion.',
        files: [
          {
            path: 'src/tailwind/Animations/Noise/Noise.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Noise-TS-CSS',
        type: 'registry:block',
        title: 'Noise',
        description: 'Animated film grain / noise overlay adding subtle texture and motion.',
        files: [
          {
            path: 'src/ts-default/Animations/Noise/Noise.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/Noise/Noise.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Noise-TS-TW',
        type: 'registry:block',
        title: 'Noise',
        description: 'Animated film grain / noise overlay adding subtle texture and motion.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/Noise/Noise.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Orb-JS-CSS',
        type: 'registry:block',
        title: 'Orb',
        description: 'Floating energy orb with customizable hover effect.',
        files: [
          {
            path: 'src/content/Backgrounds/Orb/Orb.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Orb/Orb.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Orb-JS-TW',
        type: 'registry:block',
        title: 'Orb',
        description: 'Floating energy orb with customizable hover effect.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Orb/Orb.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Orb-TS-CSS',
        type: 'registry:block',
        title: 'Orb',
        description: 'Floating energy orb with customizable hover effect.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Orb/Orb.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Orb/Orb.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Orb-TS-TW',
        type: 'registry:block',
        title: 'Orb',
        description: 'Floating energy orb with customizable hover effect.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Orb/Orb.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Particles-JS-CSS',
        type: 'registry:block',
        title: 'Particles',
        description: 'Configurable particle system.',
        files: [
          {
            path: 'src/content/Backgrounds/Particles/Particles.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Particles/Particles.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Particles-JS-TW',
        type: 'registry:block',
        title: 'Particles',
        description: 'Configurable particle system.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Particles/Particles.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Particles-TS-CSS',
        type: 'registry:block',
        title: 'Particles',
        description: 'Configurable particle system.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Particles/Particles.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Particles/Particles.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Particles-TS-TW',
        type: 'registry:block',
        title: 'Particles',
        description: 'Configurable particle system.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Particles/Particles.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'PillNav-JS-CSS',
        type: 'registry:block',
        title: 'PillNav',
        description: 'Minimal pill nav with sliding active highlight + smooth easing.',
        files: [
          {
            path: 'src/content/Components/PillNav/PillNav.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/PillNav/PillNav.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'PillNav-JS-TW',
        type: 'registry:block',
        title: 'PillNav',
        description: 'Minimal pill nav with sliding active highlight + smooth easing.',
        files: [
          {
            path: 'src/tailwind/Components/PillNav/PillNav.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'PillNav-TS-CSS',
        type: 'registry:block',
        title: 'PillNav',
        description: 'Minimal pill nav with sliding active highlight + smooth easing.',
        files: [
          {
            path: 'src/ts-default/Components/PillNav/PillNav.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/PillNav/PillNav.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'PillNav-TS-TW',
        type: 'registry:block',
        title: 'PillNav',
        description: 'Minimal pill nav with sliding active highlight + smooth easing.',
        files: [
          {
            path: 'src/ts-tailwind/Components/PillNav/PillNav.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'PixelBlast-JS-CSS',
        type: 'registry:block',
        title: 'PixelBlast',
        description: 'Exploding pixel particle bursts with optional liquid postprocessing.',
        files: [
          {
            path: 'src/content/Backgrounds/PixelBlast/PixelBlast.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/PixelBlast/PixelBlast.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'PixelBlast-JS-TW',
        type: 'registry:block',
        title: 'PixelBlast',
        description: 'Exploding pixel particle bursts with optional liquid postprocessing.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/PixelBlast/PixelBlast.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'PixelBlast-TS-CSS',
        type: 'registry:block',
        title: 'PixelBlast',
        description: 'Exploding pixel particle bursts with optional liquid postprocessing.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/PixelBlast/PixelBlast.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/PixelBlast/PixelBlast.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'PixelBlast-TS-TW',
        type: 'registry:block',
        title: 'PixelBlast',
        description: 'Exploding pixel particle bursts with optional liquid postprocessing.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/PixelBlast/PixelBlast.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'PixelCard-JS-CSS',
        type: 'registry:block',
        title: 'PixelCard',
        description: 'Card content revealed through pixel expansion transition.',
        files: [
          {
            path: 'src/content/Components/PixelCard/PixelCard.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/PixelCard/PixelCard.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'PixelCard-JS-TW',
        type: 'registry:block',
        title: 'PixelCard',
        description: 'Card content revealed through pixel expansion transition.',
        files: [
          {
            path: 'src/tailwind/Components/PixelCard/PixelCard.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'PixelCard-TS-CSS',
        type: 'registry:block',
        title: 'PixelCard',
        description: 'Card content revealed through pixel expansion transition.',
        files: [
          {
            path: 'src/ts-default/Components/PixelCard/PixelCard.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/PixelCard/PixelCard.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'PixelCard-TS-TW',
        type: 'registry:block',
        title: 'PixelCard',
        description: 'Card content revealed through pixel expansion transition.',
        files: [
          {
            path: 'src/ts-tailwind/Components/PixelCard/PixelCard.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'PixelTrail-JS-CSS',
        type: 'registry:block',
        title: 'PixelTrail',
        description: 'Pixelated cursor trail emitting fading squares with retro digital feel.',
        files: [
          {
            path: 'src/content/Animations/PixelTrail/PixelTrail.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/PixelTrail/PixelTrail.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'PixelTrail-JS-TW',
        type: 'registry:block',
        title: 'PixelTrail',
        description: 'Pixelated cursor trail emitting fading squares with retro digital feel.',
        files: [
          {
            path: 'src/tailwind/Animations/PixelTrail/PixelTrail.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'PixelTrail-TS-CSS',
        type: 'registry:block',
        title: 'PixelTrail',
        description: 'Pixelated cursor trail emitting fading squares with retro digital feel.',
        files: [
          {
            path: 'src/ts-default/Animations/PixelTrail/PixelTrail.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/PixelTrail/PixelTrail.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'PixelTrail-TS-TW',
        type: 'registry:block',
        title: 'PixelTrail',
        description: 'Pixelated cursor trail emitting fading squares with retro digital feel.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/PixelTrail/PixelTrail.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'PixelTransition-JS-CSS',
        type: 'registry:block',
        title: 'PixelTransition',
        description: 'Pixel dissolve transition for content reveal on hover.',
        files: [
          {
            path: 'src/content/Animations/PixelTransition/PixelTransition.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/PixelTransition/PixelTransition.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'PixelTransition-JS-TW',
        type: 'registry:block',
        title: 'PixelTransition',
        description: 'Pixel dissolve transition for content reveal on hover.',
        files: [
          {
            path: 'src/tailwind/Animations/PixelTransition/PixelTransition.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'PixelTransition-TS-CSS',
        type: 'registry:block',
        title: 'PixelTransition',
        description: 'Pixel dissolve transition for content reveal on hover.',
        files: [
          {
            path: 'src/ts-default/Animations/PixelTransition/PixelTransition.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/PixelTransition/PixelTransition.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'PixelTransition-TS-TW',
        type: 'registry:block',
        title: 'PixelTransition',
        description: 'Pixel dissolve transition for content reveal on hover.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/PixelTransition/PixelTransition.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Plasma-JS-CSS',
        type: 'registry:block',
        title: 'Plasma',
        description: 'Organic plasma gradients swirl + morph with smooth turbulence.',
        files: [
          {
            path: 'src/content/Backgrounds/Plasma/Plasma.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Plasma/Plasma.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Plasma-JS-TW',
        type: 'registry:block',
        title: 'Plasma',
        description: 'Organic plasma gradients swirl + morph with smooth turbulence.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Plasma/Plasma.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Plasma-TS-CSS',
        type: 'registry:block',
        title: 'Plasma',
        description: 'Organic plasma gradients swirl + morph with smooth turbulence.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Plasma/Plasma.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Plasma/Plasma.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Plasma-TS-TW',
        type: 'registry:block',
        title: 'Plasma',
        description: 'Organic plasma gradients swirl + morph with smooth turbulence.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Plasma/Plasma.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Prism-JS-CSS',
        type: 'registry:block',
        title: 'Prism',
        description: 'Rotating prism with configurable intensity, size, and colors.',
        files: [
          {
            path: 'src/content/Backgrounds/Prism/Prism.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Prism/Prism.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Prism-JS-TW',
        type: 'registry:block',
        title: 'Prism',
        description: 'Rotating prism with configurable intensity, size, and colors.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Prism/Prism.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Prism-TS-CSS',
        type: 'registry:block',
        title: 'Prism',
        description: 'Rotating prism with configurable intensity, size, and colors.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Prism/Prism.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Prism/Prism.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Prism-TS-TW',
        type: 'registry:block',
        title: 'Prism',
        description: 'Rotating prism with configurable intensity, size, and colors.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Prism/Prism.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'PrismaticBurst-JS-CSS',
        type: 'registry:block',
        title: 'PrismaticBurst',
        description: 'Burst of light rays with controllable color, distortion, amount.',
        files: [
          {
            path: 'src/content/Backgrounds/PrismaticBurst/PrismaticBurst.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/PrismaticBurst/PrismaticBurst.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'PrismaticBurst-JS-TW',
        type: 'registry:block',
        title: 'PrismaticBurst',
        description: 'Burst of light rays with controllable color, distortion, amount.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/PrismaticBurst/PrismaticBurst.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'PrismaticBurst-TS-CSS',
        type: 'registry:block',
        title: 'PrismaticBurst',
        description: 'Burst of light rays with controllable color, distortion, amount.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/PrismaticBurst/PrismaticBurst.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/PrismaticBurst/PrismaticBurst.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'PrismaticBurst-TS-TW',
        type: 'registry:block',
        title: 'PrismaticBurst',
        description: 'Burst of light rays with controllable color, distortion, amount.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/PrismaticBurst/PrismaticBurst.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ProfileCard-JS-CSS',
        type: 'registry:block',
        title: 'ProfileCard',
        description: 'Animated profile card glare with 3D hover effect.',
        files: [
          {
            path: 'src/content/Components/ProfileCard/ProfileCard.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/ProfileCard/ProfileCard.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ProfileCard-TS-CSS',
        type: 'registry:block',
        title: 'ProfileCard',
        description: 'Animated profile card glare with 3D hover effect.',
        files: [
          {
            path: 'src/ts-default/Components/ProfileCard/ProfileCard.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/ProfileCard/ProfileCard.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Ribbons-JS-CSS',
        type: 'registry:block',
        title: 'Ribbons',
        description: 'Flowing responsive ribbons/cursor trail driven by physics and pointer motion.',
        files: [
          {
            path: 'src/content/Animations/Ribbons/Ribbons.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/Ribbons/Ribbons.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Ribbons-JS-TW',
        type: 'registry:block',
        title: 'Ribbons',
        description: 'Flowing responsive ribbons/cursor trail driven by physics and pointer motion.',
        files: [
          {
            path: 'src/tailwind/Animations/Ribbons/Ribbons.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Ribbons-TS-CSS',
        type: 'registry:block',
        title: 'Ribbons',
        description: 'Flowing responsive ribbons/cursor trail driven by physics and pointer motion.',
        files: [
          {
            path: 'src/ts-default/Animations/Ribbons/Ribbons.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/Ribbons/Ribbons.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Ribbons-TS-TW',
        type: 'registry:block',
        title: 'Ribbons',
        description: 'Flowing responsive ribbons/cursor trail driven by physics and pointer motion.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/Ribbons/Ribbons.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'RippleGrid-JS-CSS',
        type: 'registry:block',
        title: 'RippleGrid',
        description: 'A grid that continuously animates with a ripple effect.',
        files: [
          {
            path: 'src/content/Backgrounds/RippleGrid/RippleGrid.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/RippleGrid/RippleGrid.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'RippleGrid-JS-TW',
        type: 'registry:block',
        title: 'RippleGrid',
        description: 'A grid that continuously animates with a ripple effect.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/RippleGrid/RippleGrid.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'RippleGrid-TS-CSS',
        type: 'registry:block',
        title: 'RippleGrid',
        description: 'A grid that continuously animates with a ripple effect.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/RippleGrid/RippleGrid.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/RippleGrid/RippleGrid.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'RippleGrid-TS-TW',
        type: 'registry:block',
        title: 'RippleGrid',
        description: 'A grid that continuously animates with a ripple effect.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/RippleGrid/RippleGrid.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'RotatingText-JS-CSS',
        type: 'registry:block',
        title: 'RotatingText',
        description: 'Cycles through multiple phrases with 3D rotate / flip transitions.',
        files: [
          {
            path: 'src/content/TextAnimations/RotatingText/RotatingText.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/RotatingText/RotatingText.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'RotatingText-JS-TW',
        type: 'registry:block',
        title: 'RotatingText',
        description: 'Cycles through multiple phrases with 3D rotate / flip transitions.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/RotatingText/RotatingText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'RotatingText-TS-CSS',
        type: 'registry:block',
        title: 'RotatingText',
        description: 'Cycles through multiple phrases with 3D rotate / flip transitions.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/RotatingText/RotatingText.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/RotatingText/RotatingText.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'RotatingText-TS-TW',
        type: 'registry:block',
        title: 'RotatingText',
        description: 'Cycles through multiple phrases with 3D rotate / flip transitions.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/RotatingText/RotatingText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ScrambledText-JS-CSS',
        type: 'registry:block',
        title: 'ScrambledText',
        description: 'Detects cursor position and applies a distortion effect to text.',
        files: [
          {
            path: 'src/content/TextAnimations/ScrambledText/ScrambledText.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/ScrambledText/ScrambledText.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ScrambledText-JS-TW',
        type: 'registry:block',
        title: 'ScrambledText',
        description: 'Detects cursor position and applies a distortion effect to text.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/ScrambledText/ScrambledText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ScrambledText-TS-CSS',
        type: 'registry:block',
        title: 'ScrambledText',
        description: 'Detects cursor position and applies a distortion effect to text.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/ScrambledText/ScrambledText.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/ScrambledText/ScrambledText.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ScrambledText-TS-TW',
        type: 'registry:block',
        title: 'ScrambledText',
        description: 'Detects cursor position and applies a distortion effect to text.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/ScrambledText/ScrambledText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ScrollFloat-JS-CSS',
        type: 'registry:block',
        title: 'ScrollFloat',
        description: 'Text gently floats / parallax shifts on scroll.',
        files: [
          {
            path: 'src/content/TextAnimations/ScrollFloat/ScrollFloat.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/ScrollFloat/ScrollFloat.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ScrollFloat-JS-TW',
        type: 'registry:block',
        title: 'ScrollFloat',
        description: 'Text gently floats / parallax shifts on scroll.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/ScrollFloat/ScrollFloat.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ScrollFloat-TS-CSS',
        type: 'registry:block',
        title: 'ScrollFloat',
        description: 'Text gently floats / parallax shifts on scroll.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/ScrollFloat/ScrollFloat.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/ScrollFloat/ScrollFloat.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ScrollFloat-TS-TW',
        type: 'registry:block',
        title: 'ScrollFloat',
        description: 'Text gently floats / parallax shifts on scroll.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/ScrollFloat/ScrollFloat.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ScrollReveal-JS-CSS',
        type: 'registry:block',
        title: 'ScrollReveal',
        description: 'Text gently unblurs and reveals on scroll.',
        files: [
          {
            path: 'src/content/TextAnimations/ScrollReveal/ScrollReveal.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/ScrollReveal/ScrollReveal.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ScrollReveal-JS-TW',
        type: 'registry:block',
        title: 'ScrollReveal',
        description: 'Text gently unblurs and reveals on scroll.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/ScrollReveal/ScrollReveal.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ScrollReveal-TS-CSS',
        type: 'registry:block',
        title: 'ScrollReveal',
        description: 'Text gently unblurs and reveals on scroll.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/ScrollReveal/ScrollReveal.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/ScrollReveal/ScrollReveal.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ScrollReveal-TS-TW',
        type: 'registry:block',
        title: 'ScrollReveal',
        description: 'Text gently unblurs and reveals on scroll.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/ScrollReveal/ScrollReveal.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ScrollStack-JS-CSS',
        type: 'registry:block',
        title: 'ScrollStack',
        description: 'Overlapping card stack reveals on scroll with depth layering.',
        files: [
          {
            path: 'src/content/Components/ScrollStack/ScrollStack.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/ScrollStack/ScrollStack.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ScrollStack-JS-TW',
        type: 'registry:block',
        title: 'ScrollStack',
        description: 'Overlapping card stack reveals on scroll with depth layering.',
        files: [
          {
            path: 'src/tailwind/Components/ScrollStack/ScrollStack.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ScrollStack-TS-CSS',
        type: 'registry:block',
        title: 'ScrollStack',
        description: 'Overlapping card stack reveals on scroll with depth layering.',
        files: [
          {
            path: 'src/ts-default/Components/ScrollStack/ScrollStack.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/ScrollStack/ScrollStack.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ScrollStack-TS-TW',
        type: 'registry:block',
        title: 'ScrollStack',
        description: 'Overlapping card stack reveals on scroll with depth layering.',
        files: [
          {
            path: 'src/ts-tailwind/Components/ScrollStack/ScrollStack.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ScrollVelocity-JS-CSS',
        type: 'registry:block',
        title: 'ScrollVelocity',
        description: "Text marquee animatio - speed and distortion scale with user's scroll velocity.",
        files: [
          {
            path: 'src/content/TextAnimations/ScrollVelocity/ScrollVelocity.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/ScrollVelocity/ScrollVelocity.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ScrollVelocity-JS-TW',
        type: 'registry:block',
        title: 'ScrollVelocity',
        description: "Text marquee animatio - speed and distortion scale with user's scroll velocity.",
        files: [
          {
            path: 'src/tailwind/TextAnimations/ScrollVelocity/ScrollVelocity.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ScrollVelocity-TS-CSS',
        type: 'registry:block',
        title: 'ScrollVelocity',
        description: "Text marquee animatio - speed and distortion scale with user's scroll velocity.",
        files: [
          {
            path: 'src/ts-default/TextAnimations/ScrollVelocity/ScrollVelocity.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/ScrollVelocity/ScrollVelocity.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ScrollVelocity-TS-TW',
        type: 'registry:block',
        title: 'ScrollVelocity',
        description: "Text marquee animatio - speed and distortion scale with user's scroll velocity.",
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/ScrollVelocity/ScrollVelocity.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ShapeBlur-JS-CSS',
        type: 'registry:block',
        title: 'ShapeBlur',
        description: 'Morphing blurred geometric shape. The effect occurs on hover.',
        files: [
          {
            path: 'src/content/Animations/ShapeBlur/ShapeBlur.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ShapeBlur-JS-TW',
        type: 'registry:block',
        title: 'ShapeBlur',
        description: 'Morphing blurred geometric shape. The effect occurs on hover.',
        files: [
          {
            path: 'src/tailwind/Animations/ShapeBlur/ShapeBlur.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ShapeBlur-TS-CSS',
        type: 'registry:block',
        title: 'ShapeBlur',
        description: 'Morphing blurred geometric shape. The effect occurs on hover.',
        files: [
          {
            path: 'src/ts-default/Animations/ShapeBlur/ShapeBlur.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ShapeBlur-TS-TW',
        type: 'registry:block',
        title: 'ShapeBlur',
        description: 'Morphing blurred geometric shape. The effect occurs on hover.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/ShapeBlur/ShapeBlur.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ShinyText-JS-CSS',
        type: 'registry:block',
        title: 'ShinyText',
        description: 'Metallic sheen sweeps across text producing a reflective highlight.',
        files: [
          {
            path: 'src/content/TextAnimations/ShinyText/ShinyText.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/ShinyText/ShinyText.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ShinyText-JS-TW',
        type: 'registry:block',
        title: 'ShinyText',
        description: 'Metallic sheen sweeps across text producing a reflective highlight.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/ShinyText/ShinyText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'ShinyText-TS-CSS',
        type: 'registry:block',
        title: 'ShinyText',
        description: 'Metallic sheen sweeps across text producing a reflective highlight.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/ShinyText/ShinyText.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/ShinyText/ShinyText.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'ShinyText-TS-TW',
        type: 'registry:block',
        title: 'ShinyText',
        description: 'Metallic sheen sweeps across text producing a reflective highlight.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/ShinyText/ShinyText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Shuffle-JS-CSS',
        type: 'registry:block',
        title: 'Shuffle',
        description: 'Animated text reveal where characters shuffle before settling.',
        files: [
          {
            path: 'src/content/TextAnimations/Shuffle/Shuffle.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/Shuffle/Shuffle.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Shuffle-JS-TW',
        type: 'registry:block',
        title: 'Shuffle',
        description: 'Animated text reveal where characters shuffle before settling.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/Shuffle/Shuffle.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Shuffle-TS-CSS',
        type: 'registry:block',
        title: 'Shuffle',
        description: 'Animated text reveal where characters shuffle before settling.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/Shuffle/Shuffle.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/Shuffle/Shuffle.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Shuffle-TS-TW',
        type: 'registry:block',
        title: 'Shuffle',
        description: 'Animated text reveal where characters shuffle before settling.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/Shuffle/Shuffle.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Silk-JS-CSS',
        type: 'registry:block',
        title: 'Silk',
        description: 'Smooth waves background with soft lighting.',
        files: [
          {
            path: 'src/content/Backgrounds/Silk/Silk.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Silk-JS-TW',
        type: 'registry:block',
        title: 'Silk',
        description: 'Smooth waves background with soft lighting.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Silk/Silk.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Silk-TS-CSS',
        type: 'registry:block',
        title: 'Silk',
        description: 'Smooth waves background with soft lighting.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Silk/Silk.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Silk-TS-TW',
        type: 'registry:block',
        title: 'Silk',
        description: 'Smooth waves background with soft lighting.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Silk/Silk.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'SplashCursor-JS-CSS',
        type: 'registry:block',
        title: 'SplashCursor',
        description: 'Liquid splash burst at cursor with curling ripples and waves.',
        files: [
          {
            path: 'src/content/Animations/SplashCursor/SplashCursor.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'SplashCursor-JS-TW',
        type: 'registry:block',
        title: 'SplashCursor',
        description: 'Liquid splash burst at cursor with curling ripples and waves.',
        files: [
          {
            path: 'src/tailwind/Animations/SplashCursor/SplashCursor.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'SplashCursor-TS-CSS',
        type: 'registry:block',
        title: 'SplashCursor',
        description: 'Liquid splash burst at cursor with curling ripples and waves.',
        files: [
          {
            path: 'src/ts-default/Animations/SplashCursor/SplashCursor.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'SplashCursor-TS-TW',
        type: 'registry:block',
        title: 'SplashCursor',
        description: 'Liquid splash burst at cursor with curling ripples and waves.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/SplashCursor/SplashCursor.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'SplitText-JS-CSS',
        type: 'registry:block',
        title: 'SplitText',
        description: 'Splits text into characters / words for staggered entrance animation.',
        files: [
          {
            path: 'src/content/TextAnimations/SplitText/SplitText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'SplitText-JS-TW',
        type: 'registry:block',
        title: 'SplitText',
        description: 'Splits text into characters / words for staggered entrance animation.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/SplitText/SplitText.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'SplitText-TS-CSS',
        type: 'registry:block',
        title: 'SplitText',
        description: 'Splits text into characters / words for staggered entrance animation.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/SplitText/SplitText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'SplitText-TS-TW',
        type: 'registry:block',
        title: 'SplitText',
        description: 'Splits text into characters / words for staggered entrance animation.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/SplitText/SplitText.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'SpotlightCard-JS-CSS',
        type: 'registry:block',
        title: 'SpotlightCard',
        description: 'Dynamic spotlight follows cursor casting gradient illumination.',
        files: [
          {
            path: 'src/content/Components/SpotlightCard/SpotlightCard.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/SpotlightCard/SpotlightCard.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'SpotlightCard-JS-TW',
        type: 'registry:block',
        title: 'SpotlightCard',
        description: 'Dynamic spotlight follows cursor casting gradient illumination.',
        files: [
          {
            path: 'src/tailwind/Components/SpotlightCard/SpotlightCard.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'SpotlightCard-TS-CSS',
        type: 'registry:block',
        title: 'SpotlightCard',
        description: 'Dynamic spotlight follows cursor casting gradient illumination.',
        files: [
          {
            path: 'src/ts-default/Components/SpotlightCard/SpotlightCard.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/SpotlightCard/SpotlightCard.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'SpotlightCard-TS-TW',
        type: 'registry:block',
        title: 'SpotlightCard',
        description: 'Dynamic spotlight follows cursor casting gradient illumination.',
        files: [
          {
            path: 'src/ts-tailwind/Components/SpotlightCard/SpotlightCard.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Squares-JS-CSS',
        type: 'registry:block',
        title: 'Squares',
        description: 'Animated squares with scaling + direction customization.',
        files: [
          {
            path: 'src/content/Backgrounds/Squares/Squares.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Squares/Squares.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Squares-JS-TW',
        type: 'registry:block',
        title: 'Squares',
        description: 'Animated squares with scaling + direction customization.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Squares/Squares.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Squares-TS-CSS',
        type: 'registry:block',
        title: 'Squares',
        description: 'Animated squares with scaling + direction customization.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Squares/Squares.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Squares/Squares.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Squares-TS-TW',
        type: 'registry:block',
        title: 'Squares',
        description: 'Animated squares with scaling + direction customization.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Squares/Squares.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Stack-JS-CSS',
        type: 'registry:block',
        title: 'Stack',
        description: 'Layered stack with swipe animations and smooth transitions.',
        files: [
          {
            path: 'src/content/Components/Stack/Stack.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/Stack/Stack.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Stack-JS-TW',
        type: 'registry:block',
        title: 'Stack',
        description: 'Layered stack with swipe animations and smooth transitions.',
        files: [
          {
            path: 'src/tailwind/Components/Stack/Stack.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Stack-TS-CSS',
        type: 'registry:block',
        title: 'Stack',
        description: 'Layered stack with swipe animations and smooth transitions.',
        files: [
          {
            path: 'src/ts-default/Components/Stack/Stack.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/Stack/Stack.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Stack-TS-TW',
        type: 'registry:block',
        title: 'Stack',
        description: 'Layered stack with swipe animations and smooth transitions.',
        files: [
          {
            path: 'src/ts-tailwind/Components/Stack/Stack.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'StaggeredMenu-JS-CSS',
        type: 'registry:block',
        title: 'StaggeredMenu',
        description: 'Menu with staggered item animations and smooth transitions on open/close.',
        files: [
          {
            path: 'src/content/Components/StaggeredMenu/StaggeredMenu.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/StaggeredMenu/StaggeredMenu.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'StaggeredMenu-JS-TW',
        type: 'registry:block',
        title: 'StaggeredMenu',
        description: 'Menu with staggered item animations and smooth transitions on open/close.',
        files: [
          {
            path: 'src/tailwind/Components/StaggeredMenu/StaggeredMenu.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'StaggeredMenu-TS-CSS',
        type: 'registry:block',
        title: 'StaggeredMenu',
        description: 'Menu with staggered item animations and smooth transitions on open/close.',
        files: [
          {
            path: 'src/ts-default/Components/StaggeredMenu/StaggeredMenu.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/StaggeredMenu/StaggeredMenu.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'StaggeredMenu-TS-TW',
        type: 'registry:block',
        title: 'StaggeredMenu',
        description: 'Menu with staggered item animations and smooth transitions on open/close.',
        files: [
          {
            path: 'src/ts-tailwind/Components/StaggeredMenu/StaggeredMenu.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'StarBorder-JS-CSS',
        type: 'registry:block',
        title: 'StarBorder',
        description: 'Animated star / sparkle border orbiting content with twinkle pulses.',
        files: [
          {
            path: 'src/content/Animations/StarBorder/StarBorder.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/StarBorder/StarBorder.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'StarBorder-JS-TW',
        type: 'registry:block',
        title: 'StarBorder',
        description: 'Animated star / sparkle border orbiting content with twinkle pulses.',
        files: [
          {
            path: 'src/tailwind/Animations/StarBorder/StarBorder.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'StarBorder-TS-CSS',
        type: 'registry:block',
        title: 'StarBorder',
        description: 'Animated star / sparkle border orbiting content with twinkle pulses.',
        files: [
          {
            path: 'src/ts-default/Animations/StarBorder/StarBorder.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/StarBorder/StarBorder.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'StarBorder-TS-TW',
        type: 'registry:block',
        title: 'StarBorder',
        description: 'Animated star / sparkle border orbiting content with twinkle pulses.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/StarBorder/StarBorder.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Stepper-JS-CSS',
        type: 'registry:block',
        title: 'Stepper',
        description: 'Animated multi-step progress indicator with active state transitions.',
        files: [
          {
            path: 'src/content/Components/Stepper/Stepper.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/Stepper/Stepper.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Stepper-JS-TW',
        type: 'registry:block',
        title: 'Stepper',
        description: 'Animated multi-step progress indicator with active state transitions.',
        files: [
          {
            path: 'src/tailwind/Components/Stepper/Stepper.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Stepper-TS-CSS',
        type: 'registry:block',
        title: 'Stepper',
        description: 'Animated multi-step progress indicator with active state transitions.',
        files: [
          {
            path: 'src/ts-default/Components/Stepper/Stepper.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/Stepper/Stepper.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Stepper-TS-TW',
        type: 'registry:block',
        title: 'Stepper',
        description: 'Animated multi-step progress indicator with active state transitions.',
        files: [
          {
            path: 'src/ts-tailwind/Components/Stepper/Stepper.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'StickerPeel-JS-CSS',
        type: 'registry:block',
        title: 'StickerPeel',
        description: 'Sticker corner lift + peel interaction using 3D transform and shadow depth.',
        files: [
          {
            path: 'src/content/Animations/StickerPeel/StickerPeel.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/StickerPeel/StickerPeel.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'StickerPeel-JS-TW',
        type: 'registry:block',
        title: 'StickerPeel',
        description: 'Sticker corner lift + peel interaction using 3D transform and shadow depth.',
        files: [
          {
            path: 'src/tailwind/Animations/StickerPeel/StickerPeel.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'StickerPeel-TS-CSS',
        type: 'registry:block',
        title: 'StickerPeel',
        description: 'Sticker corner lift + peel interaction using 3D transform and shadow depth.',
        files: [
          {
            path: 'src/ts-default/Animations/StickerPeel/StickerPeel.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/StickerPeel/StickerPeel.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'StickerPeel-TS-TW',
        type: 'registry:block',
        title: 'StickerPeel',
        description: 'Sticker corner lift + peel interaction using 3D transform and shadow depth.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/StickerPeel/StickerPeel.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'TargetCursor-JS-CSS',
        type: 'registry:block',
        title: 'TargetCursor',
        description: 'A cursor follow animation with 4 corners that lock onto targets.',
        files: [
          {
            path: 'src/content/Animations/TargetCursor/TargetCursor.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Animations/TargetCursor/TargetCursor.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'TargetCursor-JS-TW',
        type: 'registry:block',
        title: 'TargetCursor',
        description: 'A cursor follow animation with 4 corners that lock onto targets.',
        files: [
          {
            path: 'src/tailwind/Animations/TargetCursor/TargetCursor.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'TargetCursor-TS-CSS',
        type: 'registry:block',
        title: 'TargetCursor',
        description: 'A cursor follow animation with 4 corners that lock onto targets.',
        files: [
          {
            path: 'src/ts-default/Animations/TargetCursor/TargetCursor.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Animations/TargetCursor/TargetCursor.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'TargetCursor-TS-TW',
        type: 'registry:block',
        title: 'TargetCursor',
        description: 'A cursor follow animation with 4 corners that lock onto targets.',
        files: [
          {
            path: 'src/ts-tailwind/Animations/TargetCursor/TargetCursor.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'TextCursor-JS-CSS',
        type: 'registry:block',
        title: 'TextCursor',
        description: 'Make any text element follow your cursor, leaving a trail of copies behind it.',
        files: [
          {
            path: 'src/content/TextAnimations/TextCursor/TextCursor.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/TextCursor/TextCursor.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'TextCursor-JS-TW',
        type: 'registry:block',
        title: 'TextCursor',
        description: 'Make any text element follow your cursor, leaving a trail of copies behind it.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/TextCursor/TextCursor.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'TextCursor-TS-CSS',
        type: 'registry:block',
        title: 'TextCursor',
        description: 'Make any text element follow your cursor, leaving a trail of copies behind it.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/TextCursor/TextCursor.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/TextCursor/TextCursor.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'TextCursor-TS-TW',
        type: 'registry:block',
        title: 'TextCursor',
        description: 'Make any text element follow your cursor, leaving a trail of copies behind it.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/TextCursor/TextCursor.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'TextPressure-JS-CSS',
        type: 'registry:block',
        title: 'TextPressure',
        description: 'Characters scale / warp interactively based on pointer pressure zone.',
        files: [
          {
            path: 'src/content/TextAnimations/TextPressure/TextPressure.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'TextPressure-JS-TW',
        type: 'registry:block',
        title: 'TextPressure',
        description: 'Characters scale / warp interactively based on pointer pressure zone.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/TextPressure/TextPressure.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'TextPressure-TS-CSS',
        type: 'registry:block',
        title: 'TextPressure',
        description: 'Characters scale / warp interactively based on pointer pressure zone.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/TextPressure/TextPressure.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'TextPressure-TS-TW',
        type: 'registry:block',
        title: 'TextPressure',
        description: 'Characters scale / warp interactively based on pointer pressure zone.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/TextPressure/TextPressure.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'TextType-JS-CSS',
        type: 'registry:block',
        title: 'TextType',
        description: 'Typewriter effect with blinking cursor and adjustable typing cadence.',
        files: [
          {
            path: 'src/content/TextAnimations/TextType/TextType.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/TextType/TextType.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'TextType-JS-TW',
        type: 'registry:block',
        title: 'TextType',
        description: 'Typewriter effect with blinking cursor and adjustable typing cadence.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/TextType/TextType.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'TextType-TS-CSS',
        type: 'registry:block',
        title: 'TextType',
        description: 'Typewriter effect with blinking cursor and adjustable typing cadence.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/TextType/TextType.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/TextType/TextType.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'TextType-TS-TW',
        type: 'registry:block',
        title: 'TextType',
        description: 'Typewriter effect with blinking cursor and adjustable typing cadence.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/TextType/TextType.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Threads-JS-CSS',
        type: 'registry:block',
        title: 'Threads',
        description: 'Animated pattern of lines forming a fabric-like motion.',
        files: [
          {
            path: 'src/content/Backgrounds/Threads/Threads.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Threads/Threads.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Threads-JS-TW',
        type: 'registry:block',
        title: 'Threads',
        description: 'Animated pattern of lines forming a fabric-like motion.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Threads/Threads.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Threads-TS-CSS',
        type: 'registry:block',
        title: 'Threads',
        description: 'Animated pattern of lines forming a fabric-like motion.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Threads/Threads.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Threads/Threads.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Threads-TS-TW',
        type: 'registry:block',
        title: 'Threads',
        description: 'Animated pattern of lines forming a fabric-like motion.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Threads/Threads.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'TiltedCard-JS-CSS',
        type: 'registry:block',
        title: 'TiltedCard',
        description: '3D perspective tilt card reacting to pointer.',
        files: [
          {
            path: 'src/content/Components/TiltedCard/TiltedCard.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Components/TiltedCard/TiltedCard.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'TiltedCard-JS-TW',
        type: 'registry:block',
        title: 'TiltedCard',
        description: '3D perspective tilt card reacting to pointer.',
        files: [
          {
            path: 'src/tailwind/Components/TiltedCard/TiltedCard.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'TiltedCard-TS-CSS',
        type: 'registry:block',
        title: 'TiltedCard',
        description: '3D perspective tilt card reacting to pointer.',
        files: [
          {
            path: 'src/ts-default/Components/TiltedCard/TiltedCard.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Components/TiltedCard/TiltedCard.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'TiltedCard-TS-TW',
        type: 'registry:block',
        title: 'TiltedCard',
        description: '3D perspective tilt card reacting to pointer.',
        files: [
          {
            path: 'src/ts-tailwind/Components/TiltedCard/TiltedCard.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'TrueFocus-JS-CSS',
        type: 'registry:block',
        title: 'TrueFocus',
        description: 'Applies dynamic blur / clarity based over a series of words in order.',
        files: [
          {
            path: 'src/content/TextAnimations/TrueFocus/TrueFocus.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/TrueFocus/TrueFocus.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'TrueFocus-JS-TW',
        type: 'registry:block',
        title: 'TrueFocus',
        description: 'Applies dynamic blur / clarity based over a series of words in order.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/TrueFocus/TrueFocus.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'TrueFocus-TS-CSS',
        type: 'registry:block',
        title: 'TrueFocus',
        description: 'Applies dynamic blur / clarity based over a series of words in order.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/TrueFocus/TrueFocus.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/TrueFocus/TrueFocus.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'TrueFocus-TS-TW',
        type: 'registry:block',
        title: 'TrueFocus',
        description: 'Applies dynamic blur / clarity based over a series of words in order.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/TrueFocus/TrueFocus.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'VariableProximity-JS-CSS',
        type: 'registry:block',
        title: 'VariableProximity',
        description: 'Letter styling changes continuously with pointer distance mapping.',
        files: [
          {
            path: 'src/content/TextAnimations/VariableProximity/VariableProximity.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/TextAnimations/VariableProximity/VariableProximity.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'VariableProximity-JS-TW',
        type: 'registry:block',
        title: 'VariableProximity',
        description: 'Letter styling changes continuously with pointer distance mapping.',
        files: [
          {
            path: 'src/tailwind/TextAnimations/VariableProximity/VariableProximity.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'VariableProximity-TS-CSS',
        type: 'registry:block',
        title: 'VariableProximity',
        description: 'Letter styling changes continuously with pointer distance mapping.',
        files: [
          {
            path: 'src/ts-default/TextAnimations/VariableProximity/VariableProximity.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/TextAnimations/VariableProximity/VariableProximity.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'VariableProximity-TS-TW',
        type: 'registry:block',
        title: 'VariableProximity',
        description: 'Letter styling changes continuously with pointer distance mapping.',
        files: [
          {
            path: 'src/ts-tailwind/TextAnimations/VariableProximity/VariableProximity.tsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Waves-JS-CSS',
        type: 'registry:block',
        title: 'Waves',
        description: 'Layered lines that form smooth wave patterns with animation.',
        files: [
          {
            path: 'src/content/Backgrounds/Waves/Waves.jsx',
            type: 'registry:component'
          },
          {
            path: 'src/content/Backgrounds/Waves/Waves.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Waves-JS-TW',
        type: 'registry:block',
        title: 'Waves',
        description: 'Layered lines that form smooth wave patterns with animation.',
        files: [
          {
            path: 'src/tailwind/Backgrounds/Waves/Waves.jsx',
            type: 'registry:component'
          }
        ]
      },
      {
        name: 'Waves-TS-CSS',
        type: 'registry:block',
        title: 'Waves',
        description: 'Layered lines that form smooth wave patterns with animation.',
        files: [
          {
            path: 'src/ts-default/Backgrounds/Waves/Waves.tsx',
            type: 'registry:component'
          },
          {
            path: 'src/ts-default/Backgrounds/Waves/Waves.css',
            type: 'registry:item'
          }
        ]
      },
      {
        name: 'Waves-TS-TW',
        type: 'registry:block',
        title: 'Waves',
        description: 'Layered lines that form smooth wave patterns with animation.',
        files: [
          {
            path: 'src/ts-tailwind/Backgrounds/Waves/Waves.tsx',
            type: 'registry:component'
          }
        ]
      }
    ]
  }
});
