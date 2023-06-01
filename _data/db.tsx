// export const towns = [
//     {
//         "slug": 'castle',
//         "title": "Castle",
//         "coverImage": "castle.png",
//     },
//     {
//         "slug": 'aws',
//         "title": "AWS crump",
//         "excerpt": "Place for topics related to AWS",
//         "coverImage": "/assets/logo.png",
//         "content": "",
//         "top": true
//     },
//     {
//         "slug": 'basics',
//         "title": "Basics",
//         "excerpt": "Basic stuff which you already know",
//         "coverImage": "/assets/logo.png",
//         "content": "",
//         "top": true
//     },
//     {
//         "slug": 'data-ocean',
//         "title": "Data Ocean",
//         "excerpt": "In a world of data lakes, data rivers - we need something new let it be data ocean :) ",
//         "coverImage": "/assets/logo.png",
//         "content": "",
//         "top": true
//     }
// ]

// export const tags = [
//     {
//         "slug": 's3',
//         "title": "AWS S3",
//         "excerpt": "",
//         "coverImage": "/assets/logo.png",
//         "content": ""
//     },
//     {
//         "slug": 'aws',
//         "title": "AWS",
//         "excerpt": "",
//         "coverImage": "/assets/logo.png",
//         "content": ""
//     },
//     {
//         "slug": 'budget',
//         "title": "Budget",
//         "excerpt": "",
//         "coverImage": "/assets/logo.png",
//         "content": ""
//     },
//     {
//         "slug": 'storage',
//         "title": "Storage",
//         "excerpt": "",
//         "coverImage": "/assets/logo.png",
//         "content": ""
//     },
//     {
//         "slug": 'data',
//         "title": "Data",
//         "excerpt": "",
//         "coverImage": "/assets/logo.png",
//         "content": ""
//     }
// ]

// // Content design is the practice of creating content experiences that meet a user’s intent, contextual expectations, and usability needs.
// export const posts = [
//     {
//         "slug": "hellow-world",
//         "category": categories.find(category => category.slug == "random"),
//         "title": "Hello world",
//         "excerpt": "Hello world - let me introduce you to Data Crump. Data Crump - is a personal project about my passion for data engineering",
//         "coverImage": "/assets/random/hello-world/hello-world_cover.png",
//         "cardImage": "/assets/random/hello-world/hello-world_card.png",
//         "date": "2022-10-02T23:36:35.000Z",
//         "contentPath": "/random/hello-world.md",
//         "content": "",
//         "top": false,
//         "visible": true,
//         "tags": tags.filter(tag => [].includes(tag.slug))
//     },
//     {
//         "slug": "whoami",
//         "category": categories.find(category => category.slug == "random"),
//         "title": "whoami",
//         "excerpt": "Hi I'm a data engineer and I genuinely believe that anyone who starts sharing his opinion, must first present one's credibility",
//         "coverImage": "/assets/random/whoami/whoami_cover.png",
//         "cardImage": "/assets/random/whoami/whoami_card.png",
//         "date": "2022-10-06T23:36:35.000Z",
//         "contentPath": "/random/whoami.md",
//         "content": "",
//         "top": true,
//         "visible": true,
//         "tags": tags.filter(tag => [].includes(tag.slug))
//     },
//     {
//         "slug": "bucket-versioning",
//         "category": categories.find(category => category.slug == "aws"),
//         "title": "How to burn money with S3",
//         "excerpt": "S3 Bucket versioning is one of the best features provided by AWS it's also one of the best ways to burn your budget",
//         "coverImage": "/assets/s3/bucket-versioning/title_cover.png",
//         "cardImage": "/assets/s3/bucket-versioning/title_card.png",
//         "date": "2022-10-10T12:36:35.000Z",
//         "contentPath": "/aws/bucket-versioning.md",
//         "content": "",
//         "top": true,
//         "visible": true,
//         "tags": tags.filter(tag => ['s3', 'aws', 'budget'].includes(tag.slug))
//     },
//     {
//         "slug": "storage",
//         "category": categories.find(category => category.slug == "basics"),
//         "title": "Object vs block store",
//         "excerpt": "Cheap, scalable, and yet is it really the best storage type for your next big data project",
//         "coverImage": "/assets/basics/storage/storage_cover.png",
//         "cardImage": "/assets/basics/storage/storage_card.png",
//         "date": "2022-10-13T12:36:35.000Z",
//         "contentPath": "/basics/storage.md",
//         "content": "",
//         "top": true,
//         "visible": true,
//         "tags": tags.filter(tag => ['aws', 'storage'].includes(tag.slug))
//     },
//     {
//         "slug": "file-formats",
//         "category": categories.find(category => category.slug == "basics"),
//         "title": "File formats",
//         "excerpt": "I was surpsided by results then comparing Parquet, Avro, JSON and CSV for both storage and speed",
//         "coverImage": "/assets/basics/file-formats/format_cover.png",
//         "cardImage": "/assets/basics/file-formats/format_card.png",
//         "date": "2022-10-20T20:36:35.000Z",
//         "contentPath": "/basics/file-formats.md",
//         "content": "",
//         "top": true,
//         "visible": true,
//         "tags": tags.filter(tag => ['storage'].includes(tag.slug))
//     },
//     {
//         "slug": "prologue",
//         "category": categories.find(category => category.slug == "data-ocean"),
//         "title": "Data Ocean: Prologue",
//         "excerpt": "Data platform on Digital Ocean infrastructure. How hard could it be to build it from scratch",
//         "coverImage": "/assets/data-ocean/prologue/cover.png",
//         "cardImage": "/assets/data-ocean/prologue/card.png",
//         "date": "2022-10-22T24:36:35.000Z",
//         "contentPath": "/data-ocean/prologue.md",
//         "content": "",
//         "top": true,
//         "visible": true,
//         "tags": tags.filter(tag => ['data'].includes(tag.slug))
//     }

// ]