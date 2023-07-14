import {
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    juniorJobs,
    kenzieHub,
    nuKenzie,
    burgueria,
    controlFinance,
    gitSearch,
    kenzieEmpresas,
    express,
    postgres,
    styledComponents,
    github2,
    fullstack,
    python,
    django,
    next,
    nest,
    musicApp,
    carHub
  } from '../assets'
  
  export const navLinks = [
    {
      id: 'about',
      title: 'Sobre',
    },
    {
      id: 'work',
      title: 'Projetos',
    },
    {
      id: 'contact',
      title: 'Contatos',
    },
  ]
  
  const services = [
    {
      title: 'Frontend Developer',
      icon: reactjs,
    },
    {
      title: 'Backend Developer',
      icon: nodejs,
    },
    {
      title: 'Fullstack Developer',
      icon: fullstack,
    },
]
  
  const technologies = [
    {
      name: 'HTML 5',
      icon: html,
    },
    {
      name: 'CSS 3',
      icon: css,
    },
    {
      name: 'JavaScript',
      icon: javascript,
    },
    {
      name: 'TypeScript',
      icon: typescript,
    },
    {
      name: 'React JS',
      icon: reactjs,
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind,
    },
    {
      name: 'Node JS',
      icon: nodejs,
    },
    {
      name: 'git',
      icon: git,
    },
    {
      name: 'figma',
      icon: figma,
    },
    {
      name: 'Express Js',
      icon: express,
    },
    {
      name: 'PostgreSQL',
      icon: postgres,
    },
    {
      name: 'Python',
      icon : python,
    },
    {
      name: 'NextJs',
      icon : next,
    },
    {
      name: 'NestJs',
      icon : nest,
    }
  ]
  
 const projects = [
    {
    name: 'Music App FullStack',
    description:
      'Um app FullStack de musicas que você consegue ouvi uma musica, pular para proxima e escolher o tempo da musica. novas features em desenvolvimente',
    tags: [
      {
        name: 'Javascript',
        color: 'text-yellow-300',
      },
     {
        name: 'Css',
        color: 'blue-text-gradient',
      },
      {
        name: 'Html',
        color: 'text-red-600',
      },
      {
        name: 'Next13',
        color: 'text-gray-600',
      },
      {
        name: 'NodeJs',
        color: 'green-text-gradient',
      },
      {
        name: 'NestJs',
        color: 'text-red-600',
      },
      {
        name: 'PostGres',
        color: 'blue-text-gradient',
      },
    ],
    image: musicApp,
    source_code_link: 'https://github.com/Leonardo-L-Cunha/Music-full-stack',
    source_vercel_link:'https://musicapp-eta.vercel.app/'
    },
    {
      name: 'Car ShowCase',
      description:
        'Uma Aplicação front-end para amantes de carros, usando next13 e consumindo a API de carros de karsNinja',
      tags: [
        {
          name: 'Javascript',
          color: 'text-yellow-300',
        },
       {
          name: 'Css',
          color: 'blue-text-gradient',
        },
        {
          name: 'Html',
          color: 'text-red-600',
        },
        
        {
          name: 'Next13',
          color: 'text-gray-600',
        },
        {
          name: 'APIRest',
          color: 'text-yellow-600',
        }
      ],
      image: carHub,
      source_code_link: 'https://github.com/Leonardo-L-Cunha/car_showcase',
      source_vercel_link:'https://github.com/Leonardo-L-Cunha/car_showcase'
      },
    {
      name: 'Junior Jobs',
      description:
        'Site traz vagas apenas para desenvolvedores júniors,onde tanto os devs quanto as empresas podem se cadastrar. Os devs podem se candidatar às vagas que as empresas cadastrarem, e de acordo com o perfil do mesmo a empresa pode contratá lo',
      tags: [
        {
          name: 'React',
          color: 'blue-text-gradient',
        },
        {
          name: 'FakeAPI',
          color: 'green-text-gradient',
        },
        {
          name: 'Styled-components',
          color: 'orange-text-gradient',
        },
      ],
      image: juniorJobs,
      source_code_link: 'https://github.com/Project-Junior-Jobs/Junior-jobs',
      source_vercel_link:'https://junior-jobs-eta.vercel.app/'
    },
    {
      name: 'Kenzie Hub',
      description:
        'Projeto onde aprendemos sobre context do react, O projeto tem uma pagina de cadastro, login e a homepage onde vc pode cadastrar uma tecnologia, editar e deletar',
      tags: [
        {
          name: 'React',
          color: 'blue-text-gradient',
        },
        {
          name: 'APIrest',
          color: 'green-text-gradient',
        },
        {
          name: 'Context',
          color: 'blue-text-gradient',
        },
      ],
      image: kenzieHub,
      source_code_link: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-leonardo-l-cunha',
      source_vercel_link:'https://react-entrega-kenzie-hub-leonardo-l-cunha.vercel.app/'
    },
    {
      name: 'Nu Kenzie',
      description:
        'Minha primeira aplicação usando o React, uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas.',
      tags: [
        {
          name: 'React',
          color: 'blue-text-gradient',
        },
       {
          name: 'Css',
          color: 'blue-text-gradient',
        },
      ],
      image: nuKenzie,
      source_code_link: 'https://github.com/Kenzie-Academy-Brasil-Developers/entrega-s1-nukenzie-leonardo-l-cunha',
      source_vercel_link:'https://entrega-s1-nukenzie-leonardo-l-cunha.vercel.app/'
    },
    {
      name: 'Kenzie Burger',
      description:
        'O objetivo desta entrega é construir uma aplicação baseada no que aprenderam em React e usando Typescript, como também aperfeiçoar suas habilidades de estilização.',
      tags: [
        {
          name: 'React',
          color: 'blue-text-gradient',
        },
       {
          name: 'Typescript',
          color: 'blue-text-gradient',
        },
        {
          name: 'APIrest',
          color: 'green-text-gradient',
        },
      ],
      image: burgueria,
      source_code_link: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-hamburgueria-v2-leonardo-l-cunha',
      source_vercel_link:'https://react-entrega-hamburgueria-v2-leonardo-l-cunha.vercel.app/'
    },
    {
      name: 'Control Finance',
      description:
        'O objetivo desta aplicação de controle de gastos financeiros, onde o usuário vai, inserir um valor por meio de um input, definir seu tipo por meio de um botão, se será entrada ou saída, e, cadastrar no sistema.',
      tags: [
        {
          name: 'Javascript',
          color: 'text-yellow-300',
        },
       {
          name: 'Css',
          color: 'blue-text-gradient',
        },
        {
          name: 'Html',
          color: 'text-red-600',
        },
      ],
      image: controlFinance,
      source_code_link: 'https://github.com/Kenzie-Academy-Brasil-Developers/control-finance-Leonardo-L-Cunha',
      source_vercel_link:'https://control-finance-leonardo-l-cunha.vercel.app/'
    },
    {
      name: 'Git Search',
      description:
        'um ambiente virtual visando fornecer um layout simples e intuitivo quando estamos procurando por um desenvolvedor e queremos ver seus repositórios públicos.',
      tags: [
        {
          name: 'Javascript',
          color: 'text-yellow-300',
        },
       {
          name: 'Css',
          color: 'blue-text-gradient',
        },
        {
          name: 'Html',
          color: 'text-red-600',
        },
        {
          name: 'APIrest',
          color: 'green-text-gradient',
        },
      ],
      image: gitSearch,
      source_code_link: 'https://github.com/Kenzie-Academy-Brasil-Developers/gitSearchBase-Leonardo-L-Cunha',
      source_vercel_link:'https://git-search-base-leonardo-l-cunha.vercel.app/'
    },
    
  ]
  
  export { services, technologies, projects }