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
                  buildHookId: '604c7ef4648d6ca5e29cccb4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g7zy94wg',
                  apiId: '612599d0-8af3-452f-bb48-9a73e56676fb'
                },
                {
                  buildHookId: '604c7ef5a9112ea7c84f9fc3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kcwi4t3z',
                  apiId: '05156e08-006d-482a-abfb-4127cb79b9f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fdanielsen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kcwi4t3z.netlify.app', category: 'apps'}
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
