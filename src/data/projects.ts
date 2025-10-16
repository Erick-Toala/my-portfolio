// src/data/projects.js
import NextJSIcon from "../components/icons/NextJSIcon.astro";
import DjangoIcon from "../components/icons/DjangoIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import BootstrapIcon from "../components/icons/BootstrapIcon.astro";
import PostresqlIcon from "../components/icons/PostgresSQLIcon.astro";

export const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJSIcon,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: TailwindIcon,
  },
  DJANGO: {
    name: "Django",
    class: "bg-[#2ba977] text-white",
    icon: DjangoIcon,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    class: "bg-[#8c19fe] text-white",
    icon: BootstrapIcon,
  },
  POSTGRESQL: {
    name: "PostgreSQL",
    class: "bg-[#336791] text-white",
    icon: PostresqlIcon,
  },
};

export const PROJECTS = [
  {
    title: "IoT Uleam",
    slug: "iotuleam",
    description:
      "Una plataforma web para monitoreo y visualización de datos de sensores IoT en tiempo real.",
    image: "/projects/iotuleam.png",
    images: [ // nuevas imágenes adicionales
      "/projects/iot01.png",
      "/projects/iot02.png",
      "/projects/iot03.png"
    ],
    respository: "",
    link: "https://iot.uleam.edu.ec/es",
    tags: [TAGS.NEXT, TAGS.DJANGO, TAGS.TAILWIND, TAGS.POSTGRESQL],
  },
  {
    title: "Love and Travel",
    slug: "travelweb",
    description:
      "Una plataforma web para compartir viajes y experiencias junto a mi pareja.",
    image: "/projects/travelweb.png",
    images: [ // nuevas imágenes adicionales
      "/projects/lat01.png",
      "/projects/lat02.png",
      "/projects/lat03.png",
      "/projects/lat04.png",
      "/projects/lat05.png",
    ],
    respository: "https://travelweb-proyect.vercel.app",
    link: "https://travelweb-proyect.vercel.app",
    tags: [TAGS.NEXT, TAGS.DJANGO, TAGS.TAILWIND],
  },
  {
    title: "Arenales League",
    slug: "arenalesleague",
    description:
      "Una plataforma web para gestionar ligas deportivas.",
    image: "/projects/arenalesleague.png",
    images: [ // nuevas imágenes adicionales
      "/projects/al01.png",
      "/projects/al02.png",
      "/projects/al03.png",
      "/projects/al04.png",
      "/projects/al05.png",
      "/projects/al06.png",
    ],
    respository: "",
    link: "",
    tags: [TAGS.DJANGO, TAGS.BOOTSTRAP],
  },
];
