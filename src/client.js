import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    projectId: '9faks0x9',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    // token: process.env.REACT_APP_SANITY_TOKEN,
    token: 'skqa7ThyX7nu33al0DzQJmkuUpLflQOn10uioaya7M1JEya0fc5APhIGUPkuRWNGbZj8trvXzZtwlwQjYutS26tFoYjVQLf3u3VJf2a2x0vQouzY4t6B9O7s5uWqACg14tIsuymIepWbqv2YPIQFcX6lGc9w6HzVCnleCOZLz8aKRfeSRJh8',
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
