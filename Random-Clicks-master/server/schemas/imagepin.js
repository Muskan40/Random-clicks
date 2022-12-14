export default{
    name:'imagepin',
    title:'ImagePin',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string',
        },
        {
            name:'about',
            title:'About',
            type:'string'
        },
        {
            name:'destination',
            title:'Destination',
            type:'url'
        },
        {
           name:'category',
           title:'Category',
           type:'string', 
        },
        {
            name:'image',
            title:'Image',
            type:'image',
            options:{
                hotspot:true,
            },
        },
        {
            name:'userId',
            title:'UserId',
            type:'string',
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        {
            name:'save',
            title:'Save',
            type:'array',
            of:[{
                type:'save'// schema of save is used here.
            }]
        },
        {
            name:'comments',
            title:'Comments',
            type:'array',
            of:[{type:'comment'}]// schema of comment is used here
        }
    ]
}