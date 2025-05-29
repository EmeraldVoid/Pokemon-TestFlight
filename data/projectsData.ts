interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Pokemon TestFlight',
    description: `A fan-made Pokémon game focused on open-world exploration and experimentation, built with Pokémon Essentials and PSDK.
    The game is currently in development but does not have a release date yet.`,
    imgSrc: '/static/images/google.png',
    href: 'https://github.com/EmeraldVoid/Pokemon-TestFlight',
  },
  
]

export default projectsData
