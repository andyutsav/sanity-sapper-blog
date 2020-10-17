export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5f8b267ada74881b50816cf4',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-fjxp3g8o',
                  apiId: '6fd3a8b7-657f-4189-be0d-f08047d5482a'
                },
                {
                  buildHookId: '5f8b267af3a8261abe266f9d',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-2kd1je1o',
                  apiId: '9f3b91eb-a94e-48c1-8e36-ba26b3003d55'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyutsav/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-2kd1je1o.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
