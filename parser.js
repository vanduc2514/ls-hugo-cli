import logseqQueryFactory from './query'

let logseqBasePath

const logseqQuery = logseqQueryFactory(logseqBasePath)

function parse() {
    const querry =
        "[:find (pull ?p [*]) :where [?p :block/properties ?pr] [(get ?pr :public) ?t] [(= true ?t)][?p :block/name ?n]]"
    let pages = logseqQuery(querry)
    for (let page in pages) {
        parsePage(page)
    }
}

function parsePage(page) {
    let logseqPage = parseLogSeqPage(page)
    let hugoFrontMatter = toHugoFrontMatter(logseqPage.metadata)
}

// NOT NULL SAFETY
function parseLogSeqPage(page) {
    let metadata = {
        // How to query this data ??
        title: null,
        fileName: null,
    }

    let properties = page["properties"]
    metadata.tag = properties["tag"]
    metadata.category = properties["category"] ?? properties["categories"]
    metadata.createDate = hugoDate(page["created-at"])
    metadata.updateDate = hugoDate(page["updated-at"])

    return {
        originalName: page["original-name"],
        metadata: metadata
    }
}

// https://gohugo.io/content-management/front-matter/
function toHugoFrontMatter(metaData) {
    let ret = `---`
    for (let [prop, value] of Object.entries(metaData)) {
        if (Array.isArray(value)) {
            ret += `\n${prop}:`
            value.forEach((element) => (ret += `\n- ${element}`))
        } else {
            ret += `\n${prop}: ${value}`
        }
    }
    ret += "\n---"
    return ret
};

function hugoDate(timestamp) {
    let date = new Date(timestamp)

    //if date.getdate does not have a zero, add A ZERO BEFORE IT
    let month
    if (date.getMonth() + 1 < 10) {
        month = `0${date.getMonth() + 1}`
    } else {
        month = `${date.getMonth() + 1}`
    }
    let day
    if (date.getDate() < 10) {
        day = `0${date.getDate()}`
    } else {
        day = `${date.getDate()}`
    }

    return `${date.getFullYear()}-${month}-${day}`
}