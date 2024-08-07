import { PrismaClient } from '@prisma/client';
import { DateTime } from 'luxon';

const dateOptions = { month: 'long', year: 'numeric' };

const prisma = new PrismaClient();

async function main() {
  const experiencesCount = await prisma.experience.count();
  if (experiencesCount === 0) {
    await prisma.experience.createMany({
      data:     [
        {
          title: 'Développeur Fullstack Node.js / Vue.js',
          company: 'SpinForEat',
          location: 'Paris',
          startDate: DateTime.fromISO('2024-04').setLocale('fr').toLocaleString(dateOptions),
          endDate: DateTime.fromISO('2024-08').setLocale('fr').toLocaleString(dateOptions),
          description: 'Entreprise foodtech de fidélisation et digitalisation de menus pour restaurant, la mission se concentre sur la refonte from scratch et la modernisation de l’application',
          tasks: [
            'Mise en place de backend de gestion des promotions (Donnés, migration, controller et services)',
            'Création des interfaces utilisateurs des promotions (en accord avec les maquettes)',
            'Création du backend de shorter d\'url pour les QR codes des menus',
            'Intégration de l\'api google map places autocompletion',
            'Mise en place du la fonction forgotten password'
          ],
          stack: ['Node.js', 'Vue.js 3', 'Typescript', 'TanStack Query', 'Prisma', 'PostgreSQL'],
          contractType: 'FREELANCE',
          presenceType: 'REMOTE',
        },
        {
          title: 'Développeur Full Stack (Node.js / React)',
          company: 'FASST',
          location: 'Bordeaux',
          startDate: DateTime.fromISO('2023-11').setLocale('fr').toLocaleString(dateOptions),
          endDate: DateTime.fromISO('2024-02').setLocale('fr').toLocaleString(dateOptions),
          description: 'Accélérateur digital pour assurance',
          tasks: [
            'Maintenance opérationnelle applicative',
            'Evolution du design system, création de test unitaire et mise à jour du story book',
            'Finalisation du parcours de récolte de besoins et de mise en place du parcours de simulation d\'assurance',
            'Correction de bugs existants'
          ],
          stack: ['Node.js', 'React.js', 'GraphQL', 'Jest', 'Ramda', 'Docker', 'Strory Book'],
          contractType: 'FREELANCE',
          presenceType: 'REMOTE',
        },
        {
          title: 'Développeur Full Stack (Node.js / React)',
          company: 'Agile4me',
          location: 'Paris',
          startDate: DateTime.fromISO('2023-03').setLocale('fr').toLocaleString(dateOptions),
          endDate: DateTime.fromISO('2023-08').setLocale('fr').toLocaleString(dateOptions),
          description: 'Editeur de logiciel de génération d\'indicateurs agiles',
          tasks: [
            'Mise à jour des règles de générations de KPI',
            'Ajout d\'un nouvel indicateur comme filtre dans les tableaux existants',
            'Correction de bugs existants'
          ],
          stack: ['Node.js', 'React.js', 'JIRA API'],
          contractType: 'FREELANCE',
          presenceType: 'REMOTE',
        },
        {
          title: 'Développeur Full Stack (Node.js / React)',
          company: 'Decathlon Technology',
          location: 'Lille',
          startDate: DateTime.fromISO('2022-05').setLocale('fr').toLocaleString(dateOptions),
          endDate: DateTime.fromISO('2023-03').setLocale('fr').toLocaleString(dateOptions),
          description: 'Equipe NEMO: Développement d\'un headless CMS servant à configurer les sites Décathlon',
          tasks: [],
          stack: ['Node.js', 'TypeScript', 'React.js', 'Strapi', 'Cypress'],
          contractType: 'FREELANCE',
          presenceType: 'HYBRID',
        },
        {
          title: 'Développeur Full Stack (Node.js / Angular)',
          company: 'Air Liquide',
          location: 'Gentilly',
          startDate: DateTime.fromISO('2021-05').setLocale('fr').toLocaleString(dateOptions),
          endDate: DateTime.fromISO('2022-03').setLocale('fr').toLocaleString(dateOptions),
          description: 'Équipe WALE: Développement du SAAS de signature de prescription médicale pour médecins soignants des patients ateint de diabète ou d`\'apnée du sommeil, et nécessitant des équipements ou des consommables',
          tasks: [
            'Maintenance opérationnelle extranet et BackOffice médecin',
            'Mise en place BackEnd et FrontEnd extranet et BackOffice patient',
            'Mise en place des test unitaire (JEST) sur les API patient',
          ],
          stack: ['Node.js', 'Angular', 'Jest', 'GraphQL', 'MongoDB'],
          contractType: 'CONSULTANT',
          presenceType: 'HYBRID',
        },
        {
          title: 'Développeur Full Stack (Node.js / React)',
          company: 'Agile4me',
          location: 'Paris',
          startDate: DateTime.fromISO('2021-01').setLocale('fr').toLocaleString(dateOptions),
          endDate: DateTime.fromISO('2021-04').setLocale('fr').toLocaleString(dateOptions),
          description: 'Editeur de logiciel de génération d\'indicateurs agiles',
          tasks: [
            'Mise à jour des règles de générations de KPI',
            'Ajout d\'un nouvel indicateur comme filtre dans les tableaux existants',
            'Correction de bugs existants',
          ],
          stack: ['Node.js', 'React.js', 'JIRA API'],
          contractType: 'CONSULTANT',
          presenceType: 'REMOTE',
        },
        {
          title: 'Développeur Back End (Node.js / Typescript)',
          company: 'Sephora SAS',
          location: 'Paris',
          startDate: DateTime.fromISO('2020-07').setLocale('fr').toLocaleString(dateOptions),
          endDate: DateTime.fromISO('2020-12').setLocale('fr').toLocaleString(dateOptions),
          description: 'Création d`\'un Back-End pour l\'enregistrement des commandes click and collect des magasins Sephora, afin de mettre à disposition les données pour une application iOS utilisé par les vendeuses en magasin',
          tasks: [
            'Mise en place du Back-End de l\'application',
            'Création des test unitaires',
            'Intégration continue avec Bitbucket',
          ],
          stack: ['TypeScript', 'Node.js', 'Firebase', 'Terraform'],
          contractType: 'CONSULTANT',
          presenceType: 'REMOTE',
        },
        {
          title: 'Développeur Full Stack (Node.js / Typescript)',
          company: 'SNCF Connect',
          location: 'La Défense',
          startDate: DateTime.fromISO('2019-02').setLocale('fr').toLocaleString(dateOptions),
          endDate: DateTime.fromISO('2020-07').setLocale('fr').toLocaleString(dateOptions),
          description: 'L\'équipe WEBANALYTICS, est chargée de l\'intégration et de la maintenance des tags gérant Ominiture (Adobe) et Eulerian Analytics pour gérer le tracking des utilisateurs du site sncf-connect',
          tasks: [
            'Amélioration / Refonte du framework de tracking (passage d\'un legacy en Javascript à une application modulaire en Typescript)',
            'Développement de plusieurs web app internes (BackEnd Api REST, Front-End React)',
            'Développement d\'un POC pour l\'intégration de Didomi pour la gestion des cookies (RGPD)',
          ],
          stack: ['JavaScript', 'TypeScript', 'React.js', 'MongoDB', 'Jest', 'Cypress'],
          contractType: 'CONSULTANT',
          presenceType: 'HYBRID',
        },
        {
          title: 'Développeur Back End Node.js',
          company: 'E-TF1',
          location: 'Boulogne-Billancourt',
          startDate: DateTime.fromISO('2018-01').setLocale('fr').toLocaleString(dateOptions),
          endDate: DateTime.fromISO('2018-11').setLocale('fr').toLocaleString(dateOptions),
          description: 'Projet SVOD TFOUMAX : Le pôle "Payant" s’occupe du développement BackEnd et Front-End des plateformes de VOD MyTF1VOD et SVOD TFOUMAX',
          tasks: [
            'Migration back-end de l\'authentification legacy de TF1 vers le système SSO "Gigya", multi-support (Web, iOS et Android)',
            'Intégration des vidéos de TFOUMAX dans l’offre SVOD de la box VideoFutur',
            'Création de routes exposant les données pour Android TV',
            'Exposition du catalogue TFOUMAX pour APPLE TV',
            'Amélioration de la performance de la gestion des reçus in app iOS et Android',
          ],
          stack: ['Node.js', 'PostgreSQL', 'MongoDB', 'Cucumber'],
          contractType: 'CONSULTANT',
          presenceType: 'ON_SITE',
        },
        {
          title: 'Analyste Réalisateur TALEND',
          company: 'RAKUTEN',
          location: 'Paris',
          startDate: DateTime.fromISO('2010-12').setLocale('fr').toLocaleString(dateOptions),
          endDate: DateTime.fromISO('2017-11').setLocale('fr').toLocaleString(dateOptions),
          description: 'RAKUTEN / Priceminister est un site de E-commerce pratiquant la vente indirecte. Il se place en tiers de confiance entre un acheteur et un vendeur',
          tasks: [
            'ANALYSTE-REALISATEUR pour le pôle IMPORT',
            'Développeur TALEND pour le pôle catalogue'
          ],
          stack: ['JavaScript (à la toute fin)', 'Talend Open Studio'],
          contractType: 'CDI',
          presenceType: 'ON_SITE',
        },
      ]
    });
  }

  const skillsCount = await prisma.skill.count();
  if (skillsCount === 0) {
    await prisma.skill.createMany({
      data: [
        {
          name: 'Node.js',
          category: 'BACKEND',
          rating: 4,
        },
        {
          name: 'Express.js',
          category: 'BACKEND',
          rating: 4,
        },
        {
          name: 'GraphQL',
          category: 'BACKEND',
          rating: 2,
        },
        {
          name: 'Angular',
          category: 'FRAMEWORK',
          rating: 2,
        },
        {
          name: 'Next.js',
          category: 'FRAMEWORK',
          rating: 2,
        },
        {
          name: 'React',
          category: 'FRONTEND',
          rating: 2,
        },
        {
          name: 'Vue.js',
          category: 'FRONTEND',
          rating: 2,
        },
        {
          name: 'HTML5',
          category: 'FRONTEND',
          rating: 3,
        },
        {
          name: 'CSS3',
          category: 'FRONTEND',
          rating: 3,
        },
        {
          name: 'MongoDB',
          category: 'DATABASE',
          rating: 3,
        },
        {
          name: 'Firebase',
          category: 'DATABASE',
          rating: 2,
        },
        {
          name: 'PostgreSQL',
          category: 'DATABASE',
          rating: 3,
        },
        {
          name: 'Git',
          category: 'TOOLS',
          rating: 4,
        },
        {
          name: 'Genkins',
          category: 'TOOLS',
          rating: 2,
        },
        {
          name: 'Docker',
          category: 'TOOLS',
          rating: 3,
        }
      ]
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });