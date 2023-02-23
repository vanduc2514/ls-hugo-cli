import { parseLogSeqPage } from './parser.js';

const sampleData = [
    {
        uuid: {
            ge: "63f78668-61eb-4622-8913-e1b1d98aec5b",
            D: null,
            I: 2153775104,
            M: 2048
        },
        properties: {
            public: true
        },
        journal: false,
        "updated-at": 1677166183261,
        "created-at": 1677166183261,
        id: 24,
        name: "single sign-on",
        file: {
            id: 618
        },
        "original-name": "Single Sign-On"
    },
    {
        uuid: {
            ge: "63f78668-101c-4039-9055-bc84907ad89b",
            D: null,
            I: 2153775104,
            M: 2048
        },
        properties: {
            public: true,
            tags: [
                "book"
            ]
        },
        journal: false,
        "updated-at": 1677166184041,
        "created-at": 1677166184041,
        tags: [
            {
                id: 300
            }
        ],
        id: 426,
        name: "tự động hóa và chúng ta",
        file: {
            id: 649
        },
        "original-name": "Tự động hóa và chúng ta"
    }
]

// Test Runner
let test = initTest();
test.givenFakePage_whenParseFakePage_thenReturnMetadata();

// Should return metadata
function initTest() {
    return {
        givenFakePage_whenParseFakePage_thenReturnMetadata: () => {
            console.log("givenFakePage_whenParseFakePage_thenReturnMetadata\n")
            let result = []
            for (let fakePage of sampleData) {
                let metadata = parseLogSeqPage(fakePage);
                result.push(metadata)
            }
            console.log(JSON.stringify(result, 0, 2));
        }
    }
}