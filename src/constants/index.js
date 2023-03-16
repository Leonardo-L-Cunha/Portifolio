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
    
  } from "../assets"
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Projetos",
    },
    {
      id: "contact",
      title: "Contatos",
    },
  ]
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
]
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
   {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ]
  
 const projects = [
    {
      name: "Junior Jobs",
      description:
        "Site traz vagas apenas para desenvolvedores júniors,onde tanto os devs quanto as empresas podem se cadastrar. Os devs podem se candidatar às vagas que as empresas cadastrarem, e de acordo com o perfil do mesmo a empresa pode contratá lo",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "fakeAPI",
          color: "green-text-gradient",
        },
        {
          name: "styled-components",
          color: "pink-text-gradient",
        },
      ],
      image: juniorJobs,
      source_code_link: "https://github.com/Project-Junior-Jobs/Junior-jobs",
    },
    {
      name: "Kenzie Hub",
      description:
        "Projeto onde aprendemos sobre context do react, O projeto tem uma pagina de cadastro, login e a homepage onde vc pode cadastrar uma tecnologia, editar e deletar",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "context",
          color: "pink-text-gradient",
        },
      ],
      image: kenzieHub,
      source_code_link: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-leonardo-l-cunha",
    },
    {
      name: "Nu Kenzie",
      description:
        "Minha primeira aplicação usando o React, uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
       {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: nuKenzie,
      source_code_link: "https://github.com/Kenzie-Academy-Brasil-Developers/entrega-s1-nukenzie-leonardo-l-cunha",
    },
    {
      name: "Kenzie Burger",
      description:
        "O objetivo desta entrega é construir uma aplicação baseada no que aprenderam em React e usando Typescript, como também aperfeiçoar suas habilidades de estilização.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
       {
          name: "Typescript",
          color: "pink-text-gradient",
        },
        {
          name: "APIrest",
          color: "pink-text-gradient",
        },
      ],
      image: burgueria,
      source_code_link: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-hamburgueria-v2-leonardo-l-cunha",
    },
    {
      name: "Control Finance",
      description:
        "O objetivo desta aplicação de controle de gastos financeiros, onde o usuário vai, inserir um valor por meio de um input, definir seu tipo por meio de um botão, se será entrada ou saída, e, cadastrar no sistema.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
       {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Html",
          color: "pink-text-gradient",
        },
      ],
      image: controlFinance,
      source_code_link: "https://github.com/Kenzie-Academy-Brasil-Developers/control-finance-Leonardo-L-Cunha",
    },
    {
      name: "Git Search",
      description:
        "um ambiente virtual visando fornecer um layout simples e intuitivo quando estamos procurando por um desenvolvedor e queremos ver seus repositórios públicos.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
       {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Html",
          color: "pink-text-gradient",
        },
        {
          name: "APIrest",
          color: "pink-text-gradient",
        },
      ],
      image: gitSearch,
      source_code_link: "https://github.com/Kenzie-Academy-Brasil-Developers/gitSearchBase-Leonardo-L-Cunha",
    },
    {
      name: "Kenzie Empresas",
      description:
        " Principal objetivo é simular um MVP de uma aplicação de gestão de RH com dois tipos de usuários, um sendo o usuário comum, sendo um funcionário, na qual tem poucas funcionalidades e outra sendo a maquina admin, que gerencia toda a aplicação",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
       {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "Html",
          color: "pink-text-gradient",
        },
        {
          name: "APIrest",
          color: "pink-text-gradient",
        },
      ],
      image: kenzieEmpresas,
      source_code_link: "https://github.com/Kenzie-Academy-Brasil-Developers/m2-projeto-frotend-empresas-Leonardo-L-Cunha",
    },
  ]
  
  export { services, technologies, projects }