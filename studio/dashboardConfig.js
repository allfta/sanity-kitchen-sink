export default {
  widgets: [
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
                  buildHookId: '5f917b53e03be3013af5dfff',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-sop3u46f',
                  apiId: '0b2e9dcb-7c85-4694-9930-238b459794f1'
                },
                {
                  buildHookId: '5f917b53cfcdb4f8a17c4d73',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-y569i3zk',
                  apiId: '3561d011-732f-4043-adfd-05a74b38e2c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/allfta/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-y569i3zk.netlify.app', category: 'apps'}
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
