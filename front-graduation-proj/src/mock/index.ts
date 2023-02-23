import type { MockMethod } from 'vite-plugin-mock'

export default [
    {
        url: '/api/testGet',
        statusCode: 200,
        response: {
            name: '@cname',
            'sex|1': ['男', '女'],
            'age|18-60': 24,
        },
    },
] as MockMethod[]
