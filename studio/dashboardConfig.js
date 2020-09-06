export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f552e5ee700eed5155ea383',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ebikymfn',
                  apiId: 'cf27d4bf-773a-4b7e-9d66-31044451c5ea'
                },
                {
                  buildHookId: '5f552e5ee700eed6725ea2f1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wzmz43gy',
                  apiId: 'e8550560-157a-449a-b668-b232d901551c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JonathanQuiros/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wzmz43gy.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
